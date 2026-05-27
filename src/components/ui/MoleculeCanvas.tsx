"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import * as THREE from "three";

// --- Optimized Cinematic DNA Structure ---
function DNAStructure() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate DNA Helix Geometry
  const { atoms, bonds } = useMemo(() => {
    // Reduced pair count from 24 to 18 for performance
    const numPairs = 18;
    const radius = 1.2;
    const height = 6;
    const turns = 2.5;

    const _atoms: { pos: [number, number, number]; size: number; color: string }[] = [];
    const _bonds: [number, number][] = [];

    for (let i = 0; i < numPairs; i++) {
      const t = i / (numPairs - 1);
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;

      // Backbone 1
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      _atoms.push({ pos: [x1, y, z1], size: 0.2, color: "#b8976a" });

      // Backbone 2
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;
      _atoms.push({ pos: [x2, y, z2], size: 0.2, color: "#6f4e37" });

      // Base pairs (connecting center)
      _atoms.push({ pos: [x1 * 0.4, y, z1 * 0.4], size: 0.15, color: "#a0845c" });
      _atoms.push({ pos: [x2 * 0.4, y, z2 * 0.4], size: 0.15, color: "#5c4033" });

      const idx1 = i * 4;
      const idx2 = idx1 + 1;
      const idx3 = idx1 + 2;
      const idx4 = idx1 + 3;

      // Connect backbones vertically
      if (i > 0) {
        _bonds.push([idx1, idx1 - 4]);
        _bonds.push([idx2, idx2 - 4]);
      }
      
      // Connect horizontal base pairs
      _bonds.push([idx1, idx3]);
      _bonds.push([idx3, idx4]);
      _bonds.push([idx4, idx2]);
    }

    return { atoms: _atoms, bonds: _bonds };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Atoms - using highly optimized PhysicalMaterial instead of Transmission */}
      {atoms.map((atom, i) => (
        <mesh key={`atom-${i}`} position={atom.pos}>
          {/* Reduced segments from 32 to 16 */}
          <sphereGeometry args={[atom.size, 16, 16]} />
          <meshPhysicalMaterial
            color={atom.color}
            transparent={true}
            opacity={0.85}
            roughness={0.1}
            metalness={0.4}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>
      ))}

      {/* Bonds */}
      {bonds.map(([a, b], i) => {
        const start = new THREE.Vector3(...atoms[a].pos);
        const end = new THREE.Vector3(...atoms[b].pos);
        const mid = start.clone().lerp(end, 0.5);
        const length = start.distanceTo(end);
        const direction = end.clone().sub(start).normalize();
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          direction
        );

        return (
          <mesh key={`bond-${i}`} position={mid} quaternion={quaternion}>
            {/* Reduced radial segments to 4 (diamond shape) for massive perf gain */}
            <cylinderGeometry args={[0.02, 0.02, length, 4]} />
            <meshStandardMaterial color="#a0845c" transparent opacity={0.3} roughness={0.2} metalness={0.8} />
          </mesh>
        );
      })}
    </group>
  );
}

// --- Cinematic Atmospheric Particles (Optimized) ---
function AtmosphericDust() {
  // Reduced from 1000 to 200 for perf
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={true}>
      <PointMaterial
        transparent
        color="#c5a03f"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.4} color="#f8f4eb" />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.6} color="#a0845c" />
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <DNAStructure />
      </Float>
      
      <AtmosphericDust />

      {/* Automatically scales down resolution on low FPS */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </>
  );
}

export default function MoleculeCanvas({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity: 0.9 }}>
      {/* frameloop="demand" not ideal for continuous rotation, but dpr clamp helps */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: false, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
