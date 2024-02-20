const React = require('react');
const Def = require('../default');


function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href="{`/places/${index}`}"></a>
          {place.name}
          </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <div id='img-container'>
        <img id='restaurant-img' src={place.pic} alt={place.name} style={{width: '300px'}} />
        </div>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="row">
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  

module.exports = index