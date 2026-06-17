import mongoose from "mongoose";
import env from "./env.js"
import logger from "./logger.js";

const connectDB = async() => {
await mongoose.connect(env.MONGO_URL);
logger.info("Mongo DB is connected")
}

export default connectDB;