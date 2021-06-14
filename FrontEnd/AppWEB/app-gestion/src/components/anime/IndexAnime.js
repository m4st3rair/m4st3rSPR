import React from 'react';
import {Link} from 'react-router-dom'
import CardsAnime from './CardsAnime';

class IndexAnime extends React.Component{
    


    render(){
        return (
            <div>
                <h1>Anime Index</h1>
                <Link to="/anime/new"> <h3> nuevo Anime</h3></Link>
                <CardsAnime></CardsAnime>

            </div>    
        )
    }
}

export default IndexAnime