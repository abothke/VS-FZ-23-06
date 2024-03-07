import express from 'express'
import {getAllEntries, addNewEntry} from './controller.js'

const router = express.Router()

router.use(express.json())

router.get('/', getAllEntries)
router.post('/', addNewEntry)

export default router