

import React, { Component } from 'react';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { db } from "../firebase"
import { collection, getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify"

import Order from "./Order"




const OrderContainer = () => {

    const [order,setOrder] = useState(null)


    const {orderId} = useParams();

    useEffect(() => {

        const ordersCollection = collection(db, "orders")
        const referencia = doc(ordersCollection, orderId)
        const pedido = getDoc(referencia)

        pedido
            .then((respuesta) => {
                const order = respuesta.data()
                setOrder(order)
                toast.dismiss()
                toast.success("Orden cargada!")
            })
            .catch((error) => {
                toast.dismiss()
                toast.error("Hubo un error al cargar la orden")
            })
    },[orderId])

    return (
        <div className="container" style={{width:"80%"}}>
            <h1>Compra finalizada con éxito. Gracias por su compra.</h1>
            <h3>El número de su orden es: {orderId}</h3>

            <Order order={order}></Order>
        </div>
    )
}


export default OrderContainer;