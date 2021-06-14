import React from 'react'
// import ReactDOM from 'react-dom'

class Card extends React.Component{
    // constructor (props){
    //     super(props)
    //     this.state={
    //         cardImage:props.cardImage
    //     }
    // }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({
    //             cardImage:"https://i.pinimg.com/originals/ad/95/c6/ad95c6cd63ef26e7be9383221b1d5578.png"
    //         })
    //     }, 5000)
    // }

    render(){
        return (
            <div>
                <div className="card">
                    <img src={this.props.cardImage} className="card-img-top" alt="Delta Software"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.cardTitle}</h5>
                        <p className="card-text">{this.props.cardBody}</p>
                        <a href="./" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
