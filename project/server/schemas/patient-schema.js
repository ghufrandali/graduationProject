// contains the schema that describes my collection 

const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
    // fields of schema in an object
    pid: { type: Number, required: false, unique: true },
    name: { type: String, required: false },
    Address: { type: String, required: false },
    phone: { type: Number, required: false },
    speciallty: { type: String, required: false },
    department: { type: String, required: false }, // add it to css/html man 
    dob: { type: String, required: false }

});



// name of model that is the name of my collection (1st para)
// whats the schema that i want to add that describes the fields (2nd para)
module.exports = mongoose.model('patient', patientSchema);