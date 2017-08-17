const express=require('express'),
	  app=express(),
	  bodyParser=require('body-parser'),
	  cors=require('cors'),
	  keys=require('./server/keys')

app.use(bodyParser.json())
app.use(cors)

//GET

//PUT

//POST

//DELETE


app.listen(keys.port, _=>{console.log()})