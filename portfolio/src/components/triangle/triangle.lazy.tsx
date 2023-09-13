import React, { lazy, Suspense } from 'react';

const LazyTriangle = lazy(() => import('./Triangle'));

const Triangle = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTriangle {...props} />
  </Suspense>
);

export default Triangle;
