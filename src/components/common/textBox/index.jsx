import React from 'react';
import './index.scss'; 

export default function TextBox(props){
    return(
        <input type={props.type} required={props.required} className="custom-textBox" value={props.value} placeholder={props.placeholder}  onChange={props.onChange} />
    ); 
}