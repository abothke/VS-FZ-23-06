import express from 'express'
import entryRouter from './entries/router.js'

const app = express()
const PORT = 3000

app.use('/entries', entryRouter)



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})