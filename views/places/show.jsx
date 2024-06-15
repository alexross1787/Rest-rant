const React = require('react');
const Def  = require('../default');

const show = (data) => {
    return (
        <Def>
            <div className="container">
            <main className='row'>
            <div className='col'>
                <div className="img-container ">
                    <img src={data.place.pic} alt={data.place.name} style={{ width: '100%', maxWidth: '300px', paddingTop: '20px' }} />
                </div></div>
                <div className='col'>
                <h1>
                    {data.place.name}
                </h1>
                <h2>Rating</h2>
                    <p>Not Rated</p>
                <h2>Description</h2>
                <div>
                Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines && ' '} {data.place.cuisines}
                </div>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                    Edit
                    </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        <i className='bi bi-trash'></i>Delete
                        </button>
                        </form>     


                </div>
                <div>
                    <h3>Comments</h3>
                    <p>No comments yet!</p>
                
                </div>
            </main>
            </div>
        </Def>
    )
}

module.exports = show