import React from 'react';
import './index.scss'

export default function TextAreaCustom(props) {
    return (

        <textarea className="custom-text-area" required={props.required} onChange={props.onChange} name={props.name} placeholder="Message" rows="10" />

    );

}