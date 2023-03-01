

import React from 'react';

import { useCartContext } from './CartProvider'




const Cart = () => { 


    const {cart, removeItem, clear} = useCartContext()

    const getTotalItems = () => {

        let total = 0;

        if(cart.length === 0) return 0;

        cart.forEach((item) => {

            total += item.quantity;

        });

        return total;

    }

    const getTotalPrice = () => {
            
            let total = 0;
    
            if(cart.length === 0) return 0;
    
            cart.forEach((item) => {
    
                total += item.item.price * item.quantity;
    
            });
    
            return total;
    
        }

    return (

        <div className="container">

            <h1>Carrito de compras</h1>

            <div className="row">

                <div className="col s12 m12">

                    <div className="card">

                        <div className="card-content">

                            <span className="card-title">Items en el carrito: {getTotalItems()}</span>

                            <table className="striped">

                                <thead>

                                    <tr>

                                        <th>Producto</th>

                                        <th>Cantidad</th>

                                        <th>Precio</th>

                                        <th>Subtotal</th>

                                        <th>Acciones</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {cart.map((item) => (

                                        <tr key={item.item.id}>

                                            <td>{item.item.title}</td>

                                            <td>{item.quantity}</td>

                                            <td>{item.item.price}</td>

                                            <td>{item.item.price * item.quantity}</td>

                                            <td>

                                                <button className="btn waves-effect waves-light" type="button" name="action" onClick={() => removeItem(item.item)}>Eliminar

                                                    <i className="material-icons right">delete</i>

                                                </button>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                        <div className="card-action">

                            <button style={{marginRight:"5px"}} className="btn waves-effect waves-light" type="button" name="action" onClick={() => clear()}>Vaciar carrito

                                <i className="material-icons right">delete</i>

                            </button>

                            <button className="btn waves-effect waves-light" type="button" name="action">Finalizar compra

                                <i className="material-icons right">send</i>
                                
                            </button>

                            <h3>Total: {getTotalPrice()}</h3>

                        </div>

                    </div>  

                </div>

            </div>

        </div>

    )





}

export default Cart;