const mongoose = require('mongoose');
const Audit = require('../models/audit');

const CustomerSchema = new mongoose.Schema({
    name : {
        first : String,
        last : String
    },    
    phone : [String],
    email : [String],
    notes : [String],
    rating :  Number,
    audit :  Audit.schema
});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema);
