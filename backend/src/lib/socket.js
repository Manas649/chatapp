import { Server } from "socket.io";
import http from "http";
import express from "express";
import mongoose from "mongoose";
import User from "../models/user.model.js"; // make sure path is correct

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://chatapp-six-sepia.vercel.app",
    ],
    credentials: true,
  },
});

const userSocketMap = {}; // { userId: socketId }

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

io.on("connection", async (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId) {
    userSocketMap[userId] = socket.id;

    // ✅ Fetch full user info of all online users
    const onlineUserIds = Object.keys(userSocketMap);

    try {
      const onlineUsers = await User.find({ _id: { $in: onlineUserIds } })
        .select("_id fullName email avatar"); // select only required fields

      io.emit("getOnlineUsers", onlineUsers);
    } catch (err) {
      console.error("Error fetching online users:", err);
    }
  }

  socket.on("disconnect", async () => {
    console.log("A user disconnected", socket.id);

    if (userId) {
      delete userSocketMap[userId];

      const onlineUserIds = Object.keys(userSocketMap);
      try {
        const onlineUsers = await User.find({ _id: { $in: onlineUserIds } })
          .select("_id fullName email avatar");

        io.emit("getOnlineUsers", onlineUsers);
      } catch (err) {
        console.error("Error fetching online users on disconnect:", err);
      }
    }
  });
});

export { io, app, server };
