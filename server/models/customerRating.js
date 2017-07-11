const mongoose = require('mongoose');
const Audit = require('../models/audit');
const Customer = require('../models/customer');


const CustomerRatingSchema = new mongoose.Schema({
    customer : Customer.schema ,   
    stars : Number,
    audit : Audit.schema
});

const CustomerRating = module.exports = mongoose.model('CustomerRating',CustomerRatingSchema);