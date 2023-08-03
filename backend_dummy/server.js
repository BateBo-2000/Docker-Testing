const express = require('express')
const server = express();

server.get("test", ()=>{
    res.json({"message":"WORKS"}).status(200)
})

server.listen(3000, ()=>{
    console.log('server listening on port 3000')
})