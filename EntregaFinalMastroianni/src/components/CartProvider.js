
import { createContext, useContext, useState } from "react"

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {

        const copy = [...cart]

        const isInCart = copy.find((i) => i.item.id === item.id)

        if (!isInCart) {

            setCart([...copy, {item, quantity}])

        }else{

            const newCart = cart.filter((i) => i.item.id !== item.id)

            setCart([...newCart, {item, quantity}])

        }

    }

    const removeItem = (item) => {

        setCart(cart.filter((i) => i.item.id !== item.id))

    }

    const clear = () => {

        setCart([])

    }

    const isInCart = (item) => {

        
        return cart.some((i) => i.item.id === item.id)

    }

    const getProductIntCart = (item) => {

        return cart.find((i) => i.item.id === item.id)

    }


    return (

        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, getProductIntCart}}>

            {children}

        </CartContext.Provider>

    )

}

