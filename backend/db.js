const mysql = require("mysql");

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

        // db.query("SELECT * FROM Teacher", function (err, result, fields) {
        //     if (err) throw err;
        //     console.log(result);
        //   });

    });
};

const pool = mysql.createPool({
    user: 'your-db-user',
    host: 'your-db-host',
    database: 'your-db-name',
    password: 'your-db-password',
    port: 5432,
  });


module.exports = pool;
module.exports = connectDB;
