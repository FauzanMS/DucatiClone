import React from 'react'
import './DucatiVideo.css';
export default function DucatiVideo() {
    return (
        <div className="ducatiVideo">
            <iframe width="90%" height="500" style={{marginLeft:"5%"}} src="https://www.youtube.com/embed/COrAcPrR8yo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
