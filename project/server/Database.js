const mongoose = require('mongoose');
const Patient = require('./schemas/patient-schema');
const General = require('./schemas/general-schema');
const Visit = require('./schemas/visit-schema');
const { query } = require('express');




class Database {
    constructor() {

        // url has connection string that detects db name and location 
        this.Url = "mongodb+srv://Maryam:1234@clinic.gyi0b.mongodb.net/OurClinic?retryWrites=true&w=majority"; // localhost: location, 27017: port, notaty: name of db
    }

    connect() {
        mongoose.connect(this.Url, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('database connected successfully')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // to add collections 
    // must build a schema that defines the info of collection that i want to put data in ( my notes )
    addPatient(patient) {
        return new Promise((resolve, reject) => {


            let newPatient = new Patient(patient);
            newPatient.save() // returns a promise 
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err);
                });

            // changed the addNote to asynchronous code by making return something 
        })


    }


    postGeneralMedical(general) {
        return new Promise((resolve, reject) => {


            let patientGeneral = new General(general);
            patientGeneral.save() // returns a promise 
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err);
                });

            // changed the addNote to asynchronous code by making return something 
        })

    }

    postNewVisit(visit) {
        return new Promise((resolve, reject) => {


            let patientVisit = new Visit(visit);
            patientVisit.save() // returns a promise 
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err);
                });

            // changed the addNote to asynchronous code by making return something 
        })

    }


    getPatient() {
        return new Promise((resolve, reject) => {
            Patient.find({})
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                })
        })

    }


    deleteVisit(id) {
        return new Promise((resolve, reject) => {
            Visit.findByIdAndDelete(id)
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }


    deletePatients(id) {
        return new Promise((resolve, reject) => {
            Patient.findByIdAndDelete(id)
                .then((data) => {
                    const pid = data.pid;
                    this.deleteGeneral(pid);
                    this.deleteVisitByPid(pid);
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    deleteGeneral(pid) {
        return new Promise((resolve, reject) => {
            const query = { 'pid': pid }
            General.findOneAndDelete(query)
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    deleteVisitByPid(pid) {
        return new Promise((resolve, reject) => {
            const query = { 'pid': pid }
            Visit.findOneAndDelete(query)
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }


    /////////////////////////////////////////////////////////////
    /*
         getNotesByTitle(pid) {
            return new Promise((resolve, reject) => {
              // this is equivalent to /${noteTitle}/i, i is a modifier to make the search case-insensitive
              const query = { id: pid };
              Patient.find(query)
                  .then(data => {
                    resolve(data);
                  })
                  .catch(error => {
                    reject(error);
                  });
            });
          }

    */
    ////////////////////////////////////////

    getPatientById(id) {
        return new Promise((resolve, reject) => {
            Patient.findById(id)
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }


    getVisitById(id) {
        return new Promise((resolve, reject) => {
            Visit.findById(id)
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }


    getGeneralMedicalByPID(pid) {
        return new Promise((resolve, reject) => {
            const query = { pid: pid };
            console.log("server pid", pid);
            General.find(query)
                .then(data => {
                    console.log(data);
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    // updateGeneral(newInfo) {
    //     return new Promise((resolve, reject) => {
    //         const query = { pid: pid };
    //         General.findOneAndUpdate(query, newInfo)
    //             .then(data => {
    //                 console.log(data);
    //                 resolve(data);
    //             })
    //             .catch(err => {
    //                 reject(err);
    //             });

    //     });
    // }


    updateGeneral(pid, newInfo) {
        return new Promise((resolve, reject) => {
            console.log(newInfo);
            const query = { 'pid': pid };
            General.findOneAndUpdate(query, newInfo)
                .then(data => {
                    resolve(data);
                })
                .catch(err => {

                    reject(err);
                });

        });
    }


    updateVisit(id, newInfo) {
        return new Promise((resolve, reject) => {
            console.log(newInfo);
            Visit.findByIdAndUpdate(id, newInfo)
                .then(data => {
                    resolve(data);
                })
                .catch(err => {

                    reject(err);
                });

        });
    }






    getPatientsByPID(pid) {
        return new Promise((resolve, reject) => {
            const query = { 'pid': pid };

            Patient.find(query)
                .then(data => {
                    console.log(data);
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });

    }


    getVisitsByPID(pid) {
        return new Promise((resolve, reject) => {
            const query = { 'pid': pid };

            Visit.find(query)
                .then(data => {
                    console.log(data);
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }


    updatePatient(id, newInfo) {
        return new Promise((resolve, reject) => {
            console.log(newInfo);
            Patient.findByIdAndUpdate(id, newInfo)
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });

        });
    }


    haveGeneralInfo(pid) {
        return new Promise((resolve, reject) => {
            const query = { 'pid': pid };
            General.exists(query)
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }




}









// must export to use it outside 

module.exports = Database;