const db = require('./connectionPool')
const express = require('express')
const cors = require('cors');
const server = express();

server.use(cors());

server.get("/test", (req, res)=>{
    res.json({"message":"SERVER WORKS"}).status(200)
    console.log('test endpoint hit')
})

let test_id = 1

server.get("/testdb", async (req, res)=>{
    const data = await Read(test_id);
    console.log(data)
    try{
        test_id = data[0].movie_id
        res.json({"message":"DATABASE WORKS"}).status(200)
    }catch(err){
        res.json({"message":"DATABASE NOT WORKING"}).status(200)
    }
    console.log('test endpoint hit database')
})


async function Read (movie_id) {
    try{
        let sql = `select * from Movies where movie_id = ${movie_id*1}`
        const [data, _] = await db.execute(sql)
        return (data)
    }catch(err){

    }
}

server.listen(3001, ()=>{
    console.log('server listening on port 3001')
})