
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function ItemCard(props) {

    return (
        <div>
            {
           
           

                <NavLink to={`/item/${props.product.id}`}>
                    <div class="col s4 m4">
                    <div class="card">
                        <div class="card-image">
                        <img style={{width:"300px",height:"300px"}} src={props.product.image}></img>
                        <span class="card-title" style={{color:"#ee6e73",fontWeight:"bold"}} >{props.product.title}</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                        <p>{props.product.description.substring(0,200) + " ..."}</p>
                        </div>
                    </div>
                    </div>
                </NavLink>
           
            }
            
        </div>
    )
}
    
