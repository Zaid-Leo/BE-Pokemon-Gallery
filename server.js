import express from "express";
import cors from "cors";

import pokemonRouter from "./routes/pokemonRouter.js";

const server = express();
const port = 9999;

server.use(express.json());

server.use("/pokemons", pokemonRouter);

server.use((req, res) => {
    res.status(404).send("This site is not existant");
});

server.use((err, req, res, next) => {
    console.log("An error occured", err);
    res.status(500).send("The server has an error");
});

server.listen(port, () => {
    console.log("Server is running on port: " + port);
});
