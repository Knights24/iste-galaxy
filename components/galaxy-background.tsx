"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Float, Sparkles, Points } from "@react-three/drei"
import { EffectComposer, Bloom, ChromaticAberration, DepthOfField, Noise } from "@react-three/postprocessing"
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { BlendFunction } from "postprocessing"

// Starfield Component with twinkling effect
function Starfield({ count = 5000 }) {
  const pointsRef = useRef<THREE.Points>(null)

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Random positions in a large sphere
      const radius = Math.random() * 200 + 50
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      // Star colors (white, blue, yellow tints)
      const colorChoice = Math.random()
      if (colorChoice < 0.7) {
        colors[i * 3] = 1
        colors[i * 3 + 1] = 1
        colors[i * 3 + 2] = 1
      } else if (colorChoice < 0.85) {
        colors[i * 3] = 0.8
        colors[i * 3 + 1] = 0.9
        colors[i * 3 + 2] = 1
      } else {
        colors[i * 3] = 1
        colors[i * 3 + 1] = 0.9
        colors[i * 3 + 2] = 0.7
      }

      sizes[i] = Math.random() * 2 + 0.5
    }

    return [positions, colors, sizes]
  }, [count])

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime
      const material = pointsRef.current.material as THREE.PointsMaterial

      // Subtle twinkling effect
      material.opacity = 0.6 + Math.sin(time * 0.5) * 0.2
    }
  })

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

// Nebula Cloud Component
function NebulaCloud({ position, color, scale = 1 }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.x = time * 0.01
      meshRef.current.rotation.y = time * 0.005
      meshRef.current.rotation.z = time * 0.008

      // Subtle breathing effect
      const breathe = 1 + Math.sin(time * 0.3) * 0.1
      meshRef.current.scale.setScalar(scale * breathe)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[8, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

// Glowing Planet Component
function GlowingPlanet({ position, color, size = 1 }) {
  const planetRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (planetRef.current && glowRef.current) {
      const time = state.clock.elapsedTime
      planetRef.current.rotation.y = time * 0.2
      glowRef.current.rotation.y = time * 0.1
    }
  })

  return (
    <group position={position}>
      {/* Main planet */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} roughness={0.8} />
      </mesh>

      {/* Glow effect */}
      <mesh ref={glowRef} scale={1.5}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

// Particle Flow Component
function ParticleFlow() {
  const particlesRef = useRef<THREE.Points>(null)

  const particleCount = 200
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100

      velocities[i * 3] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
    }

    return [positions, velocities]
  }, [])

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3]
        positions[i * 3 + 1] += velocities[i * 3 + 1]
        positions[i * 3 + 2] += velocities[i * 3 + 2]

        // Reset particles that drift too far
        if (Math.abs(positions[i * 3]) > 50) {
          positions[i * 3] = (Math.random() - 0.5) * 100
        }
        if (Math.abs(positions[i * 3 + 1]) > 50) {
          positions[i * 3 + 1] = (Math.random() - 0.5) * 100
        }
        if (Math.abs(positions[i * 3 + 2]) > 50) {
          positions[i * 3 + 2] = (Math.random() - 0.5) * 100
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.3} color="#00ffff" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
    </Points>
  )
}

// Main Galaxy Scene Component
function GalaxyScene() {
  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={0.1} color="#1a1a2e" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />
      <pointLight position={[0, 20, 0]} intensity={0.4} color="#8000ff" />

      {/* Starfield */}
      <Starfield count={8000} />

      {/* Nebula Clouds */}
      <NebulaCloud position={[20, 10, -30]} color="#4a0e4e" scale={1.5} />
      <NebulaCloud position={[-25, -15, -40]} color="#0e1a4a" scale={1.2} />
      <NebulaCloud position={[15, -20, -25]} color="#4a1e0e" scale={1.8} />
      <NebulaCloud position={[-30, 25, -50]} color="#1e4a0e" scale={1.0} />

      {/* Glowing Planets */}
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <GlowingPlanet position={[30, 15, -20]} color="#9333ea" size={1.5} />
      </Float>

      <Float speed={0.3} rotationIntensity={0.1} floatIntensity={0.3}>
        <GlowingPlanet position={[-35, -10, -35]} color="#ec4899" size={1.0} />
      </Float>

      <Float speed={0.7} rotationIntensity={0.1} floatIntensity={0.1}>
        <GlowingPlanet position={[10, -25, -45]} color="#06b6d4" size={0.8} />
      </Float>

      {/* Particle Flow */}
      <ParticleFlow />

      {/* Additional Sparkles */}
      <Sparkles count={100} scale={[50, 50, 50]} size={2} speed={0.2} color="#ffffff" opacity={0.4} />

      {/* Distant Stars */}
      <Stars radius={300} depth={100} count={3000} factor={8} saturation={0.3} fade speed={0.1} />
    </>
  )
}

// Main Galaxy Background Component
export default function GalaxyBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <GalaxyScene />

        {/* Camera Controls */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.1} />

        {/* Post-processing Effects */}
        <EffectComposer>
          <Bloom intensity={0.5} luminanceThreshold={0.1} luminanceSmoothing={0.9} blendFunction={BlendFunction.ADD} />
          <ChromaticAberration offset={[0.0005, 0.0005]} blendFunction={BlendFunction.NORMAL} />
          <DepthOfField focusDistance={0.02} focalLength={0.05} bokehScale={3} />
          <Noise opacity={0.02} blendFunction={BlendFunction.OVERLAY} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
