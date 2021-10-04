import React from 'react'
import './Card.css';
export default function Card(props) {
    return (
        <div className="ducatiCard">
            <div className="ducatiImageGrid" >
                <img src={props.src} className="imagecard" alt="hrg" style={{width:"100%"}} />
            </div>
            <div className="DucatiGridText" ducatiImageGrid>
                <p style={{fontWeight:"bold" , color:"grey"}}>{props.title}</p>
                <p style={{color:"black" , fontWeight:"bold"}}>{props.desc}</p>
            </div>
        </div>
    )
}
