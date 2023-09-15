import { defineConfig } from "umi";

export default defineConfig({
  history: { type: 'hash' },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/smartTeemo-web/',
  routes: [
    { path: "/", component: "home" },
  ],
  npmClient: 'yarn',
});
