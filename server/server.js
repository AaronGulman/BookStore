import express from "express";
import cors from "cors";
import books from "./routes/route.js";
import connectDB from "./db/connection.js";

const server = express();
const PORT = process.env.PORT || 5050;

server.use(cors()); // by default allows all origins with default of cors(*)

server.use(express.json());
server.use("/books", books);

server.get("/", (req, res) => {
  res.send(`Welcome to your server at port: ${PORT}`).status(200);
});

server.listen(PORT, async () => {
  await connectDB();
  console.log(`The server is running on the following port: ${PORT}`);
});
