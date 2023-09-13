import React, { lazy, Suspense } from 'react';

const LazyStars = lazy(() => import('./Stars'));

const Stars = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyStars {...props} />
  </Suspense>
);

export default Stars;
