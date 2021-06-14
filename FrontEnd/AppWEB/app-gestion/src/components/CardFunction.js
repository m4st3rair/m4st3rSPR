import React from 'react';


function CardFunction(props){
    return(
        <div>
        <div className="card">
            <img src={props.cardImage} className="card-img-top" alt="Delta Software"/>
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardBody}</p>
                <a href="./" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    )

} 
export default CardFunction;