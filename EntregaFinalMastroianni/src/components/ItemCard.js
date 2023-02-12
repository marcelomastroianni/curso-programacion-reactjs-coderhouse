
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function ItemCard(props) {

    return (
        <div>
            {
           
           

                <NavLink to={`/item/${props.product.id}`}>
                    <div className="col s4 m4">
                    <div className="card">
                        <div className="card-image">
                        <img style={{width:"300px",height:"300px"}} src={props.product.image}></img>
                        <span className="card-title" style={{color:"#ee6e73",fontWeight:"bold"}} >{props.product.title}</span>
                        <span className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
                        </div>
                        <div className="card-content">
                        <p>{props.product.description.substring(0,200) + " ..."}</p>
                        </div>
                    </div>
                    </div>
                </NavLink>
           
            }
            
        </div>
    )
}
    
