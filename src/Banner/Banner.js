import React from 'react'
import './Banner.css';
export default function Banner(props) {
    return (
        <div className="banner">
            <div className="TextPart">
            <p>{props.head}</p>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            <a href="/" className="linkAttrib">{props.linktitle}</a>
            </div>
            <div className="ImagePart">
                <img src={props.img} className="imgpart" alt="wow"/>
            </div>
        </div>
    )
}
