import db from "./connection_sqlite.js";

import bcrypt from "bcrypt";

const isInDeleteMode = true;

// Drop table if it exists 
if (isInDeleteMode) {
    db.exec(`
        DROP TABLE IF EXISTS users;
    `);
}

// Create table
db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR (255),
    password VARCHAR(255)
);
`);

// User 1
bcrypt.hash("1234",12).then(response => {
    const hashPassword = response; 
    db.run(`INSERT INTO users (email, password) VALUES ("test1@mail.com", ?);`, [hashPassword]);
    //db.run(`INSERT INTO users (email, password) VALUES ("test1@mail.com", ${response});`);
})
// User 2
bcrypt.hash("12345",12).then(response => {
    const hashPassword = response; 
    db.run(`INSERT INTO users (email, password) VALUES ("test2@mail.com", ?);`, [hashPassword]);
    //db.run(`INSERT INTO users (email, password) VALUES ("test1@mail.com", ${response});`);
})
//$2b$12$7AaoqdrsPHIkEv1hVsvr9.3kUYvgD5669r.mySLDd9nrycgocMqEG