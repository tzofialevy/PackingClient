import React, { lazy, Suspense } from 'react';

const LazyAddList = lazy(() => import('./AddList'));

const AddList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAddList {...props} />
  </Suspense>
);

export default AddList;
