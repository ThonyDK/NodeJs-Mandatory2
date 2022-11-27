import express from "express";
const app = express()

import cookieParser from "express";
app.use(cookieParser())

import session from "express-session";
app.use(session(
    {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
    })) 

/*
const sessions = {

}

const sessionid = req.getcookie()
const session = sessions[sessionid]

req.session = session
next()
*/

 
import path from "path"; 
app.use(express.static(path.resolve("../Client/dist")))

// req kode sendt som json
app.use(express.json());

// req kode i url der er sendt
app.use(express.urlencoded({ extended : true }));

//import bodyParser from "body-parser";
//app.use(bodyParser);

import cors from "cors";
app.use(cors()); 



app.get("/api", (req,res) => {
    res.send("Hello world!");
})

app.get('/test', (req, res) => {
  console.log('session = ', req.session);
  res.send();
})

import contactRouter from "./routers/contactRouter.js"
app.use(contactRouter); 

import userRouter from "./routers/userRouter.js"; 
app.use(userRouter); 

import fs from "fs";
const page = fs.readFileSync("../Client/dist/index.html").toString()
app.get("*", (req, res) => {
  res.send(page);
});


const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => console.log("server is running on ",  PORT));