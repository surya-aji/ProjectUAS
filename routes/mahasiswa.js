var express = require('express');
var router = express.Router();

// import database
var connection = require('../library/database');

// index Mahasiswa
router.get('/',function(req,res,next){
    // query
    connection.query('SELECT * FROM mahasiswa ORDER BY id desc', function(err, rows){
        if(err){
            req.flash('error',err);
            res.render('pages/tugas',{
                data:''
            });
        }else{
            // render ke index mahasiswa
            res.render('pages/tugas',{
                data: rows
            });
        }
    })
});

module.exports = router;