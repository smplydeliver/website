import React from 'react';
import './index.scss'; 

export default function RegisterButton(props){
    return(
        <input type="button" className={typeof(props.color) == 'undefined'?"register-button-style":"register-button-style-2"} value={props.value} onClick={props.onClick} />
    ); 
}