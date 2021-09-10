const express = require("express");
const mongoose = require('mongoose')
require('./src/db/db');
const hbs = require('hbs');
const path = require('path');
const userMessage= require('./src/models/usersms')
const bodyParser = require('body-parser')


const app= express();

//====================handlebar setup here=========

 const public_path = path.join(__dirname,'./src/public');
  const hbs_path = path.join(__dirname,'./src/views');

  app.set('views', hbs_path)
  app.set('view engine','hbs')


  app.use(express.static(public_path));

//======================


const port = process.env.PORT||3000;
app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/', async(req,res)=>{
    try {
        res.render("index")
    } catch (e) {
        res.send(e);
    }
});

app.get('/contact', async(req,res)=>{
    try {
        res.render("contact")
    } catch (e) {
        res.send(e);
    }
});
app.get('/about', async(req,res)=>{
    try {
        res.render("about");
    } catch (e) {
        res.send(e);
    }
});

app.post("/usersms",async(req,res)=>{
    const user = new userMessage ({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.mobile,
        message:req.body.message

    })
    try {
        await user.save();
        res.redirect("/");
    } catch (error) {
        res.send(error)
    }
});

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});