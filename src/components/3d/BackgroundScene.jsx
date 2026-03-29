import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasErrorBoundary from './CanvasErrorBoundary';

const StarField = lazy(() => import('./StarField'));

const BackgroundScene = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
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
          <StarField count={600} />
        </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default BackgroundScene;
