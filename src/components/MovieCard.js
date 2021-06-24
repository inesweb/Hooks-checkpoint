import React from 'react';
import Rate from './Rate'

export default function MovieCard(props) {
    return (
        <div >
            <div className="card"  >
                <img className="card-img-top" src={props.movie.posterUrl} alt="img" style={{ width: "100%" }} />
                <div className="card-body">
                    <h4 className="card-title">{props.movie.title}</h4>
                    
                    <p className="card-text">{props.movie.description}</p>
                    
                        <Rate rating ={props.movie.rate} />
                    
                </div>
            </div>
        </div>
    )
}
