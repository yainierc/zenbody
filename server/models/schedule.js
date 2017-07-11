const mongoose = require('mongoose');
const ScheduleTime = require('../models/scheduleTime');

const ScheduleSchema = new mongoose.Schema({
    weekDay: String,
    name: String,
    date: Date,
    locked: Boolean,
    times: [ScheduleTime.schema]   
});

const Schedule = module.exports = mongoose.model('Schedule', ScheduleSchema)