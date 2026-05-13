"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, MeshDistortMaterial, Torus, Environment, ContactShadows, Sparkles } from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

function RobotTutor() {
  const headRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouse.current.x * 0.5, 0.08);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mouse.current.y * 0.3, 0.08);
      headRef.current.position.y = Math.sin(time) * 0.1;
    }

    const eyeIntensity = 5 + Math.sin(time * 3) * 2;
    if (leftEyeRef.current && leftEyeRef.current.material instanceof THREE.MeshStandardMaterial) {
      leftEyeRef.current.material.emissiveIntensity = eyeIntensity;
    }
    if (rightEyeRef.current && rightEyeRef.current.material instanceof THREE.MeshStandardMaterial) {
      rightEyeRef.current.material.emissiveIntensity = eyeIntensity;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer green torus ring */}
      <Float speed={4} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[3.2, 0.015, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#16a34a" emissive="#16a34a" emissiveIntensity={3} transparent opacity={0.5} />
        </Torus>
      </Float>
      {/* Inner yellow torus ring */}
      <Float speed={3} rotationIntensity={4} floatIntensity={2}>
        <Torus args={[2.8, 0.01, 16, 100]} rotation={[0, Math.PI / 3, 0]}>
          <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={2} transparent opacity={0.4} />
        </Torus>
      </Float>

      <group ref={headRef}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          {/* Head sphere */}
          <mesh castShadow>
            <sphereGeometry args={[1.2, 64, 64]} />
            <meshStandardMaterial color="#f0f9f4" roughness={0.15} metalness={0.6} emissive="#d1fae5" emissiveIntensity={0.1} />
          </mesh>
          
          {/* Visor */}
          <mesh position={[0, 0.1, 0.4]}>
            <sphereGeometry args={[1.22, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
            <meshStandardMaterial transparent opacity={0.3} color="#16a34a" roughness={0.1} metalness={0.5} />
          </mesh>

          {/* Eyes */}
          <group position={[0, 0.3, 0.95]}>
            <mesh ref={leftEyeRef} position={[-0.45, 0, 0]}>
              <sphereGeometry args={[0.12, 32, 32]} />
              <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={2} />
            </mesh>
            <mesh ref={rightEyeRef} position={[0.45, 0, 0]}>
              <sphereGeometry args={[0.12, 32, 32]} />
              <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={2} />
            </mesh>
          </group>

          {/* Smile bar */}
          <mesh position={[0, -0.3, 1.1]}>
            <boxGeometry args={[0.4, 0.04, 0.04]} />
            <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={3} />
          </mesh>
          
          {/* Outer glow sphere */}
          <mesh scale={0.9}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#16a34a" emissive="#16a34a" emissiveIntensity={0.3} transparent opacity={0.08} />
          </mesh>
        </Float>
      </group>

      {/* Floating orb below */}
      <Float speed={6} floatIntensity={4}>
        <mesh position={[0, -2.8, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <MeshDistortMaterial color="#facc15" emissive="#facc15" emissiveIntensity={8} speed={5} distort={0.7} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 z-0"
      style={{ background: "transparent" }}
    >
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
          <ambientLight intensity={1.5} color="#ffffff" />
          <pointLight position={[10, 10, 10]} intensity={3} color="#16a34a" />
          <pointLight position={[-10, -10, -10]} intensity={2} color="#facc15" />
          <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={3} castShadow />
          <Environment preset="dawn" />
          <Sparkles count={200} scale={10} size={2} speed={0.3} color="#facc15" />
          <RobotTutor />
          <ContactShadows position={[0, -3.5, 0]} opacity={0.15} scale={10} blur={2.5} far={4.5} color="#16a34a" />
          <fog attach="fog" args={["#F9FAF7", 12, 25]} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
