const express = require('express')
const cors = require('cors');
const server = express();

server.use(cors());

server.get("/test", (req, res)=>{
    res.json({"message":"SERVER WORKS"}).status(200)
    console.log('test endpoint hit')
})

server.listen(3001, ()=>{
    console.log('server listening on port 3001')
})