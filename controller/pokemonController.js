import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("data/db.json"));

export const getAllPokemons = async (req, res) => {
    await db.read();
    const value = db.data.pokemon.find((a) => a.id === +req.params.id);

    if (!value) {
        res.status(404).send("Not found");
        return;
    }
    res.json(value);
};
