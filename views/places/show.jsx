const React = require('react');
const Def  = require('../default');

const show = ({ place }) => {
    return (
        <Def>
            <main className='row'>
            <div className='col'>
                    <img src={place.pic} alt={place.name} style={{ width: '100%', maxWidth: '300px' }} />
                </div>
                <div className='col'>
                <h1>
                    {place.name}
                </h1>
                <h2>Rating</h2>
                <h2>Description</h2>
                <div>
                Located in {place.city}, {place.state} {place.cuisines && ' '} {place.cuisines}
                </div>
                <a href={`/places/${place.id}/edit`} className="btn btn-warning">
                    Edit
                    </a>
                <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                        </button>
                        </form>     


                </div>
            </main>
        </Def>
    )
}

module.exports = show