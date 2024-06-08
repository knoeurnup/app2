const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("Hello app2");
});

app.get('/hello', function(req, res){
	res.send("Welcomn is deployed from app2");
});


app.get('/hi', function(req, res){
	res.send("Say hi from app2");
});

app.listen(8080,function(){
	console.log('app is running in port 8080');
})

