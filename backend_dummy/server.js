const db = require('./connectionPool')
const express = require('express')
const cors = require('cors');
const server = express();

server.use(cors());

server.get("/test", (req, res)=>{
    res.json({"message":"SERVER WORKS"}).status(200)
    console.log('test endpoint hit')
})

server.get("/testdb", (req, res)=>{
    const data = Read(1);
    if(data) 
        res.json({"message":"DATABASE WORKS"}).status(200)
    console.log('test endpoint hit database')
})


async function Read (movie_id) {
    try{
        let sql = `select * from movies where movie_id = ${movie_id*1}`
        const [data, _] = await db.execute(sql)
        return (data)
    }catch(err){

    }
}

server.listen(3001, ()=>{
    console.log('server listening on port 3001')
})