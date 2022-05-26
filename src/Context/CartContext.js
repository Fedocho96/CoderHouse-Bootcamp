import React from 'react'

const CartContext = React.createContext();
const {Provider} = CartContext

const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([])
   
    //addToCart
    const addToCart = (item, count) => {
        if(isInCart(item.id)){
            const newCart = cart.map( cartItem =>{
                if(cartItem.id === item.id){
                    cartItem.quantity++
                }
                return cartItem
            }
            )
            setCart(newCart)
        }
        else{
            setCart([...cart, {...item, quantity: +count}])
        }
    }

    //removeFromCart
    const removeFromCart = (item)=> {
        if(item.quantity === 1){
            const newCart = cart.filter((cartitem => cartitem.id !== item.id))
            setCart(newCart)
        }else{
            const newCart = cart.map(cartItem =>{
                if(cartItem.id === item.id){
                    cartItem.quantity--
                }
                return cartItem
            }
            )
            setCart(newCart)
        }
    }

    //deleteAll
    const deleteAll = () => {
        setCart([])
    }

    //isInCart
    const isInCart = (id) => {
        return cart.find(item => item.id === id)
    }

  return (
    <Provider value={{
        cart,
        addToCart,
        removeFromCart,
        deleteAll,
        isInCart
    }}>
        {children}
    </Provider>
  )
}

export {CartContext, CartProvider}