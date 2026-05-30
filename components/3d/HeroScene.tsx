"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

function SceneCore() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 2]} intensity={1.2} color="#22d3ee" />
      <directionalLight position={[-4, -2, -3]} intensity={0.8} color="#fb923c" />

      <Float speed={1.7} rotationIntensity={1.2} floatIntensity={1.4}>
        <mesh>
          <torusKnotGeometry args={[1.1, 0.3, 180, 28]} />
          <MeshDistortMaterial
            color="#22d3ee"
            roughness={0.2}
            metalness={0.65}
            distort={0.3}
            speed={2.4}
          />
        </mesh>
      </Float>

      <Environment preset="city" />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.3} />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="h-64 w-full overflow-hidden rounded-2xl border border-surface-edge bg-black/30 md:h-72">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 45 }}>
        <SceneCore />
      </Canvas>
    </div>
  );
}
