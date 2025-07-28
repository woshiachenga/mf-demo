import { defineConfig } from '@umijs/max';

export default defineConfig({
  title: 'remote-umi',
  mfsu: false,
  hash: false,
  npmClient: 'npm',
  layout: {},
  vite: false,
  model: {},
  initialState: {},
  mf: {
    name: 'remoteUmi',
    shared: {
      react: {
        singleton: true,
        requiredVersion: '^18.2.0',
      },
      'react-dom': {
        singleton: true,
        requiredVersion: '^18.2.0',
      },
    },
    library: { type: 'window', name: 'remoteUmi' },
  },
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      name: '首页',
      path: '/main',
      component: './Home',
    },
  ],
});
