const express = require('express'); 
const app = express();//express brinda herramientas para conexion a db.
const path = require('path');


app.set('view engine', 'jade');
//Declaramos una ruta 
app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + '/../client/index.html'));
    res.render(path.join(__dirname + '/../client/index2'));
});
//luego del ? se llama query response
//--- /user = controller
app.get('/user', function(req, res) {
	console.log(req.query);
    res.json({name:req.query.name});
});


app.listen(3000);
console.log('Almundo app and listening on port 3000');


//Node se basa en modulos, para usar node nos basamos en npm, utilizamos tambien package.json donde introducimos
//las dependencias que necesitamos.
/* Como iterar con package  json:
	
	npm install -g gulp

	npm install en la carpeta contenedora del package.json instala la carpeta node_modules.



Esto nos crea la carpeta node_modules, carpeta con paquetes.
Para que git ignore carpetas creamos un archivo de texto llamado .gitignore, y escribimos las carpetas a ignorar en este caso node_modules y bower_components
*/