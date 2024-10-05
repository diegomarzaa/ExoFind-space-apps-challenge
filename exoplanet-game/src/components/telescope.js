"use client"

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrthographicCamera, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { EffectComposer, ShaderPass } from 'three-stdlib'

// Shader for stars
const StarMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.2, 0.4, 1) },
    // vertex shader
    `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    // fragment shader
    `
      uniform float time;
      uniform vec3 color;
      varying vec2 vUv;
      void main() {
        vec2 center = vec2(0.5, 0.5);
        float d = distance(vUv, center);
        
        // Parámetros del marco circular
        float innerRadius = 0.3; // Radio interno
        float outerRadius = 0.5; // Radio externo
        
        // Calcular el brillo basado en la distancia
        float brightness = smoothstep(innerRadius, outerRadius, d) * 0.7; 
        
        gl_FragColor = vec4(color * brightness, 1.0);
      }
    `
)


extend({ StarMaterial })

// Component for individual star
const Star = ({ position, size, color, perturbation = 0, orbitAmplitude = 0.4, orbitDirection = 1, orbitSpeed = 1 }) => {
    const ref = useRef()
    const [x, y, z] = position
  
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.material.time += delta
        
        // Utiliza orbitAmplitude, orbitDirection y orbitSpeed para modificar la posición
        const directionMultiplier = orbitDirection === 1 ? 1 : -1; // Cambia la dirección
        ref.current.position.x = x + Math.sin(state.clock.elapsedTime * orbitSpeed) * orbitAmplitude * directionMultiplier;
        ref.current.position.y = y + Math.cos(state.clock.elapsedTime * orbitSpeed) * orbitAmplitude * directionMultiplier;
  
        if (perturbation > 0) {
          ref.current.position.x += Math.sin(state.clock.elapsedTime * 2) * perturbation;
          ref.current.position.y += Math.cos(state.clock.elapsedTime * 3) * perturbation;
        }
      }
    })
    return (
        <mesh ref={ref} position={position}>
          <planeGeometry args={[size * 1.5, size * 1.5]} />
          <starMaterial color={color} />
        </mesh>
      )
}


// Component for distant stars (background points)
const DistantStars = () => {
    const stars = useMemo(() => {
      const positions = []
      for (let i = 0; i < 500; i++) { // Añadimos 500 estrellas lejanas
        positions.push([
          (Math.random() - 0.5) * 10,  // Distribución aleatoria en el plano
          (Math.random() - 0.5) * 10,
          -5
        ])
      }
      return positions
    }, [])
  
    return (
      <>
        {stars.map((pos, index) => (
          <mesh key={index} position={pos}>
            <circleGeometry args={[0.02, 6]} />  {/* Tamaño de los puntitos */}
            <meshBasicMaterial color={new THREE.Color(0.7, 0.7, 0.7)} transparent opacity={0.5} />
            </mesh>
        ))}
      </>
    )
  }
  

// Component for telescope distortion effect
const TelescopeEffect = () => {
    const { gl, scene, camera } = useThree()
    const composer = useRef()
  
    const effect = useMemo(() => {
      return new ShaderPass({
        uniforms: {
          tDiffuse: { value: null },
          distortion: { value: 0.1 },
          time: { value: 0 },
          vignette: { value: 0.5 } // Valor para el viñeteado
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D tDiffuse;
          uniform float distortion;
          uniform float time;
          uniform float vignette; // Para el viñeteado
          varying vec2 vUv;
          
          void main() {
            vec2 center = vec2(0.5, 0.5);
            vec2 uv = vUv;
  
            // Calcular la distancia desde el centro
            float d = distance(uv, center);
  
            // Aplicar distorsión radial
            float radialDistortion = (1.0 - smoothstep(0.0, 0.5, d)) * distortion * sin(time * 2.0);
            uv += (uv - center) * d * d * radialDistortion;
  
            // Añadir viñeteado
            float vignetteEffect = smoothstep(0.5, 1.0, d) * vignette;
            gl_FragColor = texture2D(tDiffuse, uv) * (1.0 - vignetteEffect);
          }
        `
      })
    }, [])
  
    useFrame((state) => {
      effect.uniforms.time.value = state.clock.elapsedTime
      composer.current.render()
    })
  
    useMemo(() => {
      composer.current = new EffectComposer(gl)
      composer.current.addPass(effect)
    }, [gl, effect])
  
    return null
  }
  

// Main component
export default function Component() {
    return (
      <div className="w-full h-screen bg-black">
        <Canvas>
          <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={100} />
          <color attach="background" args={['#000010']} />
          <ambientLight intensity={0.1} />
          <DistantStars /> {/* Añadimos estrellas lejanas */}
          
          {/* Ahora puedes modificar la amplitud y la dirección de las órbitas */}
          <Star position={[-3.5, 1, 0]} size={0.55} color={new THREE.Color(1, 0.7, 0.3)} orbitAmplitude={1.1} orbitDirection={1} orbitSpeed={0.8}/>
          <Star position={[1.7, -1.5, 0]} size={0.525} color={new THREE.Color(0.3, 0.5, 1)} orbitAmplitude={0.3} orbitDirection={-1} orbitSpeed={1.1}/>
          <Star position={[-0.7, 2.5, 0]} size={0.32} color={new THREE.Color(1, 0.4, 0.4)} orbitAmplitude={-0.8} orbitDirection={-1} orbitSpeed={2}/>
          <Star position={[2.2, 1.8, 0]} size={0.38} color={new THREE.Color(0.5, 1, 0.5)} orbitAmplitude={-0.9} orbitDirection={-1} orbitSpeed={0.7}/>
          <Star position={[-1.5, -1.8, 0]} size={0.45} color={new THREE.Color(1.3, 0.8, 1)} orbitAmplitude={1.0} orbitDirection={1} orbitSpeed={1.2}/>
          <Star position={[0, 0, 0]} size={0.6} color={new THREE.Color(1, 1, 1)} perturbation={0.3} orbitAmplitude={1.2} orbitDirection={1} orbitSpeed={1}/>
          
          <TelescopeEffect />
        </Canvas>
      </div>
    )
  }
