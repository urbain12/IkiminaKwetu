const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const dbconnection = mysql.createConnection({
    host: "localhost",
    user: "DotDigs",
    password: "2021@Kigali",
    database: "IkiminaKwetu"
})

app.get('/test', (req, res) => {
    const sql = "SELECT * FROM test";
    dbconnection.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})


app.listen(4000, () => {
    console.log("listening")
})

app.get('/', (req, res) => {
    return res.json("Success Message")
})