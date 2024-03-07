import { readDbJson, writeDbJson } from '../utils.js'
import { v4 as uuid } from 'uuid';

export const getAllEntries = async (req, res)  => {
    const entries = await readDbJson()
    res.json(entries)
};

export const addNewEntry = async (req, res) => {
    const newEntry = {...req.body, id: uuid()}
    const { entries } = await readDbJson()
    const newEntries = [...entries, newEntry]
    await writeDbJson({entries: newEntries})
    res.json(newEntry)
}