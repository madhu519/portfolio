import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Ring } from '@react-three/drei';
import * as THREE from 'three';

const GlowRing = ({ radius, color, speed, rotationAxis }) => {
  const ringRef = useRef();

  useFrame((state) => {
    if (!ringRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    if (rotationAxis === 'x') ringRef.current.rotation.x = t;
    if (rotationAxis === 'y') ringRef.current.rotation.y = t;
    if (rotationAxis === 'z') ringRef.current.rotation.z = t;
  });

  return (
    <Ring ref={ringRef} args={[radius - 0.02, radius + 0.02, 64]}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.3}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </Ring>
  );
};

const OrbitingDot = ({ radius, speed, offset, color }) => {
  const dotRef = useRef();

  useFrame((state) => {
    if (!dotRef.current) return;
    const t = state.clock.getElapsedTime() * speed + offset;
    dotRef.current.position.x = Math.cos(t) * radius;
    dotRef.current.position.y = Math.sin(t * 0.7) * radius * 0.3;
    dotRef.current.position.z = Math.sin(t) * radius;
  });

  return (
    <mesh ref={dotRef}>
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

const FloatingTechSphere = ({ mousePosition }) => {
  const groupRef = useRef();
  const sphereRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Gentle mouse-follow rotation
    if (mousePosition) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePosition.x * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePosition.y * 0.2,
        0.05
      );
    }

    // Inner sphere pulsing
    if (innerRef.current) {
      const pulse = 1 + Math.sin(t * 2) * 0.05;
      innerRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={1.5}
        rotationIntensity={0.4}
        floatIntensity={0.8}
        floatingRange={[-0.2, 0.2]}
      >
        {/* Main distorted sphere */}
        <Sphere ref={sphereRef} args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="hsl(250, 85%, 65%)"
            roughness={0.1}
            metalness={0.8}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.15}
            wireframe={false}
          />
        </Sphere>

        {/* Wireframe overlay */}
        <Sphere args={[1.22, 32, 32]}>
          <meshBasicMaterial
            color="hsl(250, 85%, 65%)"
            wireframe
            transparent
            opacity={0.08}
          />
        </Sphere>

        {/* Inner glowing core */}
        <Sphere ref={innerRef} args={[0.5, 32, 32]}>
          <meshBasicMaterial
            color="hsl(250, 85%, 75%)"
            transparent
            opacity={0.2}
            blending={THREE.AdditiveBlending}
          />
        </Sphere>

        {/* Core bright point */}
        <Sphere args={[0.15, 16, 16]}>
          <meshBasicMaterial
            color="hsl(250, 85%, 85%)"
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </Sphere>

        {/* Orbiting rings */}
        <group rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <GlowRing radius={1.6} color="hsl(250, 85%, 65%)" speed={0.3} rotationAxis="y" />
        </group>
        <group rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
          <GlowRing radius={1.8} color="hsl(220, 70%, 55%)" speed={0.2} rotationAxis="x" />
        </group>
        <group rotation={[0, Math.PI / 6, Math.PI / 3]}>
          <GlowRing radius={2.0} color="hsl(280, 60%, 50%)" speed={0.25} rotationAxis="z" />
        </group>

        {/* Orbiting dots */}
        <OrbitingDot radius={1.6} speed={0.8} offset={0} color="hsl(250, 85%, 75%)" />
        <OrbitingDot radius={1.8} speed={0.6} offset={2} color="hsl(220, 70%, 65%)" />
        <OrbitingDot radius={2.0} speed={0.5} offset={4} color="hsl(280, 60%, 60%)" />
        <OrbitingDot radius={1.5} speed={0.9} offset={1} color="hsl(250, 90%, 80%)" />
        <OrbitingDot radius={1.7} speed={0.7} offset={3} color="hsl(220, 80%, 70%)" />
      </Float>
    </group>
  );
};

export default FloatingTechSphere;
