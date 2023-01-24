
import React from 'react'


export default function ItemDetail(props) {

    return (
        <div>
             <h1 class="card-title" style={{color:"#ee6e73",fontWeight:"bold"}} >{props.product.title}</h1>

            {
           
           
                  <div class="card">
                    <div class="card-image">
                      <img style={{width:"300px",height:"300px"}} src={props.product.image}></img>

                    </div>
                    <div class="card-content">
                   

                      <p>{props.product.description}</p>
                    </div>
                  </div>
            
           
            }
            
        </div>
    )
}
    
