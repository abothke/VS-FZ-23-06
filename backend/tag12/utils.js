import fs from 'fs/promises'

const dbPath = './db.json'

export const readDbJson = async () =>
  JSON.parse(await fs.readFile(dbPath, { encoding: "utf-8" }));

export const writeDbJson = async (newData) => {
    await fs.writeFile(dbPath, JSON.stringify(newData))
}