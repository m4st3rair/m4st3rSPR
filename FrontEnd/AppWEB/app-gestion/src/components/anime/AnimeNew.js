import React from 'react';
import { Link } from 'react-router-dom';
import AnimenewForm from './AnimenewForm';
import CardAnime from './CardAnime';

class AnimeNew extends React.Component{

    state={}

    handleChange = e =>{
        console.log(`${e.target.id}:${e.target.value}`)
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        console.log(this.state)

    }

    render(){
        return (
            <div className="container">
                <h1>Anime New</h1>
                <Link to="/anime"> <h3> Back</h3></Link>
                <div className="row">
                    <div className="col-lg-6">
                        <AnimenewForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            form={this.state}
                        ></AnimenewForm>                     
                    </div>
                    <div className="col-lg-6">
                        <CardAnime
                            keyID={11}
                            cardTitle={this.state.title}
                            cardBody={this.state.body}
                            cardImage={this.state.linkImg}
                        ></CardAnime>
                    </div>

                </div>

            </div>
        )
    }
}
export default AnimeNew