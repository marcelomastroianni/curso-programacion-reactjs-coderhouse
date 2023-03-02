import React from 'react';


const Order = (props) => {

    const {order} = props

    if (!order) {
        return <h3>Cargando...</h3>
    }
    
    return (
        <div>
            <h3>Detalles de la orden</h3>
            <p>Nombre: {order?.buyer?.name}</p>
            <p>Apellido: {order?.buyer?.lastName}</p>
            <p>Email: {order?.buyer?.email}</p>
            <p>Teléfono: {order?.buyer?.phone}</p>
            <p>Dirección: {order?.buyer?.address}</p>
            <p>Fecha de compra: {"fecha"/*order?.date*/}</p>
            <p>Productos comprados: </p>
            <ul>
                {
                    order?.items?.map((item) => {
                        return <li key={item.item.id} >{item.item.title} x {item.quantity}</li>
                    })
                }
            </ul>
        </div>
    )

}

export default Order;