

import React, { Component } from 'react';
import { useParams } from 'react-router-dom';



const Order = () => {

    const {orderId} = useParams();

    return (
        <div className="container" style={{width:"80%"}}>
            <h1>Compra finalizada con éxito. Gracias por su compra.</h1>
            <h3>El número de su orden es: {orderId}</h3>
        </div>
    )
}


export default Order;