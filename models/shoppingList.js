import { pool } from "../db/index.js";

export async function getShoppingList() {
  const data = await pool.query("SELECT * FROM shopping;");
  console.log("The shopping list is", data.rows);
  return data.rows;
}

export async function getShoppingItem(id) {
  const data = await pool.query(`SELECT * FROM shopping WHERE id=${id};`);
  console.log("The shopping item is", data.rows[0]);
  return data.rows[0];
}

export async function postListItem(listItem) {
  const { item, completed } = listItem;
  const data = await pool.query(
    `INSERT INTO shopping (
      item,
      completed
    ) VALUES ($1,$2) RETURNING *;`,
    [item, completed]
  );
  return data.rows[0];
}

export async function toggleDelete(id, completed) {
  // UPDATE shopping SET completed = NOT completed WHERE id = ${id} Returning *;
  const data = await pool.query(
    "UPDATE shopping SET completed = ${completed} WHERE id = ${id} Returning *;"
    //[completed, id]
  );
  return data.rows[0];
}
