import express from 'express'
import calc from './calc'

const app = express()
const PORT = 3000

const aNumber = calc()

// eslint-disable-next-line prettier/prettier
app.get('/', (req, res) =>
  res.send(`Node and express server is running on port ${aNumber}`)
)

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`))
