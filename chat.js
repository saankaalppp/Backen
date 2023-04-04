const express =require('express');
const bodyParser=require('body-parser');
const fs=require('fs')


const app= express();
  app.use(bodyParser.urlencoded({ extended: false }))

 app.get("/",(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err)
            data="No chat exists"
        }
    
        res.send(
            `${data}  <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/product" method="POST">
        <input id="username" type="text" name="username">
        <input id="message"  type="text" name="message">
         <button type="submit">add</button>
        </form>`);
    })
 });

app.post('/product',(req,res)=>{
    console.log(req.body)
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt",` ${req.body.username}: ${req.body.message} `,{flag:"a"} ,(err)=>
        err ? console.log(err) : res.redirect('/')
    );
});

app.get('/login',(req,res)=>{
    res.send(`<form  onsubmit="localStorage.setItem('username', document.getElementById('username').value)" 
    action="/product" method="POST">
    <input id="username" type="text" name="username">
    <input id="message"  type="text" name="message">
    <button type="submit">add</button>
    </form>`);
})

app.listen(4000)