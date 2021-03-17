import React from 'react';
import './card.style.css';
export const Card = props => (
    <div className = 'card-container'> 
        <img 
          alt = 'monstors'
          src={`https://robohash.org/${props.monstor.id}?set=set2&size=100x100`}
        />
        <h2> {props.monstor.name}</h2>
        <p>{props.monstor.email}</p>
    </div>

)