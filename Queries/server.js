const express = require("express");
const app = express();

// app.get("/profile",(req, res)=>{
//     const {username, age} = req.query;
//     console.log(username);
//     console.log(age);

//     res.send("profile page of"+" "+ username+" "+age)
// })

// app.get("/profile/:id",(req, res)=>{
//     const {id} = req.params;
// // find in database
//     res.send("profile page of"+" "+ id)
// })

// app.get("/profile/:id/:username",(req, res)=>{
//     const {id, username} = req.params;
// // find in database
//     res.send("profile page of"+" "+ id+" "+username)
// })

let userData=[
    {
        id: 1,
        name:"nitesh",
        address: "delhi"

    },
    {
        id:2,
        name:"Ritik",
        address: "Rajasthan"
    },
    {
        id:3,
        name:"Hello",
        address:"world"
    }

]

app.get("/allusers",(req,res)=>{
    res.send(userData);
})

app.get("/getUserById",(req,res)=>{
    // const id=req.query.id
    const{id} = req.query;
    for(let i =0; i<userData.length; i++){
        if(userData[i].id==id){
            return res.send(userData[i])
        }
    }
    res.send("user not found")
})


app.listen(3000,(req, res)=>{
    console.log("server started");
})

// convert getUserById in params
// create blogs data, create routes to send all blog data, create routes to send one blog data using data, create routes to delete one blog by id.


//Adding user

// app.get("/adduser",(req,res)=>{
//     const {id, name, address} = req.query;
//     console.log(id, name, address);
//     let newUser = {
//         id: id,
//         name: name,
//         address: address
//     }
//     userData.push(newUser);
//     res.send("user added successfully");
// })


// sending data using post request.

