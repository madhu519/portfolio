import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StarField = ({ count = 800 }) => {
  const meshRef = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    const primary = new THREE.Color('hsl(250, 85%, 65%)');
    const accent = new THREE.Color('hsl(220, 70%, 55%)');
    const white = new THREE.Color('hsl(0, 0%, 80%)');

    for (let i = 0; i < count; i++) {
      // Spread stars across a large area
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;

      // Mix of white and colored stars
      const r = Math.random();
      let color;
      if (r < 0.15) {
        color = primary.clone();
      } else if (r < 0.3) {
        color = accent.clone();
      } else {
        color = white.clone().multiplyScalar(0.3 + Math.random() * 0.7);
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      speeds[i] = Math.random() * 0.5 + 0.1;
    }

    return { positions, colors, speeds };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    const posArr = meshRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Subtle twinkling via position jitter
      posArr[i3 + 1] += Math.sin(t * particles.speeds[i] + i) * 0.0005;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    // Very slow rotation
    meshRef.current.rotation.y = t * 0.005;
    meshRef.current.rotation.x = Math.sin(t * 0.01) * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default StarField;
