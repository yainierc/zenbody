const mongoose = require('mongoose');

const AuditSchema = new mongoose.Schema({
    active : { type: Boolean, default : true },
    modifiedOn : { type: Date, default : Date.now },
    createdOn :  { type: Date, default : Date.now },
    modifiedBy : String,
    createdBy : String
});

const Audit = module.exports = mongoose.model('Audit', AuditSchema);
