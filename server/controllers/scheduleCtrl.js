module.exports = function (router) {
const Schedule = require('../models/schedule');

// Get All Schedules
router.get('/schedules', (req, res, next) => {
  var today = new Date();
  today.setDate(today.getDate()-1)
  Schedule.find({"date": {$gt: today }},function (err, schedules) {
    res.json(schedules);
  });
});
// Get By Id
router.get('/schedule/:id', function(req, res, next) {
  Schedule.findById(req.params.id, function (err, schedule) {
    if (err) return next(err);
    res.json(schedule);
  });
});

// Add Schedule
router.post('/schedule', (req, res, next) => {
  let newSchedule = new Schedule({    
    weekDay: req.body.weekDay,
    name: req.body.name,
    date: req.body.date,
    locked: req.body.locked,
    times: req.body.times   
  }); 

  newSchedule.save((err, schedule) => {
    if (err) {
      res.json({ msg: 'Fail to Create Schedule' });
    }
    else {
      res.json({ msg: 'Schedule created successfully!' });
    }
  });
});

// Update 
router.put('/schedule/:id', function(req, res, next) {
  Schedule.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Delete Schedule
router.delete('/schedule/:id', (req, res, next) => {
  Schedule.remove({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(result);
    }
  })
});

};