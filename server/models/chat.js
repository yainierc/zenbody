const mongoose = require('mongoose');

const Audit = require('../models/audit');

var ChatSchema = new mongoose.Schema({
  phone: string,
  name: String,
  message: String,
  audit: Audit.schema,
});

module.exports = mongoose.model('Chat', ChatSchema);