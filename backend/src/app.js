import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";
import { connectToSocket } from "./controllers/socketManager.js";

import mongoose from "mongoose";

import cors from "cors";
import userRoutes from "./routes/users.routes.js"

const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);

app.get("/home",(req,res)=>{
    return res.json({"hello":"World"});
});

const start=async ()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://sonusingha37fw:QhJcZdv5L7I4E2hE@cluster0.iqh6jgc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Mongo Connected DB Host: ${connectionDb.connection.host}`);
    server.listen(app.get("port"),()=>{
        console.log("LISTINING ON PORT 8000");
    })
}
start();
