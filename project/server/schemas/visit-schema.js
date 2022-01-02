const mongoose = require('mongoose');


const dailyVisit = mongoose.Schema({
    // fields of schema in an object


    complaint: { type: String, required: false },
    physical: { type: String, required: false }, // add it to css/html man 
    dx: { type: String, required: false },
    meds: { type: String, required: false },
    weight: { type: Number, required: false },
    height: { type: Number, required: false },
    temp: { type: Number, required: false },
    pulse: { type: Number, required: false },
    bp: { type: String, required: false },
    o2sat: { type: Number, required: false },
    time: { type: String, required: false },
    date: { type: String, required: false },
    pid: { type: Number, required: false }


});


module.exports = mongoose.model('visit', dailyVisit);