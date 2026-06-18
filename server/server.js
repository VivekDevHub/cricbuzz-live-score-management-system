import createApp from "./src/app.js";
import env from "./src/config/env.js";
import logger from "./src/config/logger.js";
import connectDB from "./src/config/db.js";
import appConstant from "./src/constant/app.constant.js";
const app = createApp();

function startServer() {
  connectDB()      // pehle db connect then app listen
    .then(() => {
      app.listen(env.PORT || appConstant.PORT, () => {
        logger.info({ PORT: env.PORT }, "Server is running port");
      });
    })
    .catch((err) => {
      logger.error({ error: err }, "error while running server");
    });
}

startServer();
