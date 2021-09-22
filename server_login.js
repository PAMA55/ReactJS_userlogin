const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const { json } = require("express");
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "528639",
    database: "nodejstuto",
});

app.use(cors());
app.use(json());

app.use('/Login', (req, res) => {
    var f_username = req.body.username;
    var f_password = req.body.password;
    var q_result;
    
    connection.connect(function (err){
        if(err) throw err;
            
        var sql = "CALL Login('"+ f_username +"', '"+ f_password +"')";
        connection.query(sql, function(err, result){
            if(err) throw err;
            console.log(result[0][0].Username);
            
            q_result = result[0];
            console.log(q_result[0].Username);
            res.send({
                token: result[0][0].Username
            });
        })
    })
});

app.listen(8080, () => console.log('API running on http://localhost:8080/Login'));