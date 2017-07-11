module.exports = function (router) {
const Schedule = require('../models/schedule');
const ScheduleTime = require('../models/scheduleTime');


// Get ScheduleTime By Id
router.get('/time/:scheduleId/:id', function(req, res, next) {
  Schedule.findOne({_id: req.params.scheduleId, 'times._id': req.params.id},{'times.$': 1},function (err, times) {
     res.json(times);
  });
});

// Add Schedule
router.post('/time', (req, res, next) => {
  let newScheduleTime = new ScheduleTime({    
    weekDay: req.body.weekDay,
    name: req.body.name,
    date: req.body.date,
    locked: req.body.locked,
    times: req.body.times   
  }); 

  newSchedule.save((err, time) => {
    if (err) {
      res.json({ msg: 'Fail to Create ScheduleTime' });
    }
    else {
      res.json({ msg: 'ScheduleTime created successfully!' });
    }
  });
});

// Update 
router.put('/time/:scheduleId/:id', function(req, res, next) {
  Schedule.update(
    {_id: req.params.scheduleId,
     'times._id': req.params.id},
     {
       $set:{
         'times.$.locked': req.body.locked,
         'times.$.appointment': req.body.appointment
        }       
     }, function (err, time) {
    if (err) return next(err);
    res.json(time);
  });
});

// Delete Schedule
router.delete('/time/:id', (req, res, next) => {
  ScheduleTime.remove({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(result);
    }
  })
});

};