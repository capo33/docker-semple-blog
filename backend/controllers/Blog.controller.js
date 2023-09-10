import { readFile } from "fs/promises";

export const getData = async (req, res) => {
  // Read the JSON file
  const json = JSON.parse(
    await readFile(new URL("../data/db.json", import.meta.url))
  );
  return res.json(json);
};
