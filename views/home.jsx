const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div id='home'>
                    <div id='img-container'>
                    <img src="/images/bigBurger.jpg" alt="Big Burger"  style={{ width: '50%'}} />
                    </div>
                    <div> Photo by <a href="https://unsplash.com/@picoftasty">Mae Mu</a> on <a href="https://unsplash.com/"></a>

                    </div>
                </div>
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

            </main>
        </Def>
    )
}

module.exports = home