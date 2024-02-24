const router = require('express').Router()
const places = require('../models/places.js')



// Get List of Places
router.get('/', (req, res) => {
     res.render('places/index', {places})
})

// Get Detailed View of a Place
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })

  }
})



router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
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



module.exports = router
