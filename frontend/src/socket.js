import { io } from "socket.io-client";

// Prefer environment variable, fall back to local dev server
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:54349";

const socket = io(SOCKET_URL, {
  transports: ["websocket", "polling"],
});

export default socket;
