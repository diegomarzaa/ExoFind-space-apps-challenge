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
      float brightness = 0.7 * (1.0 - smoothstep(0.0, 0.5, d));
      brightness += 0.3 * sin(time * 5.0 + d * 10.0);
      gl_FragColor = vec4(color * brightness, 1.0);
    }
  `
)

extend({ StarMaterial })

// Component for individual star
const Star = ({ position, size, color, perturbation = 0 }) => {
  const ref = useRef()
  const [x, y, z] = position

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.material.time += delta
      ref.current.position.x = x + Math.sin(state.clock.elapsedTime) * 0.2
      ref.current.position.y = y + Math.cos(state.clock.elapsedTime) * 0.2
      if (perturbation > 0) {
        ref.current.position.x += Math.sin(state.clock.elapsedTime * 2) * perturbation
        ref.current.position.y += Math.cos(state.clock.elapsedTime * 3) * perturbation
      }
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[size, size]} />
      <starMaterial color={color} />
    </mesh>
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
        time: { value: 0 }
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
        varying vec2 vUv;
        void main() {
          vec2 center = vec2(0.5, 0.5);
          vec2 uv = vUv;
          float d = distance(uv, center);
          uv += (uv - center) * d * d * distortion * sin(time * 2.0);
          gl_FragColor = texture2D(tDiffuse, uv);
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
        <Star position={[-1.5, 1, 0]} size={0.1} color={new THREE.Color(1, 0.7, 0.3)} />
        <Star position={[1, -0.5, 0]} size={0.15} color={new THREE.Color(0.3, 0.5, 1)} />
        <Star position={[-0.7, -1.2, 0]} size={0.08} color={new THREE.Color(1, 0.4, 0.4)} />
        <Star position={[1.2, 1.3, 0]} size={0.12} color={new THREE.Color(0.5, 1, 0.5)} />
        <Star 
          position={[0, 0, 0]} 
          size={0.2} 
          color={new THREE.Color(1, 1, 0.8)} 
          perturbation={0.05}
        />
        <TelescopeEffect />
      </Canvas>
    </div>
  )
}