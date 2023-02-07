const app = require('express')()
const http = require('http').createServer(app)
const cors = require('cors')
const PORT = 8000
const io = require('socket.io')(http)

users = []

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/index.html')
})


http.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})