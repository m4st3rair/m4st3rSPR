import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import IndexAnime from './anime/IndexAnime'
import AnimeNew from './anime/AnimeNew'
import Cards from './Cards'

function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/anime" component={IndexAnime} />
                <Route exact path="/anime/new" component={AnimeNew} />
                <Route  component={Cards} />

            </Switch>
        </BrowserRouter>
        
    )


}
export default App