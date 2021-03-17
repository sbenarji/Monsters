import React from 'react';

import { Card } from '../Card/card.component';
import './card-list.style.css';

export const CardList = props => (
         <div className= 'card-list'>
              {props.monstors.map(monstor => (
              <Card key= {monstor.id} monstor={monstor} />))} 
          </div>   
);