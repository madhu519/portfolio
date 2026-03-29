import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingGeometry from './FloatingGeometry';
import CanvasErrorBoundary from './CanvasErrorBoundary';

const SectionDecorator = ({ variant = 'left', className = '' }) => {
  const configs = {
    left: [
      { position: [-3, 1, 0], geometry: 'icosahedron', size: 0.4, color: 'hsl(250, 85%, 65%)', wireframe: true, opacity: 0.15, speed: 0.8 },
      { position: [-2, -1.5, -1], geometry: 'octahedron', size: 0.25, color: 'hsl(220, 70%, 55%)', wireframe: false, opacity: 0.1, speed: 0.6, distort: 0.2 },
    ],
    right: [
      { position: [3, 0.5, 0], geometry: 'dodecahedron', size: 0.35, color: 'hsl(250, 85%, 65%)', wireframe: true, opacity: 0.15, speed: 0.7 },
      { position: [2, -1, -1], geometry: 'torus', size: 0.3, color: 'hsl(280, 60%, 50%)', wireframe: false, opacity: 0.1, speed: 0.5 },
    ],
    center: [
      { position: [-2.5, 1.5, -1], geometry: 'icosahedron', size: 0.3, color: 'hsl(250, 85%, 65%)', wireframe: true, opacity: 0.12, speed: 0.6 },
      { position: [2.5, -1, -1], geometry: 'torusKnot', size: 0.2, color: 'hsl(220, 70%, 55%)', wireframe: true, opacity: 0.1, speed: 0.4 },
      { position: [0, 2, -2], geometry: 'octahedron', size: 0.2, color: 'hsl(280, 60%, 50%)', wireframe: false, opacity: 0.08, speed: 0.5, distort: 0.3 },
    ],
    skills: [
      { position: [-3, 0, 0], geometry: 'torusKnot', size: 0.35, color: 'hsl(250, 85%, 65%)', wireframe: true, opacity: 0.12, speed: 0.5 },
      { position: [3, 1, -1], geometry: 'dodecahedron', size: 0.3, color: 'hsl(220, 70%, 55%)', wireframe: true, opacity: 0.1, speed: 0.6 },
      { position: [0, -2, -2], geometry: 'icosahedron', size: 0.25, color: 'hsl(280, 60%, 50%)', wireframe: false, opacity: 0.08, speed: 0.7, distort: 0.2 },
    ],
  };

  const shapes = configs[variant] || configs.left;

  return (
    <div
      className={`absolute inset-0 pointer-events-none -z-[1] ${className}`}
      style={{ overflow: 'hidden' }}
    >
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          {shapes.map((config, i) => (
            <FloatingGeometry key={i} {...config} />
          ))}
        </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default SectionDecorator;
