const express = require('express');
const unitRouter = express.Router();

const Unit = require('../Model/unit.js');

unitRouter.post('/units', (req, res) => {
    var unit = new Unit();
    unit.name = req.body.name;
    unit.affiliation = req.body.affiliation;
    unit.color = req.body.color;

    unit.save( err => {
        if(err) {
            res.status(500).send(err);
        } 
        res.status(201).json({"Unit created" : unit});
    });
});

unitRouter.get('/units', (req, res) => {
    Unit.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(data);
        }
    }) 
})

module.exports = unitRouter;