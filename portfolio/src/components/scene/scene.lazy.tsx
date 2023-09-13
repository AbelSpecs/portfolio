import React, { lazy, Suspense } from 'react';

const LazyScene = lazy(() => import('./Scene'));

const Scene = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyScene {...props} />
  </Suspense>
);

export default Scene;
