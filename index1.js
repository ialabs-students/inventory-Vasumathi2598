const {Router} = require("express");

const express = require("express");

console.log("Hi Everyone..! , I am Vasumathi PL");

const server = express();  // convert body to json(express.json) and keep it in a  body key in request  

server.use(express.json())    // midllevar method

var users = [];

var add=[
   {id:'501',name: 'Palaniappan' , dept: 'Biotech' },
   {id:'601',name: 'Aadhav' , dept: 'Mech' },
   {id:'701',name: 'Vanmathi' , dept: 'CSE' },
   {id:'801',name: 'Amuthaveni' , dept: 'IT' },
   {id:'501',name: 'Nakshatra' , dept: 'CSE' }
]

var emailValidator = (req, res, next) =>  {
     var userdata = req.body;
     if(userdata.email == undefined){
        res.status(400);
        res.send("Invalid request body , Email is mandatory");
     }
     next();
};

server.get("/hello",(req,res)=> {
   res.send("Hello welcomee!!");
});

//PATH PARAM 
server.get("/hello/:name", (req, res) => {
   res.send("Hi there, glad to meet you " + req.params.name);
});

//QUERY PARAM
server.get("/hi", (req, res) => {
   res.send("Hello there, glad to meet you " + req.query.name);
});
server.post("/register/users", (req, res) => {
   // console.log(req.body);
   users.push(req.body);
   res.send("user register succesfully")
});

// UPDATE

server.put("/update/user", (req, res) => {
   // console.log(req.body);
   users.push(req.body);
   res.send("user register succesfully")
});
server.get("/fetch/user", (req, res) => {

   res.send(users)
});

//DELETE Method

server.delete('/:id', function (req, res) {
   var found = add.find(function (item) {
       return item.id === parseInt(req.params.id);
   });
   if (found) {
       let targetIndex = data.indexOf(found);
       add.splice(targetIndex, 1);
   }
   res.sendStatus(204);
});

server.get("/fetch/user/:id", (req, res) => {
   var id = req.params.id;
   users.forEach(u => {
       if (u.id == id) {
           res.send(u);
       }
})
res.send({});
});

server.listen(4000, () => {
    console.log("server running on port :4000");
});

//REQUEST/QUERY PARAM -- <URL?key=value&key1=value1&key2=value2>
//   http://localhost:4000/hello?key=value&key1=value1&key2=value2
//   http://localhost:4000/hello?name=JN

//PATH PARAM -- <URL/extra/path>
//   http://localhost:4000/hello/JN


