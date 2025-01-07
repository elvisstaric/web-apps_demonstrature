import express from "express";
import { connectToDatabase } from "../db.js";
import { ObjectId } from "mongodb";

const router = express.Router();
let db = await connectToDatabase();

let tasks = db.collection("tasks");

router.get("/", async (req, res) => {
  let all_tasks = await tasks.find().toArray();
  res.status(200).json(all_tasks);
});

router.post("/", async (req, res) => {
  let new_tasks = req.body.tasks;
  let obavezniKljucevi = ["naslov", "opis"];
  for (let task of new_tasks) {
    if (!obavezniKljucevi.every((kljuc) => Object.keys(task).includes(kljuc))) {
      return res.status(400).json({ error: "Nedostaju obavezni ključevi" });
    }
    if (!Object.keys(task).includes("zavrsen")) {
      task["zavrsen"] = false;
    }
  }
  try {
    let rez = await tasks.insertMany(new_tasks);
    res.status(201).json("Zapisano");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.patch("/:id", async (req, res) => {
  let id = req.params.id;

  let rez = await tasks.updateOne(
    { _id: new ObjectId(id) },
    { $set: { zavrsen: true } }
  );
  if (rez.modifiedCount > 0) {
    res.status(201).json("Promjenjeno");
  } else {
    res.status(404).json("Task nije pronađen");
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let rez = await tasks.deleteOne({ _id: new ObjectId(id) });
    if (rez.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json("Kolegij ne postoji!");
    }
  } catch (error) {
    res.status(400).json({ error: error.errorResponse });
  }
});

export default router;
