const express = require('express');
const pilotRouter = express.Router();

const Pilot = require('../Model/pilot.js');

// get all pilots
pilotRouter.get('/', (req, res) => {
    Pilot.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(data);
        }
    }) 
})

// get by id
pilotRouter.get('/:pilot_id', (req, res) =>{
    Pilot.findById(req.params.pilot_id, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.json(data);
    });
})

// add new pilot
pilotRouter.post('/', (req, res) => {
    var pilot = new Pilot();
    pilot.id = req.body.id;
    pilot.name = req.body.name;
    pilot.rank = req.body.rank;
    pilot.gunnery = req.body.gunnery;
    pilot.piloting = req.body.piloting;
    pilot.age = req.body.age;
    pilot.MechType = req.body.MechType;
    pilot.save( err => {
        if(err) {
            res.status(500).send(err);
        } 
        res.status(201).json({"Pilot created" : pilot});
    });
});

// modify pilot
pilotRouter.put('/:pilot_id', (req,res) => {
    Pilot.findById(req.params.pilot_id, (err, pilot) => {
        
        if(err) {
            res.status(500).send(err);
        } else {
            pilot.id = req.body.id;
            pilot.name = req.body.name;
            pilot.rank = req.body.rank;
            pilot.gunnery = req.body.gunnery;
            pilot.piloting = req.body.piloting;
            pilot.age = req.body.age;
            pilot.MechType = req.body.MechType;
            pilot.save(err => {
                if(err) {
                    res.status(500).send('Failed to save!');
                }
                res.status(200).send('Pilot updated!')
            })
        }
    })
})

// Delete pilot
pilotRouter.delete('/:pilot_id', (req,res) => {
    Pilot.remove({
        _id : req.params.pilot_id
    }, (err, pilot) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send('Pilot deleted!');
    })
})

module.exports = pilotRouter;