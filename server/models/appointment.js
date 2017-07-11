const mongoose = require('mongoose');
const Audit = require('../models/audit');
const Customer = require('../models/customer');
const CustomerRating = require('../models/customerRating');
const Service = require('../models/service');

const AppointmentSchema = new mongoose.Schema({  
    services: [Service.schema],
    startTime : Date,
    endTime : Date,
    duration : Number,
    customer :  Customer.schema,
    notes: [String],    
    customerRating : CustomerRating.schema,
    observations : [String],
    status: String,       
    audit : Audit.schema   
});

const Appointment = module.exports = mongoose.model('Appointment', AppointmentSchema);