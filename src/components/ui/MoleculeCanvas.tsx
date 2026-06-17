"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import * as THREE from "three";

// Scientific nucleotide color palette — proper biological colors
// A = Adenine (Blue)  T = Thymine (Red)
// G = Guanine (Green)  C = Cytosine (Yellow/Orange)
const NUCLEOTIDE_COLORS = {
  A: "#3b82f6",  // Blue — Adenine
  T: "#ef4444",  // Red — Thymine
  G: "#22c55e",  // Green — Guanine
  C: "#f59e0b",  // Yellow/Orange — Cytosine
};

const NUCLEOTIDE_EMISSIVE = {
  A: "#1d4ed8",
  T: "#dc2626",
  G: "#16a34a",
  C: "#d97706",
};

// Pairing rule: A pairs with T, G pairs with C
const BASE_PAIRS: [keyof typeof NUCLEOTIDE_COLORS, keyof typeof NUCLEOTIDE_COLORS][] = [
  ["A", "T"],
  ["T", "A"],
  ["G", "C"],
  ["C", "G"],
];

function DNAStructure() {
  const groupRef = useRef<THREE.Group>(null);

  const { atoms, bonds } = useMemo(() => {
    const numPairs = 24;
    const radius = 1.4;
    const height = 7;
    const turns = 3;

    const _atoms: { pos: [number, number, number]; size: number; color: string; emissive: string; isBackbone: boolean }[] = [];
    const _bonds: [number, number][] = [];

    for (let i = 0; i < numPairs; i++) {
      const t = i / (numPairs - 1);
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      // Backbone spheres — silver/platinum metallic
      _atoms.push({ pos: [x1, y, z1], size: 0.12, color: "#94a3b8", emissive: "#475569", isBackbone: true });
      _atoms.push({ pos: [x2, y, z2], size: 0.12, color: "#94a3b8", emissive: "#475569", isBackbone: true });

      // Nucleotide base-pair spheres — scientifically colored with glow
      const pair = BASE_PAIRS[i % 4];
      _atoms.push({ pos: [x1 * 0.45, y, z1 * 0.45], size: 0.1, color: NUCLEOTIDE_COLORS[pair[0]], emissive: NUCLEOTIDE_EMISSIVE[pair[0]], isBackbone: false });
      _atoms.push({ pos: [x2 * 0.45, y, z2 * 0.45], size: 0.1, color: NUCLEOTIDE_COLORS[pair[1]], emissive: NUCLEOTIDE_EMISSIVE[pair[1]], isBackbone: false });

      const idx1 = i * 4;
      const idx2 = idx1 + 1;
      const idx3 = idx1 + 2;
      const idx4 = idx1 + 3;

      // Backbone sugar-phosphate bonds (vertical)
      if (i > 0) {
        _bonds.push([idx1, idx1 - 4]);
        _bonds.push([idx2, idx2 - 4]);
      }

      // Horizontal nucleotide bonds (rungs of the ladder)
      _bonds.push([idx1, idx3]);
      _bonds.push([idx3, idx4]);
      _bonds.push([idx4, idx2]);
    }

    return { atoms: _atoms, bonds: _bonds };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.06;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {atoms.map((atom, i) => (
        <mesh key={`atom-${i}`} position={atom.pos}>
          <sphereGeometry args={[atom.size, 16, 16]} />
          <meshStandardMaterial
            color={atom.color}
            emissive={atom.emissive}
            emissiveIntensity={atom.isBackbone ? 0.05 : 0.2}
            transparent={true}
            opacity={atom.isBackbone ? 0.5 : 0.6}
            roughness={atom.isBackbone ? 0.4 : 0.2}
            metalness={atom.isBackbone ? 0.6 : 0.5}
          />
        </mesh>
      ))}

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
            <cylinderGeometry args={[0.015, 0.015, length, 4]} />
            <meshStandardMaterial
              color="#64748b"
              emissive="#475569"
              emissiveIntensity={0.05}
              transparent
              opacity={0.15}
              roughness={0.3}
              metalness={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function AtmosphericDust() {
  const count = 120;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
      ref.current.rotation.x = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={true}>
      <PointMaterial
        transparent
        color="#94a3b8"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.12}
      />
    </Points>
  );
}

function SceneContent() {
  return (
    <>
      {/* Soft, cool-toned scientific lighting */}
      <ambientLight intensity={0.3} color="#e2e8f0" />
      <directionalLight position={[8, 10, 5]} intensity={0.6} color="#f1f5f9" />
      <directionalLight position={[-8, -6, -4]} intensity={0.25} color="#bfdbfe" />
      
      {/* Subtle colored point lights for nucleotide glow */}
      <pointLight position={[2, 0, 2]} intensity={0.15} color="#3b82f6" distance={8} />
      <pointLight position={[-2, 0, -2]} intensity={0.15} color="#22c55e" distance={8} />
      <pointLight position={[0, 3, 0]} intensity={0.1} color="#f59e0b" distance={6} />

      <Float speed={0.8} rotationIntensity={0.12} floatIntensity={0.15}>
        <DNAStructure />
      </Float>

      <AtmosphericDust />

      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </>
  );
}

export default function MoleculeCanvas({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0, opacity: 0.35 }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent", pointerEvents: "none" }}
        dpr={[1, 1.5]}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
