import React from 'react';
import './index.scss'; 

export default function RegisterButton(props){
    return(
        <input type="button" className="register-button-style" value={props.value} onClick={props.onClick} />
    ); 
}