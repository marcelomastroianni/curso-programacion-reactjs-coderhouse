import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

import { useCartContext } from './CartProvider'


import { NavLink } from 'react-router-dom'

export default function CartWidget() {


  const {cart} = useCartContext()



  const getTotalItems = () => {
    let total = 0;
    if(cart.length === 0) return 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };


  return (
        <NavLink to="/cart">
            <i className="material-icons" style={{float:"left"}}>shopping_cart</i>
            <span className="badge" style={{color:"white"}} >{getTotalItems()}</span>
        </NavLink>
  )
}
