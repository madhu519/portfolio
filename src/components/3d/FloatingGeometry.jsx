import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({
  position = [0, 0, 0],
  geometry = 'icosahedron',
  color = 'hsl(250, 85%, 65%)',
  size = 0.5,
  wireframe = false,
  distort = 0,
  speed = 1,
  opacity = 0.2,
  floatIntensity = 1,
}) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.1 * speed;
    meshRef.current.rotation.z = t * 0.05 * speed;
  });

  const getGeometry = () => {
    switch (geometry) {
      case 'torus':
        return <torusGeometry args={[size, size * 0.3, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[size, 0]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[size, 0]} />;
      case 'torusKnot':
        return <torusKnotGeometry args={[size, size * 0.25, 64, 16]} />;
      case 'icosahedron':
      default:
        return <icosahedronGeometry args={[size, 1]} />;
    }
  };

  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={floatIntensity}
      floatingRange={[-0.3, 0.3]}
    >
      <mesh ref={meshRef} position={position}>
        {getGeometry()}
        {distort > 0 ? (
          <MeshDistortMaterial
            color={color}
            distort={distort}
            speed={2}
            transparent
            opacity={opacity}
            roughness={0.2}
            metalness={0.8}
            wireframe={wireframe}
            blending={THREE.AdditiveBlending}
          />
        ) : (
          <meshBasicMaterial
            color={color}
            transparent
            opacity={opacity}
            wireframe={wireframe}
            blending={THREE.AdditiveBlending}
          />
        )}
      </mesh>
    </Float>
  );
};

export default FloatingGeometry;
