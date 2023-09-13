import React, { lazy, Suspense } from 'react';

const LazyHoc = lazy(() => import('./Hoc'));

const Hoc = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHoc {...props} />
  </Suspense>
);

export default Hoc;
