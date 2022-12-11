import express from "express";
import * as controller from "../controller/pokemonController.js";

const router = express.Router();

router
    .get("/", controller.getAllCards)
    .get("/:id", controller.getCard)
    .put("/:id", controller.editCard)
    .delete("/:id", controller.deleteCard)
    .post("/", controller.saveCard);
export default router;
