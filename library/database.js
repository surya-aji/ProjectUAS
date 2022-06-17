let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uasbackend'
});

connection.connect(function(error){
    if(!!error){
        console.log("Koneksi Error");
    }else{
        console.log('Koneksi Berhasil')
    }
})

module.exports = connection;