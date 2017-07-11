const mongoose = require('mongoose');
const Appointment = require('../models/appointment');

const ScheduleTimeSchema = new mongoose.Schema({
    order: Number,
    hour: String ,
    value : Number,
    locked: Boolean,
    am: Boolean,
    appointment: Appointment.schema
});

const ScheduleTime = module.exports = mongoose.model('ScheduleTime', ScheduleTimeSchema);