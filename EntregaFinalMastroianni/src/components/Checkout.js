

import React, { useState } from 'react';
import { useCartContext } from './CartProvider'
import { db } from "../firebase"
import { collection, addDoc , serverTimestamp} from "firebase/firestore";
import { toast } from "react-toastify"
import { NavLink } from 'react-router-dom'

import { useNavigate } from "react-router-dom";


const Checkout = () => {


    const {cart, clear } = useCartContext()

    const [name, setName] = useState('');

    const [lastName, setLastName] = useState('');

    const [email, setEmail] = useState('');

    const [phone, setPhone] = useState('');

    const [address, setAddress] = useState('');

    const [city, setCity] = useState('');

    const [state, setState] = useState('');

    const [zipCode, setZipCode] = useState('');

    const [country, setCountry] = useState('');



    let navigate = useNavigate();




    const handleBuy = async (e) => {

        e.preventDefault();

      

        if (name === '' || lastName === '' || email === '' || phone === '' || address === '' || city === '' || state === '' || zipCode === '' || country === '') {

            toast.dismiss()
            toast.error("Todos los campos son obligatorios")


            return;

        }

        if (name.length < 3 || lastName.length < 3) {

            toast.dismiss()
            toast.error("El nombre y apellido deben tener al menos 3 caracteres")


            return;

        }

        if (phone.length < 10) {

            toast.dismiss()
            toast.error("El teléfono debe tener al menos 10 caracteres")
    
            return;

        }

        if (zipCode.length < 4) {

            toast.dismiss()
            toast.error("El código postal debe tener al menos 4 caracteres")
        
            return;

        }

        if (country.length < 3) {


            toast.dismiss()
            toast.error("El país debe tener al menos 3 caracteres")

            return;

        }

        const buyer = {

            name: name,

            lastName: lastName,

            email: email,

            phone: phone,

            address: address,

            city: city,

            state: state,

            zipCode: zipCode,

            country: country

        }

        const newOrder = {

            buyer: buyer,

            items: cart,

            date:  serverTimestamp(),

            total: getTotalPrice()

        }

        toast.dismiss()
        toast.info("Procesando compra...")


        const orders = collection(db, "orders");

        const docRef = await addDoc(orders, newOrder);


        clear(); //Se vacía el carrito
        
        toast.dismiss()
        toast.success("Compra finalizada con éxito. Gracias por su compra.")
       
        navigate('/order/' + docRef.id);


    }

    const getTotalPrice = () => {

        let total = 0;

        cart.forEach((item) => {

            total += item.item.price * item.quantity;

        })

        return total;

    }



    return (

        <div className="container">

            <div className="row">

                <div className="col-12">

                    <h1>Checkout</h1>

                    <hr />

                </div>

            </div>

            <div className="row">

                <div className="col-12">

                    <h2>Resumen de la compra</h2>

                    <hr />

                </div>

            </div>

            <div className="row">

                <div className="col-12">

                    <table className="table">

                        <thead>

                            <tr>

                                <th scope="col">Producto</th>

                                <th scope="col">Cantidad</th>

                                <th scope="col">Precio</th>

                                <th scope="col">Subtotal</th>

                            </tr>

                        </thead>

                        <tbody>

                            {cart.map((item) => (

                                <tr key={item.item.id}>

                                    <td>{item.item.title}</td>

                                    <td>{item.quantity}</td>

                                    <td>${item.item.price}</td>

                                    <td>${item.item.price * item.quantity}</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>


                    <NavLink to="/cart">
                    <button className="btn waves-effect waves-light" style={{marginTop:"15px"}} type="button"  name="action">Modificar carrito

                        <i className="material-icons right">shopping_cart</i>
                        
                    </button>
                    </NavLink>


                </div>

            </div>

            <div className="row">

                <div className="col-12">

                    <h2>Formulario de compra</h2>

                    <hr />

                </div>

            </div>

            <div className="row">

                <div className="col-12">

                    <form onSubmit={handleBuy}>

                        <div className="row">

                            <div className="col-12">

                                <h3>Datos de contacto</h3>

                            </div>

                            <div className="col-12">

                                <div className="mb-3">

                                    <label htmlFor="name" className="form-label">Nombre</label>

                                    <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />

                                </div>

                            </div>

                            <div className="col-12">

                                <div className="mb-3">

                                    <label htmlFor="lastName" className="form-label">Apellido</label>

                                    <input type="text" className="form-control" id="lastName" onChange={(e) => setLastName(e.target.value)} />

                                </div>

                            </div>

                            <div className="col-12">

                                <div className="mb-3">

                                    <label htmlFor="email" className="form-label">Email</label> 

                                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />

                                </div>

                            </div>

                            <div className="col-12">

                                <div className="mb-3">

                                    <label htmlFor="phone" className="form-label">Teléfono</label>

                                    <input type="text" className="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} />

                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <div className="col-12">

                                <h3>Dirección de envío</h3>

                            </div>

                            <div className="col-12">

                                <div className="mb-3">

                                    <label htmlFor="address" className="form-label">Dirección</label>

                                    <input type="text" className="form-control" id="address" onChange={(e) => setAddress(e.target.value)} />

                                </div>

                            </div>

                            <div className="col-12">

                                <div className="mb-3">

                                    <label htmlFor="city" className="form-label">Ciudad</label>

                                    <input type="text" className="form-control" id="city" onChange={(e) => setCity(e.target.value)} />

                                </div>

                            </div>

                            <div className="col-12">

                                <div className="mb-3">

                                    <label htmlFor="state" className="form-label">Estado</label>

                                    <input type="text" className="form-control" id="state" onChange={(e) => setState(e.target.value)} />

                                </div>
                                
                            </div>

                            <div className="col-12">

                                <div className="mb-3">

                                    <label htmlFor="zipCode" className="form-label">Código postal</label>

                                    <input type="text" className="form-control" id="zipCode" onChange={(e) => setZipCode(e.target.value)} />

                                </div>

                            </div>

                            <div className="col-12">

                                <div className="mb-3">

                                    <label htmlFor="country" className="form-label">País</label>

                                    <input type="text" className="form-control" id="country" onChange={(e) => setCountry(e.target.value)} />

                                </div>


                            </div>

                        </div>

                        <div className="row">

                            <div className="col-12">

                                <h3>Resumen de la compra</h3>

                            </div>

                            <div className="col-12">

                                <div className="mb-3">

                                    <label htmlFor="total" className="form-label">Total</label>

                                    <input type="text" className="form-control" id="total" value={getTotalPrice()} readOnly />

                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <div className="col-12">



                                <button type="submit" className="btn btn-primary">Comprar</button>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    )








        

}


export default Checkout;