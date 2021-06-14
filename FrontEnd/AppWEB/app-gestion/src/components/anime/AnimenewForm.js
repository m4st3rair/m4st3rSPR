import React from 'react';
import { Link } from 'react-router-dom';

class AnimenewForm extends React.Component{



    render(){
        const {onChange, onSubmit, form}= this.props
        return (
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Titulo</label>
                    <input 
                        onChange={onChange}
                        value={form.title}
                    type="text" className="form-control" id="title" aria-describedby="tituloHelp" placeholder="Titulo del anime"/>
                    <small id="tituloHelp" className="form-text text-muted">Aqui es donde se coloca el titulo del anime en cuestion</small>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Descripcion</label>
                    <input 
                        onChange={onChange}
                        value={form.body}
                    type="text" className="form-control" id="body" aria-describedby="bodyHelp" placeholder="Cuerpo de la carta"/>
                    <small id="bodyHelp" className="form-text text-muted">Aqui es donde se coloca la descripcion del anime en cuestion</small>
                </div>
                <div className="form-group">
                    <label htmlFor="linkImg">Imagen</label>
                    <input 
                        onChange={onChange}
                        value={form.linkImg}
                    type="text" className="form-control" id="linkImg" aria-describedby="imagenHelp" placeholder="Imagen / Caratula del anime"/>
                    <small id="imagenHelp" className="form-text text-muted">Aqui es donde se coloca LINK de la imagen de internet del anime en cuestion</small>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            )
    }
}
export default AnimenewForm