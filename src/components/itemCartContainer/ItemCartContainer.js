import React from 'react'
import CartItem from '../cartItem/CartItem'

import { CartContext } from '../../Context/CartContext'

import {FaTrashAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const ItemCartContainer = () => {
    const {cart, addToCart, removeFromCart, deleteAll} = React.useContext(CartContext)
  return cart.length ? (
    <div className='lg:mx-60 md:mx-0 sm:mx-0 '>
      <button className='flex justify-center items-center' onClick={() => deleteAll()}>
        <FaTrashAlt/>
        <h1> Vaciar Carrito</h1>
      </button>
        {cart.map(item => <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} deleteAll={deleteAll}/>)}
    </div>
  ) : ( 
    <div>
      <NavLink to={"/"} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Comienza a llenar tu carrito
      </NavLink>
    </div>
  )
}

export default ItemCartContainer