
import React from 'react'


export default function ItemDetail(props) {

    return (
        <div>
             <h1 className="card-title" style={{color:"#ee6e73",fontWeight:"bold"}} >{props.product.title}</h1>

            {
           
           
                  <div className="card">
                    <div className="card-image">
                      <img style={{width:"300px",height:"300px"}} src={props.product.image}></img>

                    </div>
                    <div className="card-content">
                   

                      <p>{props.product.description}</p>
                    </div>
                  </div>
            
           
            }
            
        </div>
    )
}
    
