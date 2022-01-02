const express = require('express'); // express is a function 
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const Database = require('./Database'); // required the exported database class 
// making an object of Database
const db = new Database(); // new instance/object of Database 

app.use(cors()); // cors allows us to make api calls out of range of our server
app.use(bodyParser.json()); // json is the format of file when we send data for api 
app.use(bodyParser.urlencoded({ extended: false }));


// create POST API to be able to create a new note

app.post('/newpatient', (req, res) => {

    const body = req.body; // data sent by client ( content of note )
    console.log('body : ', body);
    db.addPatient(body) // sychronous code in addNote
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});


app.post('/newgeneralmedical', (req, res) => {

    const body = req.body; // data sent by client ( content of note )
    console.log('body : ', body);
    db.postGeneralMedical(body) // sychronous code in addNote
        .then(data => {
            console.log("response", data);

            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

app.post('/newvisit', (req, res) => {

    const body = req.body; // data sent by client ( content of note )
    console.log('body : ', body);
    db.postNewVisit(body) // sychronous code in addNote
        .then(data => {
            console.log("response", data);

            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});



app.get('/getpatient', (req, res) => {
    db.getPatient()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })

})

app.delete('/deletevisit/:id', (req, res) => {
    const { id } = req.params;
    db.deleteVisit(id)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send(error);
        })
});

app.delete('/deletepatient/:id', (req, res) => {
    const { id } = req.params;
    db.deletePatients(id)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send(error);
        })
});
//////////////////////////////////////////////////////
/*
app.get('/getpatientbyid', (req, res) => {
    const { pid } = req.query;
    if(pid) {
        db.getNotesByTitle(pid)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send(error);
            });

    } else {
        db.getPatient()
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send(error);
            })
    }
});
*/
///////////////////////////////////////////////////////


app.get('/getpatient/:id', (req, res) => {
    const { id } = req.params;
    db.getPatientById(id)
        .then(data => {
            console.log("server data", data);
            if (!data) {
                res.status(404).send(`Patient with id ${id} doesn't exist`);
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send(err);
        })
});


app.get('/getpatientbypid/:pid', (req, res) => {
    const { pid } = req.params;
    db.getPatientsByPID(pid)
        .then(data => {
            if (!data) {
                res.status(404).send(`Patient with id ${pid} doesn't exist`);
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send(err);
        })
});


app.get('/getgeneralbypid/:pid', (req, res) => {
    const { pid } = req.params;

    db.getGeneralMedicalByPID(pid)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});


app.get('/getvisitbyId/:id', (req, res) => {
    const { id } = req.params;

    db.getVisitById(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});


app.put('/updatepatient/:id', (req, res) => {
    const { id } = req.params;

    db.updatePatient(id, req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});


app.put('/updatevisit/:id', (req, res) => {
    const { id } = req.params;

    db.updateVisit(id, req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});


app.put('/updategeneral/:pid', (req, res) => {
    const { pid } = req.params;

    db.updateGeneral(pid, req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

// app.put('/newgeneralmedical', (req, res) => {
//     db.updateGeneral(req.body)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send(err);
//         })
// });


app.get('/getvisitsbypid/:pid', (req, res) => {
    const { pid } = req.params;

    db.getVisitsByPID(pid)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});


app.get('/havegeneralinfo/:pid', (req, res) => {
    const { pid } = req.params;

    db.haveGeneralInfo(pid)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
})





const port = 3000;

app.listen(port, () => {
    console.log(`server has started on port ${port}...`);
    // connect to db when server started
    db.connect();
});