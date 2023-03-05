const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const http = require('http');
const fs = require('fs');
// const connectDB = require("./db");
// const db = require("./db");

const db = mysql.createConnection({
    host: "lms.cvuouqo0nhv9.ap-south-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "Rose_9619608750",
    database: "lms",
});


const connectDB = () => {
    db.connect((err) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log("Database Connected sucessfully");
    });
};

connectDB();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());
// app.use(
//     session({
//         secret: "mySecretKey",
//         resave: false,
//         saveUninitialized: true,
//         cookie: { secure: false },
//     })
// );

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../Login_page.html"));
});

app.get("/Resources.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../Resources.html"));
});

app.get("/eventTile.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../eventTile.html"));
});

app.get("/Teacher's_info.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../Teacher's_info.html"));
});

// check whether a string is date or not
// const isDate = (date) => {
//     return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
// };

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username.length === 7) {
        if (username !== password) {
            res.redirect("/login");
        }

        db.query(
            `SELECT * FROM Login where username=${username}`,
            function (err, result, fields) {
                if (err) {
                    res.redirect("/login");
                }
                // console.log(result.length);
                if (result.length > 0) {
                    res.sendFile(path.join(__dirname, "../Student_page.html"));
                } else {
                    res.redirect("/login");
                }
            }
        )
    } else if (username.length === 4) {
        if (username !== password) {
            res.redirect("/login");
        }

        db.query(
            `SELECT * FROM Teacher where TeacherID=${username}`,
            function (err, result, fields) {
                if (err) {
                    res.redirect("/login");
                }
                // console.log(result.length);
                if (result.length > 0) {
                    res.sendFile(path.join(__dirname, "../teacher_page.html"));
                } else {
                    res.redirect("/login");
                }
            }
        );
    }
});

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})