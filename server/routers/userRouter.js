import { Router } from "express";
const router = Router(); 

import bcrypt from "bcrypt";

import db from "../database/connection_sqlite.js"; 


  
// Get users
router.get("/api/users", async (req, res) => {
    const data = await db.all("SELECT * FROM users;");
    res.send({ data });
});


//POST - Login
router.post("/api/login", async (req, res) => {
    // Tager imod inputs fra html dokument fra svelte
    const email = req.body.email; 
    const password = req.body.password;
    console.log("email", email);
    console.log("password", password); 

    // Afventer og vælger users table hvor email er den der blev valg i frontend
    const result = await db.get("SELECT * FROM users WHERE email = ?", email)
    console.log(result);

    // Afventer fra database og benytter bcrypt til at se om den originale kode passer med den hashede kode
    const authorized = await bcrypt.compare(password,result.password)
    // Object created // Hvis koden er en succes kontra hvis den ikke er en success --> se nedenfor
    
    // request session i en attribut der hedder user. I den user attribut der tilføjer result som = email og password fra usersi DB. 
    req.session.user = result;
    
    // kode forståelse: 
    // I session vil det tilføjes i et såkaldt session objekt som vist nedenfor. 
    /*
    req = {
        ...
        session: {
            user: {
                email: ...,
                password: ...
            }
        }
    }
    */
    // Denne sektion bruges til at snakke med frontend
    const message = {
        success: authorized, // Hvis vi får en success så redirect til /api hvis false send os til /login
        location: authorized ? "/api" : "/login" //? er en form for if statement den tjekker om authorized er true eller false og true sendes man til api og false login
    }
    

    console.log(authorized);
    res.send(message);
    
});

router.post("/api/logout", (req,res) => {
    delete req.session.user; 

    const message = {
        success: true, // Hvis vi får en success så redirect til /api hvis false send os til /login
        location: "/login" //? er en form for if statement den tjekker om authorized er true eller false og true sendes man til api og false login
    }
    res.send(message);
})

export default router; 