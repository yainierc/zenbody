const mongoose = require('mongoose');
const Audit = require('../models/audit');
const CustomerRating = require('../models/customerRating');

const ServiceSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    duration: Number,
    img :[String],
    rating :[CustomerRating.schema],
    audit : Audit.schema
});

const Service = module.exports = mongoose.model('Service', ServiceSchema)