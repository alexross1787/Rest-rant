const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
              <img src="/images/sad_dog_in_jean_jacket.jpg" alt="Sad pug in a jean jacket" style={{ width: '50%'}} />
              <div>Photo by <a href="https://unsplash.com/@charlesdeluvio">Charles Deluvio</a> on <a href="https://unsplash.com/">Unsplash</a>

                </div>
              </div>
          </main>
      </Def>
    )
  }
  
module.exports = error404