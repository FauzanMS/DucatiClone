import React from 'react'
import Card from './Card/Card';
import card1 from './grid2.png';
import card2 from './grid12.png';
import card3 from './grid3.png';

import './Grid.css';
export default function Grid() {
    return (
        <div className="Gridder">
            <Card src={card1} title="PANIGALE" desc = "To make the Panigale V4 S even more unique on the racetrack, Ducati offers its fans a series of accessories from the Ducati Performance catalogue." />
            <Card src={card2} title="ACCESSORIES" desc = "Ducati offers a selection of touring accessories from the Performance catalogue, to increase the pleasure of every riding adventure." />
            <Card src={card3} title="APPAREL" desc = "Ducati offers enthusiasts the Redline collection of trolleys and sports bags, which gives all Ducatisti the opportunity to take their passion for Ducati with them when travelling." />
        </div>
    )
}
