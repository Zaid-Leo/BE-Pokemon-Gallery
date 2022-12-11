import express from "express";
import * as controller from "../controller/pokemonController.js";

const router = express.Router();

router.get("/", controller.getAllPokemons);
export default router;
