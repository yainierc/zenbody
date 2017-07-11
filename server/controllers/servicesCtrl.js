module.exports = function (router) {
const Services = require('../models/service');

// Get All Services
router.get('/services', (req, res, next) => {
  Services.find(function (err, services) {
    res.json(services);
  });
});
// Get By Id
router.get('/service/:id', function(req, res, next) {
  Services.findById(req.params.id, function (err, service) {
    if (err) return next(err);
    res.json(service);
  });
});

// Add Service
router.post('/service', (req, res, next) => {
  let newService = new Services({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    duration: req.body.duration,
    img: req.body.img,
    rating: req.body.rating,
    audit: req.body.audit   
  }); 

  newService.save((err, schedule) => {
    if (err) {
      res.json({ msg: 'Fail to Create Service' });
    }
    else {
      res.json({ msg: 'Service created successfully!' });
    }
  });
});

// Update 
router.put('/service/:id', function(req, res, next) {
  Service.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Delete Service
router.delete('/Service/:id', (req, res, next) => {
  Service.remove({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(result);
    }
  })
});

};