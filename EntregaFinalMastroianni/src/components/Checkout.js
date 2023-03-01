

import React, { useState, useContext } from 'react';
import { useCartContext } from './CartProvider'

//import { UserContext } from '../context/UserContext';
//import { useHistory } from 'react-router-dom';

/*
import { getFirestore } from '../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import { collection, addDoc, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
*/



const Checkout = () => {


    const {cart, removeItem, clear, addItem } = useCartContext()

    const [name, setName] = useState('');

    const [lastName, setLastName] = useState('');

    const [email, setEmail] = useState('');

    const [phone, setPhone] = useState('');

    const [address, setAddress] = useState('');

    const [city, setCity] = useState('');

    const [state, setState] = useState('');

    const [zipCode, setZipCode] = useState('');

    const [country, setCountry] = useState('');

    const [error, setError] = useState('');

    const [loading, setLoading] = useState(false);

    const [orderId, setOrderId] = useState('');

    const [order, setOrder] = useState({});

    //const {user} = useContext(UserContext);

    //const history = useHistory();

    //const auth = getAuth();

    //const db = getFirestore();

    //const storage = getStorage();

    const handleBuy = async (e) => {

        e.preventDefault();

        setLoading(true);

        if (name === '' || lastName === '' || email === '' || phone === '' || address === '' || city === '' || state === '' || zipCode === '' || country === '') {

            setError('Todos los campos son obligatorios');

            setLoading(false);

            return;

        }

        if (name.length < 3 || lastName.length < 3) {

            setError('El nombre y apellido deben tener al menos 3 caracteres');

            setLoading(false);

            return;

        }

        if (phone.length < 10) {

            setError('El teléfono debe tener al menos 10 caracteres');

            setLoading(false);

            return;

        }

        if (zipCode.length < 4) {

            setError('El código postal debe tener al menos 4 caracteres');

            setLoading(false);

            return;

        }

        if (country.length < 3) {

            setError('El país debe tener al menos 3 caracteres');

            setLoading(false);

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

            date: new Date(),

            total: getTotalPrice()

        }

        //const orders = collection(db, "orders");

        //const docRef = await addDoc(orders, newOrder);

        //setOrderId(docRef.id);

        setOrder(newOrder);

        clear();

        setLoading(false);

       ///history.push('/order/' + docRef.id);


    }

    const getTotalPrice = () => {

        let total = 0;

        cart.forEach((item) => {

            total += item.item.price * item.quantity;

        })

        return total;

    }

    const handleRemove = (id) => {
        
        removeItem(id);

    }

    const handleAdd = (id) => {

        addItem(id);

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

                                <th scope="col">Acciones</th>

                            </tr>

                        </thead>

                        <tbody>

                            {cart.map((item) => (

                                <tr key={item.item.id}>

                                    <td>{item.item.title}</td>

                                    <td>{item.quantity}</td>

                                    <td>${item.item.price}</td>

                                    <td>${item.item.price * item.quantity}</td>

                                    <td>

                                        <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>Eliminar</button>
                                        
                                        <button className="btn btn-success" onClick={() => handleAdd(item.id)}>Agregar</button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

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