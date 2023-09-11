import { readFile } from "fs/promises";

// Read the JSON file
export const json = JSON.parse(
  await readFile(new URL("../data/db.json", import.meta.url))
);
