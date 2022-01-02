const mongoose = require('mongoose');


const patientGeneralInfo = mongoose.Schema({
    pid: { type: Number, required: true, unique: true },
    bloodGroup: { type: String, required: true },
    allergies: { type: String, required: true },
    chronicDis: { type: String, required: true },
    familyHistory: { type: String, required: true },




});


module.exports = mongoose.model('general', patientGeneralInfo);