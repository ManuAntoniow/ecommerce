import { useState } from 'react'
import React from 'react'

export const CartContext = React.createContext()

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([])

    const addItem = (item, quantity)=>{
        const newProduct ={
            ...item,
            quantity
        }
        const newArreglo = [...productCartList]
        newArreglo.push(newProduct)
        setProductCartList(newArreglo)
    }

    const removeItem = (itemId)=>{
        const newArreglo = productCartList.filter(product=>product.id !== itemId)
        setProductCartList(newArreglo)
    }

    const clear = ()=>{
        setProductCartList([])
    }

    const isInCart = (itemId)=>{

    }
    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
