import React from 'react';


class CardAnime extends React.Component{
    
    handleclickButton = ()=> {
        console.log("E we me clickuearon ID:", this.props.keyID)
    }


    render(){

        const {cardBody, cardImage, cardTitle} =this.props

        return(
           
            <div className="card">
                <img src={cardImage} className="card-img-top" alt="Delta Software"/>
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardBody}</p>
                    {/* <a href="./" className="btn btn-primary">Go somewhere</a> */}
                    <button type="button" onClick={this.handleclickButton} className="btn btn-outline-danger btn-block"> Boton Que manda mensajes </button>
                </div>
            </div>
            

        )
    }

}

export default CardAnime;