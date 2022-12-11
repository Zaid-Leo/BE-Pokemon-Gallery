import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("data/db.json"));

export const getAllCards = async (req, res) => {
    await db.read();

    res.json(db.data.Cards);
};
export const getCard = async (req, res) => {
    await db.read();
    const value = db.data.Cards.find((a) => a.id === +req.params.id);

    if (!value) {
        res.status(404).send("Not found");
        return;
    }
    res.json(value);
};

export const editCard = async (req, res) => {
    await db.read();

    const index = db.data.Cards.findIndex((a) => a.id === +req.params.id);

    if (index < 0) {
        res.status(404).send("Not found");
        return;
    }

    db.data.Cards[index] = { ...db.data.Cards[index], ...req.body };

    await db.write();

    res.send(`${req.params.id} updated`);
};

export const deleteCard = async (req, res) => {
    await db.read();
    const index = db.data.Cards.findIndex((a) => a.id === +req.params.id);

    if (index < 0) {
        res.status(404).send("Not found");
        return;
    }

    db.data.Cards.splice(index, 1);

    db.write();

    res.status(202).send(`${req.params.id} deleted`);
};

export const saveCard = async (req, res) => {
    await db.read();

    const nextId = Math.max(...db.data.Cards.map((a) => a.id)) + 1;

    db.data.Cards.push({ id: nextId, ...req.body });

    db.write();

    res.send(`${nextId}`);
};
