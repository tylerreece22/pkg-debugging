const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World from app 1!')
})

module.exports = () => app.listen(port, () => {
    console.log(`App 1 listening at http://localhost:${port}`)
})