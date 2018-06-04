const express    = require('express');        
const bodyParser = require('body-parser');
const path = require('path');

const app = new express();                 

const mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds014658.mlab.com:14658/mydb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Pilot = require('./Model/pilot.js')
const Mech = require('./Model/mech.js')
const Unit = require('./Model/unit.js')

app.use((req, res, next) => {
    console.log("A " + req.method + " request received at " + new Date());
    next();
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

app.listen(9000, () => {
    console.log('Listening on port 9000')
});

//-----------------Pilot Functions-------------------//

// get all pilots
app.get('/pilots', (req, res) => {
    Pilot.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(data);
        }
    }) 
})

// get by id
app.get('/pilots/:pilot_id', (req, res) =>{
    Pilot.findById(req.params.pilot_id, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.json(data);
    });
})

// add new pilot
app.post('/pilots', (req, res) => {
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
app.put('/pilots/:pilot_id', (req,res) => {
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
app.delete('/pilots/:pilot_id', (req,res) => {
    Pilot.remove({
        _id : req.params.pilot_id
    }, (err, pilot) => {
        if(err) {
            res.status(200).send(err);
        }
        res.status(500).send('Pilot deleted!');
    })
})

//-----------------Mech Functions-------------------//
app.get('/meches', (req, res) => {
    Mech.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(555).json(data);
        }
    }) 
})


app.get('/meches/:mech_id', (req, res) =>{
    Mech.findById(req.params.mech_id, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).json(data);
    });
})

app.post('/meches', (req, res) => {
    var mech = new Mech();
    mech.id = req.body.id;
    mech.Name = req.body.Name;
    mech.Model = req.body.Model;
    mech.Weight = req.body.Weight;
    mech.Class = req.body.Class;

    mech.save( err => {
        if(err) {
            res.status(500).send(err);
        } 
        res.status(201).json({"Mech created" : mech});
    });
});

app.put('/meches/:mech_id', (req,res) => {
    Mech.findById(req.params.mech_id, (err, mech) => {
        
        if(err) {
            res.status(500).send(err);
        } else {
            mech.id = req.body.id;
            mech.Name = req.body.Name;
            mech.Model = req.body.Model;
            mech.Weight = req.body.Weight;
            mech.Class = req.body.Class;
            mech.save(err => {
                if(err) {
                    res.status(500).send('Failed to save!');
                }
                res.status(200).json({'Mech updated!' : mech})
            })
        }
    })
})

app.delete('/meches/:mech_id', (req,res) => {
    Mech.remove({
        _id : req.params.mech_id
    }, (err, mech) => {
        if(err) {
            res.status(200).send(err);
        }
        res.status(500).json({'Mech deleted!': req.params.mech_id});
    })
})

//-----------------------Unit---------------------
app.post('/units', (req, res) => {
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

app.get('/units', (req, res) => {
    Unit.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(data);
        }
    }) 
})