import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

import { useCartContext } from './CartProvider'

export default function CartWidget() {


  const {cart} = useCartContext()



  const getTotalItems = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };


  return (
        <a>
            <i className="material-icons" style={{float:"left"}}>shopping_cart</i>
            <span className="badge" style={{color:"white"}} >{getTotalItems()}</span>
        </a>
  )
}
