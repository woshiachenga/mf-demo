import React, { Suspense } from 'react';

const RemoteCounter = React.lazy(() => import('remoteUmi/Counter'));

export default () => (
  <Suspense fallback='Loading...'>
    <RemoteCounter init={100} />
  </Suspense>
);
