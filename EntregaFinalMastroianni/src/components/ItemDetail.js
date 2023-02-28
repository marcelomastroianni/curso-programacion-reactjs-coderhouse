
import React from 'react'
import ItemCount from './ItemCount'

import { useCartContext } from './CartProvider'



export default function ItemDetail(props) {

    const {addItem, removeItem , getProductIntCart} = useCartContext()

    return (
        <div>
             <h1 className="card-title" style={{color:"#ee6e73",fontWeight:"bold",padding:"10px"}} >{props.product.title}</h1>

            {
           
           
                  <div className="card" style={{padding:"10px"}} >
                    <div className="card-image">
                      <img style={{width:"300px",height:"300px"}} src={props.product.image}></img>

                    </div>
                    <div className="card-content">
                   

                      <p>{props.product.description}</p>
                      <h3><b>Precio: </b>{props.product.price}</h3>
                      <ItemCount stock={props.product.stock} initialValue={getProductIntCart(props.product)?.quantity} onAdd={(count)=>{ addItem(props.product,count)  }} onRemove={()=>{removeItem(props.product)}} > </ItemCount>


                    </div>
                  </div>
            
           
            }
            
        </div>
    )
}
    
