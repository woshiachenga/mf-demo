/*
 * @Author: 赵红阳 w_zhaohongyang8@xiwang.com
 * @Date: 2025-07-24 15:29:33
 * @LastEditors: 赵红阳 w_zhaohongyang8@xiwang.com
 * @LastEditTime: 2025-07-29 14:51:58
 * @FilePath: /demo/umi-module/.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import federation from '@originjs/vite-plugin-federation';
import { defineConfig } from '@umijs/max';
import { createHash } from 'crypto';
import topLevelAwait from 'vite-plugin-top-level-await';

const buildHash = createHash('md5')
  .update(Date.now().toString())
  .digest('hex')
  .slice(0, 8);

export default defineConfig({
  title: 'remote-umi',
  npmClient: 'npm',
  initialState: {},
  model: {},
  hash: true,
  layout: {},

  // 使用 Vite 构建
  vite: {
    plugins: [
      federation({
        name: 'remoteUmi',
        // filename: `remoteEntry.${buildHash}.js`,
        filename: `remoteEntry.js`,
        exposes: {
          './Counter': './src/exposes/Counter/index.tsx',
        },
        shared: ['react', 'react-dom'],
      }),
      topLevelAwait({
        // 支持旧版浏览器的 polyfill
        promiseExportName: '__tla',
        promiseImportName: (i) => `__tla_${i}`,
      }),
    ],
    build: {
      target: 'esnext',
      modulePreload: false,
      rollupOptions: {
        external: [],
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
    server: {
      port: 8000,
    },
    preview: {
      port: 8000,
      cors: true,
    },
  },

  routes: [
    {
      path: '/',
      component: './Home',
    },
  ],
});
