//Carga de modulos
const mysql = require("mysql");
const myconn = require("express-myconnection")
const express = require('express');
const { dbOptions } = require('./db/db.config');


//ejecutar express
const app = express();
app.set( 'port', 4000);

//conexion a base de datos
app.use( myconn(mysql, dbOptions, 'request'))

//Lectura y parseo del body
app.use( express.json() );

//Rutas usuario
app.use( '/api/usuarios', require('./routes/usuario.routes') );
//Ruta pokemon
app.use( '/api/pokemones', require('./routes/pokemon.routes') );



//validar puerto
app.listen( app.get('port'), () => {
    console.log("Puerto utilizado", app.get('port'));
})