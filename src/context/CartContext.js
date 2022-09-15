import { useState } from 'react'
import React from 'react'

export const CartContext = React.createContext()

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([])

    const addItem = (item, quantity)=>{
        const indexProduct = isInCart(item.id)
        if (indexProduct !== -1){
            const newArreglo  = [...productCartList]
            const valor1 = newArreglo[indexProduct].quantity 
            const valor2 = quantity
            const suma = valor1 + valor2
            if (suma <= newArreglo[indexProduct].stock){
                newArreglo[indexProduct].quantity = suma
                setProductCartList(newArreglo)
            }else{
                console.log("stock insuficiente")
            }
        }else{
            const newProduct ={
                ...item,
                quantity
            }
            const newArreglo = [...productCartList]
            newArreglo.push(newProduct)
            setProductCartList(newArreglo)
        }
        
    }

    const removeItem = (itemId)=>{
        const newArreglo = productCartList.filter(product => product.id !== itemId)
        setProductCartList(newArreglo)
    }

    const clear = ()=>{
        setProductCartList([])
    }

    const isInCart = (itemId)=>{
        return productCartList.findIndex(product => product.id === itemId)
    }
    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
