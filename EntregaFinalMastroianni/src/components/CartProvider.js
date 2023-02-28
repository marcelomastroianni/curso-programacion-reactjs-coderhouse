
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

        }

    }

    const removeItem = (itemId) => {

        setCart(cart.filter((i) => i.item.id !== itemId))

    }

    const clear = () => {

        setCart([])

    }

    const isInCart = (itemId) => {

        return cart.some((i) => i.item.id === itemId)

    }

    return (

        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>

            {children}

        </CartContext.Provider>

    )

}

