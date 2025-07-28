import React, { useState, useEffect } from 'react';

// 来自远程模块的组件
// const RemoteComponent = React.lazy(() => import('remote/CoursePkgSelect'));
// const RemoteCounter = React.lazy(() => import('remoteCounter/Counter'));
const RemoteUmi = React.lazy(() => import('remoteUmi/Counter'));

export default function App() {
  return (
    <div>
      {/* <h1>Host App</h1>
      <React.Suspense fallback='Loading Remote Component...'>
        <RemoteComponent />
      </React.Suspense> */}
      <h1>Host App (Vite + umi)</h1>
      <React.Suspense fallback='Loading Remote Component...'>
        <RemoteUmi />
      </React.Suspense>
    </div>
  );
}
