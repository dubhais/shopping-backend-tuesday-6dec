import express from "express";
import {
  getShoppingList,
  getShoppingItem,
  postListItem,
} from "../models/shoppingList.js";

const router = express.Router();

/* GET shopping list. */
router.get("/", async (req, res) => {
  const data = await getShoppingList();
  res.status(200).json({ success: true, payload: data });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await getShoppingItem(id);
  res.status(200).json({ success: "Donkey", payload: data });
});

router.post("/", async (req, res) => {
  const { listItem } = req.body;
  const result = await postListItem(listItem);
  res.status(201).json({ success: true, payload: result });
});

export default router;
