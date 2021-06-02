const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World from app 2!')
})

module.exports = () => app.listen(port, () => {
    console.log(`App 2 listening at http://localhost:${port}`)
})