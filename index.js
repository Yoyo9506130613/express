var express = require("express");
var path = require('path');
var app=express();

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.use('/public',express.static('public'));

app.listen(3000,function(){
    console.log("伺服器已經啟動在 http://localhost:3000/");
});