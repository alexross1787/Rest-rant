const express = require('express');
const router = express.Router();
const places = require('../models/places.js');

// Middleware to parse URL-encoded data
router.use(express.urlencoded({ extended: true }));

// Render form to create a new place
router.get('/new', (req, res) => {
  res.render('places/new');
});

// Get list of places
router.get('/', (req, res) => {
  res.render('places/index', { places });
});
// Render form to edit a place
router.get('/:id/edit', (req, res) => {
  console.log(req.params); // Ensure this prints correctly
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    res.render('error404');
  } else {
    res.render('places/edit', { place: places[id], id: id });
  }
});

// Get detailed view of a place
router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    console.log($);
  } else {
    res.render('places/show', { place: places[id] });
  }
});




// Create a new place
router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400';
  }
  if (!req.body.city) {
    req.body.city = 'Anytown';
  }
  if (!req.body.state) {
    req.body.state = 'USA';
  }
  console.log(req.body); // Log the modified req.body after setting default values
  places.push(req.body);
  res.redirect('/places');
});

// Delete a place
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    res.render('error404');
  } else {
    places.splice(id, 1);
    res.redirect('/places');
  }
});

// Update a place
router.put('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    res.render('error404');
  } else {
    places[id] = { ...places[id], ...req.body };
    res.redirect(`/places/${id}`);
  }
});

module.exports = router;
