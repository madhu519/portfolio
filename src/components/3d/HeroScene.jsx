import { Suspense, useRef, useCallback, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingTechSphere from './FloatingTechSphere';
import ParticleField from './ParticleField';
import CanvasErrorBoundary from './CanvasErrorBoundary';

const HeroScene = () => {
  const containerRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ pointerEvents: 'auto' }}
      >
        <Suspense fallback={null}>
          {/* Subtle ambient light */}
          <ambientLight intensity={0.5} color="hsl(190, 100%, 80%)" />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="hsl(190, 100%, 50%)" />
          <pointLight position={[-3, -3, 2]} intensity={0.6} color="hsl(280, 100%, 60%)" />

          {/* Main tech sphere - positioned to the right */}
          <group position={[2.2, 0.2, 0]}>
            <FloatingTechSphere mousePosition={mousePosition} />
          </group>

          {/* Background particles */}
          <ParticleField count={300} />
        </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default HeroScene;
