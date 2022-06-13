import React from 'react';
import { logos } from '../SVG/logos';

import s from './Links.module.css';

export default function Links() {

  let handleClick = function(linkTo) {
    window.open(linkTo, '_blank');
  }

  return (
    <div className = {s.logosContainer}>
    {
      logos && logos.map((logo, index )=> 

        <div className = {s.logoContainer} key = {`icon-${logo.name}-${index}`} onClick = {() => handleClick(logo.link)}>
          <div className = {s.tag} key = {`link-tag-${index}`}>Ir a {logo.name}</div>
          {logo.component}
        </div>
      )
    }
    </div>
  );
}