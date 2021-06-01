import React from 'react';
import './index.scss'

export default function TitleDesc(props) {
    return (
        <div className="title-desc col-xl-4">
            <img src={props.src} />
            <p className="title"> {props.title} </p>
            <p className="description"> {props.desc} </p>
        </div>
    )
}