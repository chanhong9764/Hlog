import config from "./config";
import loaders from "./loaders";
import express from "express";

async function startServer() {
  const app = express();
  await loaders({ expressApp: app });

  app.listen(config.port, () => {
    console.log(`server is listening at localhost:${config.port}`);
  });
}

startServer();
