import React from 'react';
import "./index.scss";

export default function WeDeliverImgComponent(props) {
    return (
        <div className={`we-deliver-img-component col-xl-${props.col}`}>
            <center>
            <div className="widc-image-holder">
                    <img className="wdic-img" src={props.photo} alt={props.name} />
                </div>
            </center>
                
            <p className="wdic-text"> {props.name} </p>
        </div>
    );
}