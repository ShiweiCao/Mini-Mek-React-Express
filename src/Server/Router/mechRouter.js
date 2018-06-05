const express = require('express');
const mechRouter = express.Router();

const Mech = require('../Model/mech.js');

mechRouter.get('/', (req, res) => {
    Mech.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(data);
        }
    }) 
})

mechRouter.get('/:mech_id', (req, res) =>{
    Mech.findById(req.params.mech_id, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).json(data);
    });
})

mechRouter.post('/', (req, res) => {
    var mech = new Mech();
    mech.id = req.body.id;
    mech.name = req.body.name;
    mech.model = req.body.model;
    mech.weight = req.body.weight;
    mech.class = req.body.class;

    mech.save( err => {
        if(err) {
            res.status(500).send(err);
        } 
        res.status(201).json({"Mech created" : mech});
    });
});

mechRouter.put('/:mech_id', (req,res) => {
    Mech.findById(req.params.mech_id, (err, mech) => {
        
        if(err) {
            res.status(500).send(err);
        } else {
            mech.id = req.body.id;
            mech.name = req.body.name;
            mech.model = req.body.model;
            mech.weight = req.body.weight;
            mech.class = req.body.class;
            mech.save(err => {
                if(err) {
                    res.status(500).send('Failed to save!');
                }
                res.status(200).json({'Mech updated!' : mech})
            })
        }
    })
})

mechRouter.delete('/:mech_id', (req,res) => {
    Mech.remove({
        _id : req.params.mech_id
    }, (err, mech) => {
        if(err) {
            res.status(200).send(err);
        }
        res.status(500).json({'Mech deleted!': req.params.mech_id});
    })
})

module.exports = mechRouter;