const express = require("express")
const app = express();

app.set("view engine", "ejs")

app.get("", (req, res)=>{
    res.render("layout");
});

app.get("/home", (req, res)=>{
    res.render("home");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/contact", (req, res)=>{
    res.render("contact");
});

app.get("/courses", (req, res)=>{
    res.render("courses"), {title: "course"};
});

app.get("/placement", (req, res)=>{
    res.render("placement");
});

app.listen(4033, ()=>{
    console.log(`server is started...`);
})