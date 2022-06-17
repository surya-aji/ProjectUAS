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
                data:'',
                nama: '',
                nim: '',
                alamat: '',
                email: '',
                prodi: '',
            });
        }else{
            // render ke index mahasiswa
            res.render('pages/tugas',{
                data: rows,
                nama: '',
                nim: '',
                alamat: '',
                email: '',
                prodi: '',
            });
        }
    })
});

// Create Mahasiswa
// router.get('/create',function(req, res, next){
//     res.render('pages/add-tugas'),{
//         nama: '',
        // nim: '',
        // alamat: '',
        // email: '',
        // prodi: '',
//     }
// });

// Store Mahasiswa
router.post('/store',function(req, res, next){
    let nama = req.body.nama;
    let nim = req.body.nim;
    let alamat = req.body.alamat;
    let email = req.body.email;
    let prodi = req.body.prodi;
    let errors = false;

    if(nama.length === 0) {
        errors = true;
        // set flash message
        req.flash('error', "Silahkan Masukkan Nama");
        // render to add.ejs with flash message
        res.render('pages/tugas', {
        nama: nama,
        nim: nim,
        alamat: alamat,
        email: email,
        prodi: prodi,
        })
    }

    if(nim.length === 0) {
        errors = true;
        // set flash message
        req.flash('error', "Silahkan Masukkan Nim");
        // render to add.ejs with flash message
        res.render('pages/tugas', {
        nama: nama,
        nim: nim,
        alamat: alamat,
        email: email,
        prodi: prodi,
        })
    }
    if(alamat.length === 0) {
        errors = true;
        // set flash message
        req.flash('error', "Silahkan Masukkan Alamat");
        // render to add.ejs with flash message
        res.render('pages/tugas', {
        nama: nama,
        nim: nim,
        alamat: alamat,
        email: email,
        prodi: prodi,
        })
    }
    if(email.length === 0) {
        errors = true;
        // set flash message
        req.flash('error', "Silahkan Masukkan Email");
        // render to add.ejs with flash message
        res.render('pages/tugas', {
        nama: nama,
        nim: nim,
        alamat: alamat,
        email: email,
        prodi: prodi,
        })
    }
    if(prodi.length === 0) {
        errors = true;
        // set flash message
        req.flash('error', "Silahkan Masukkan Prodi");
        // render to add.ejs with flash message
        res.render('pages/tugas', {
        nama: nama,
        nim: nim,
        alamat: alamat,
        email: email,
        prodi: prodi,
        })
    }

    // Jika Tidak Error
    if(!errors){
        let formData = {
                nama: nama,
                nim: nim,
                alamat: alamat,
                email: email,
                prodi: prodi,
            }
        // Query Insert
        connection.query('INSERT INTO mahasiswa set ?',formData, function(err, result){
            if(err){
                // req.flash('error', err);

                // render to add.ejs
                res.render('pages/tugas', {
                    nama: formData.nama,
                    nim: formData.nim,
                    alamat: formData.alamat,
                    email: email,
                    prodi: prodi
                    })
            }else{
                // req.flash('success', 'Data Berhasil Disimpan!');
                res.redirect('/mahasiswa');
            }
        })
    }

    
})

module.exports = router;