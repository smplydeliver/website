import React from 'react';
import './index.scss'

export default function TextAreaCustom(props) {
    return (

        <textarea className="custom-text-area" required={props.required} name={props.name} placeholder="Message" rows="10" />

    );

}