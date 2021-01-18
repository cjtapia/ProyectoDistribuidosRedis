const dbConnection = require('../config/databaseCon');
const connection = dbConnection();
var redis = require('redis'),
client = redis.createClient();
var salida = [{}];
let getEstudiante = async (req,res)=>{
    
    //client.HMGET
    client.hgetall('estudiante1', function(err,res1){                
        salida = [{res1}];
        //salida.push(res1);
        //res.send(salida);
    });
    client.hgetall('estudiante2', function(err,res1){                
        salida.push(res1);
    });
    client.hgetall('estudiante3', function(err,res1){                
        salida.push(res1);
    });
    res.send(salida);    
    /*
    await connection.query("select * from estudiante", (err,result)=>{
        if (result)    
            res.send(result);

        else
            res.status(500).send(err);
    });*/
}
let addEstudiante = async (req,res)=>{
    const {estudianteId,Name,LastName } = req.body
    await connection.query(`INSERT INTO ESTUDIANTE VALUES(${estudianteId}, '${Name}', '${LastName}')`, (err,result)=>{
        
        if (result)    
            res.send({estudianteId,Name,LastName});
        else
            res.status(500).send(err);
    });
}
module.exports = {
    getEstudiante,
    addEstudiante
}
