import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = process.env.PORT || 8888;

app.use(cors());

app.use(
  createProxyMiddleware({
    router: (req) => new URL(req.path.substring(1)),
    pathRewrite: (_, req) => new URL(req.path.substring(1)).pathname,
    changeOrigin: true,
    logger: console,
  })
);

app.listen(PORT, () => {
  console.info(`proxy server is running on port ${PORT}`);
});
