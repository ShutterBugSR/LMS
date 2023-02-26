const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db');
const pool = require('./db');

connectDB();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../Login_page.html'));
});

// Route for login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username.length === 4) {
        pool.query('SELECT * FROM teacher WHERE TeacherID = $1 AND TeacherID = $2', [username, password], (error, results) => {
            if (error) {
              throw error;
            }
            if (results.rows.length > 0) {
                res.sendFile(path.join(__dirname, '../eventTile.html'))
            } else {
              res.status(401).send('Invalid credentials');
            }
          });
    }
    else if (username.length === 7) {
        pool.query('SELECT * FROM login WHERE username = $1 AND pwd = $2', [username, password], (error, results) => {
            if (error) {
              throw error;
            }
            if (results.rows.length > 0) {
              res.redirect('/student');
            } else {
              res.status(401).send('Invalid credentials');
            }
          });
    }
    else {
        res.status(401).send('Invalid credentials');
    }
  });


app.listen(port, ()=> {
    console.log(`server listening at http://localhost:${port}`);
});
