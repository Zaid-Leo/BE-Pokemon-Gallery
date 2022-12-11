import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("data/db.json"));

export const getAllPokemons = async (req, res) => {
    await db.read();

    res.json(db.data.Cards);
};
