const express = require("express");
const BodyParser = require("body-parser");

const App = express();
App.use(BodyParser.urlencoded({extended:false}));
App.use(BodyParser.json()); 
//People > /people
//Person/Row > /people/preson
//Person/Row/Age > /people/person/age
let people ={people:[{name:"ajeet"}]};

App.get("/people",function(req,res){
   // console.log(res.body);
    res.json(people);
    res.end();
});

App.get("/product",(req,res)=>{
    res.send("get product - hello ajeet!!!!");
});

App.post("/people",function(req,res){
    if(res.body && req.body.name){
        people.people.push({name : req.body.name});
    }
    //console.log(req.body.name);
    res.json(people);
    res.end();
});
App.get("/people/:name",function(req,res){
   
    res.json({name:req.params.name});
    res.end();
});
App.listen("3000",()=>{
    console.log("server started");
});
App.get("/people/:name/:age",function(req,res){
   
    res.json({name:req.params.name});
    res.end();
});