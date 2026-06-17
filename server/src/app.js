import express from 'express';
import env from "./config/env.js"
import morgan from "morgan"

const createApp = () => {
const app = express();

if(env.NODE_ENV === "development"){
    app.use(morgan("dev"))
}

return app;
}

export default createApp