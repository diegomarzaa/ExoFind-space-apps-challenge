"use client"

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrthographicCamera, shaderMaterial, Html } from '@react-three/drei'
import * as THREE from 'three'
import { EffectComposer, ShaderPass } from 'three-stdlib'
import { motion } from 'framer-motion'

const StarMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.2, 0.4, 1), extraGlow: 0 },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float time;
    uniform vec3 color;
    uniform float extraGlow;
    varying vec2 vUv;
    void main() {
      vec2 center = vec2(0.5, 0.5);
      float d = distance(vUv, center);
      float brightness = smoothstep(0.5, 0.0, d);
      float glow = sin(time * 2.0) * 0.5 + 0.5;
      brightness += extraGlow * glow * (1.0 - d);
      gl_FragColor = vec4(color * brightness, brightness);
    }
  `
)

extend({ StarMaterial })

const Star = ({ position, size, color, orbitAmplitude = 0.4, orbitDirection = 1, orbitSpeed = 1, extraGlow = 0 }) => {
  const ref = useRef()
  const [x, y, z] = position

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.time += 0.1
      ref.current.material.extraGlow = extraGlow
      const directionMultiplier = orbitDirection === 1 ? 1 : -1
      ref.current.position.x = x + Math.sin(state.clock.elapsedTime * orbitSpeed) * orbitAmplitude * directionMultiplier
      ref.current.position.y = y + Math.cos(state.clock.elapsedTime * orbitSpeed) * orbitAmplitude * directionMultiplier
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[size, size]} />
      <starMaterial color={color} />
    </mesh>
  )
}

const DistantStars = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 500 }, () => [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      -5
    ])
  }, [])

  return (
    <>
      {stars.map((pos, index) => (
        <mesh key={index} position={pos}>
          <planeGeometry args={[0.02, 0.02]} />
          <starMaterial color={new THREE.Color(0.7, 0.7, 0.7)} />
        </mesh>
      ))}
    </>
  )
}

const TelescopeEffect = () => {
  const { gl } = useThree()
  const composer = useRef()

  const effect = useMemo(() => {
    return new ShaderPass({
      uniforms: {
        tDiffuse: { value: null },
        distortion: { value: 0.1 },
        time: { value: 0 },
        vignette: { value: 0.5 }
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
        uniform float vignette;
        varying vec2 vUv;
        
        void main() {
          vec2 center = vec2(0.5, 0.5);
          vec2 uv = vUv;
          float d = distance(uv, center);
          float radialDistortion = (1.0 - smoothstep(0.0, 0.5, d)) * distortion * sin(time * 2.0);
          uv += (uv - center) * d * d * radialDistortion;
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

export default function ImagenesDiretasComponent() {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <div className="w-full h-full" style={{ maxWidth: '2200px' }}> {/* Adjust maxWidth as needed */}
          <Canvas>
            <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={100} />
            <color attach="background" args={['#000010']} />
            <ambientLight intensity={0.6} />
            <DistantStars />
            
            <Star position={[-3.5, 1, 0]} size={0.55} color={new THREE.Color(1, 0.7, 0.3)} orbitAmplitude={1.1} orbitDirection={1} orbitSpeed={0.8}/>
            <Star position={[1.7, -1.5, 0]} size={0.525} color={new THREE.Color(0.3, 0.5, 1)} orbitAmplitude={0.3} orbitDirection={-1} orbitSpeed={1.1}/>
            <Star position={[-0.7, 2.5, 0]} size={0.32} color={new THREE.Color(1, 0.4, 0.4)} orbitAmplitude={-0.8} orbitDirection={-1} orbitSpeed={2}/>
            <Star position={[2.2, 1.8, 0]} size={0.38} color={new THREE.Color(0.5, 1, 0.5)} orbitAmplitude={-0.9} orbitDirection={-1} orbitSpeed={0.7}/>
            <Star position={[-1.5, -1.8, 0]} size={0.45} color={new THREE.Color(1.3, 0.8, 1)} orbitAmplitude={1.0} orbitDirection={1} orbitSpeed={1.2}/>
            <Star position={[0, 0, 0]} size={0.6} color={new THREE.Color(1, 1, 1)} orbitAmplitude={1.2} orbitDirection={1} orbitSpeed={1} extraGlow={0.2}/>
            
            <TelescopeEffect />
  
            <Html position={[0, 2, 0]} center>
              <motion.h1
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: -150, opacity: 1 }}
                transition={{ duration: 1, ease: 'backOut' }}
                className="text-5xl md:text-6xl font-extrabold text-white"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Velocidad Radial
              </motion.h1>
            </Html>
          </Canvas>
        </div>
      </div>
    );
  }