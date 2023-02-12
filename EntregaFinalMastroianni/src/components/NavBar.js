import React from 'react'

import CartWidget from './CartWidget'
import 'materialize-css/dist/css/materialize.min.css'
import { NavLink } from 'react-router-dom'



export default function NavBar(props) {
  return (
    <nav>
    <div className="nav-wrapper">
      <NavLink to="/" className="brand-logo" style={{paddingLeft:10}}>{props.pageTitle}</NavLink>
     
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        
        {props.navLinks.map((link, index) => {
            return <li key={index}><NavLink to={link.path}>{link.title}</NavLink></li>
        })}

        <li> <CartWidget></CartWidget></li>
      </ul>
    </div>0
  </nav>
  )
}
