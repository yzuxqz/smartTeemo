import { defineConfig } from "umi";

export default defineConfig({
  history: { type: 'hash' },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/',
  routes: [
    { path: "/", component: "home" },
  ],
  https:{
    cert: './localhost.pem',
    key: './localhost-key.pem'
  },
  npmClient: 'yarn',
});
