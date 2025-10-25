import express from "express";
import mongoose from "mongoose";
import { createServer } from "node:http";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";

dotenv.config();


const app = express();

const server = createServer(app);
const io = connectToSocket(server);

const PORT = 2000;


app.set("port", (process.env.PORT || PORT));
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: "true" }));


app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDB = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`Mongo Connected to host: ${connectionDB.connection.host}`);

    server.listen(app.get("port"), () => {
        console.log(`Running at port no. ${PORT}`);
    });
}

start();
