module.exports = function (router) {

const Appointment = require('../models/appointment');

// Get All Appointments
router.get('/appointments', (req, res, next) => {
  Appointment.find(function (err, appointments) {
    res.json(appointments);
  });
});

// Get By Id
router.get('/appointment/:id', function(req, res, next) {
  Appointment.findById(req.params.id, function (err, appointment) {
    if (err) return next(err);
    res.json(appointment);
  });
});

// Add Appointment
router.post('/appointment', (req, res, next) => {
  let newAppointment = new Appointment({    
    services: req.body.services,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    duration: req.body.duration,
    customer: req.body.customer,
    notes: req.body.notes,
    customerRating: req.body.customerRating,
    observations: req.body.observations,
    status: req.body.status,   
    audit: req.body.audit
  });  

  newAppointment.save((err, appointment) => {
    if (err) {
      res.json({ msg: 'Fail to Create Appointment' });
    }
    else {
      res.json({ msg: 'Appointment created successfully!' });
    }
  });
});

// Delete Appointment
router.delete('/appointment/:id', (req, res, next) => {
  Appointment.remove({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(result);
    }
  })
});

};