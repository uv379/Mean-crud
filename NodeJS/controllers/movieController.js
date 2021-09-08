const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Movie } = require('../models/movie');


router.get('/', (req, res) => {
    Movie.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Movies :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => { 
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Movie.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Movie :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var mov = new Movie({
        movie_name: req.body.movie_name,
        release_date: req.body.release_date,
        description: req.body.description,
    });
    mov.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Movie Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var mov = {
        movie_name: req.body.movie_name,
        release_date: req.body.release_date,
        description: req.body.description,
    };
    Movie.findByIdAndUpdate(req.params.id, { $set: mov }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Movie Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Movie.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Movie Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;