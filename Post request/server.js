const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}))

let userData=[]

app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/form.html")
})

app.post("/adduser",(req,res)=>{
    let {name, email, password}=req.body;
    userData.push({name:name, email:email,password:password});
    console.log(name, email, password);
    res.send(userData);
})

app.listen(3033, ()=>{
    console.log("server started")
})