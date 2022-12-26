import React from 'react'

import CartWidget from './CartWidget'
import 'materialize-css/dist/css/materialize.min.css'



export default function NavBar(props) {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo" style={{paddingLeft:10}}>{props.pageTitle}</a>
     
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        
        {props.navLinks.map((link, index) => {
            return <li key={index}><a href={link.path}>{link.title}</a></li>
        })}

        <li> <CartWidget></CartWidget></li>
      </ul>
    </div>0
  </nav>
  )
}
