/*
 * @Author: 赵红阳 w_zhaohongyang8@xiwang.com
 * @Date: 2025-07-24 15:29:33
 * @LastEditors: 赵红阳 w_zhaohongyang8@xiwang.com
 * @LastEditTime: 2025-07-28 18:32:00
 * @FilePath: /demo/umi-module/.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
  fastRefresh: false, // 热更新优化，有时会干扰联邦加载逻辑
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
    library: { type: 'var', name: 'remoteUmi' },
  },
  // mf: false, // 禁用默认的 MF 配置
  // chainWebpack(memo, { env, webpack }) {
  //   // 手动添加 Module Federation 插件
  //   const { ModuleFederationPlugin } = require('webpack').container;

  //   memo.plugin('module-federation').use(ModuleFederationPlugin, [
  //     {
  //       name: 'remoteUmi',
  //       filename: 'remote.js',
  //       exposes: {
  //         './Counter': './src/exposes/Counter/index.tsx',
  //       },
  //       shared: {
  //         react: {
  //           singleton: true,
  //           eager: true,
  //           requiredVersion: '^18.2.0',
  //         },
  //         'react-dom': {
  //           singleton: true,
  //           eager: true,
  //           requiredVersion: '^18.2.0',
  //         },
  //       },
  //       library: { type: 'var', name: 'remoteUmi' }, // 新增
  //     },
  //   ]);

  //   return memo;
  // },
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
