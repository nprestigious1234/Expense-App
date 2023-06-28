const express = require('express')
const cors = require('cors')
const app = express()
const port = 3055

app.use(express.json())
app.use(cors())

// Define your routes
app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.listen(port, () => {
    console.log('server is running on port ${port}')
})