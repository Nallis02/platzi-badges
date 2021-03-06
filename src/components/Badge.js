import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar';

// componente que representa el badge 
//creamos componente que es una clase 
class Badge extends React.Component {
    //todos los componentes requieren un metodo render
    //render define el resultado que veremos en pantalla
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src= {confLogo} alt= "Logo de la conferencia" />
                </div>
                <div className="Badge__section-name"> 
                    <Gravatar className="Badge__avatar" email= {this.props.email} alt= "Avatar" />
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.instagram}</div>
                </div>
                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}
//exportamos el componente
export default Badge