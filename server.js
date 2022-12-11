import express from "express";
import cors from "cors";

import pokemonRouter from "./routes/pokemonRouter.js";

const server = express();
const port = 9999;

server.use(express.json());
