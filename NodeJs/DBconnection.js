//db
const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password :'balbla',
    database : 'picturesdb'
});

module.exports = connection;