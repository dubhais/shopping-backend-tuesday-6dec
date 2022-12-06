import { pool } from "../index.js";

async function populateTable() {
  const inserted = await pool.query(
    `INSERT INTO shopping (
        item,
        completed
      ) VALUES ($1,$2),($3,$4),($5,$6) RETURNING *;`,
      ['Mince pies', false, 'Sweets', true, 'Avocado', true]

  );
  console.log("Added to shopping table", inserted.command);
}

try {
  await populateTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
