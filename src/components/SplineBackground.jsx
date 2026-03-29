import React, { Suspense, lazy } from 'react';

// Lazy load the Spline component to optimize performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const SplineBackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden opacity-40 mix-blend-screen">
      <div className="sticky top-0 w-full h-screen">
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/IlCzdNKvbeOLlWML/scene.splinecode" />
        </Suspense>
        {/* Subtle overlay gradient to ensure readability of foreground content */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/90" />
      </div>
    </div>
  );
};

export default SplineBackground;
