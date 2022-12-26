import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

export default function CartWidget() {
  return (
        <a>
            <i className="material-icons" style={{float:"left"}}>shopping_cart</i>
            <span class="badge" style={{color:"white"}} >1</span>
        </a>
  )
}
