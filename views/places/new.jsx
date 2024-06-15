const React = require('react')
const Def = require('../default')
const states = require('D:/UNLV/BE/Rest-rant/models/states.js');

function new_form () {
    return (
        <Def>
          <div className="container">
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
              <div className="form-group">
                <label htmlFor="name">Place Name</label>
                <input className="form-control" id="name" name="name" required />
                </div>
              <div className="form-group">
                <label htmlFor="pic">Place Picture</label>
                <input className="form-control" id="pic" name="pic" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input className="form-control" id="city" name="city" />
              </div>
              <div className="form-group">
                        <label htmlFor="state">State</label>
                        <select className="form-control" id="state" name="state">
                            <option value="">Select State</option>
                            {states.map(state => (
                                <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
                            ))}
                        </select>
                    </div>
              <div className="form-group">
                <label htmlFor="cuisines">Cuisines</label>
                <input className="form-control" id="cuisines" name="cuisines" required />
              </div>
              <div className="form-group">
                <label for="founded">Founded Year</label>
                <input className="form-control" id="founded" name="founded" />
                </div>

              <input className="btn btn-primary" type="submit" value="Add Place" />
            </form>


          </main>
        </div>
        </Def>
    )
}
// module.exports = states;
module.exports = new_form;


