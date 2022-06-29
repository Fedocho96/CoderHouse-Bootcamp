import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'



const CartItem = ({item, addToCart, removeFromCart, deleteAll}) => {


  return (
    <>
    <div className=' items-center h-32 flex m-2 shadow-lg rounded-sm'>

      <div className=' bg-color1 w-2 h-full rounded-l-md'></div>

      <NavLink to={`/item/${item.id}`} className=' h-auto w-auto '>
        <img src={item.pictureUrl} className="h-28 w-36 object-contain"/>
      </NavLink>

      <div className='text-2xl flex-1 '>{item.title}</div>

      <div className='flex '>

        <div className='flex gap-5'>
          <button className='flex justify-center items-center' onClick={() => removeFromCart(item)}>
            <FaMinusCircle/>
          </button>

          <h1 className=' text-lg'>{item.quantity}</h1>

          <button className='flex justify-center items-center' onClick={() => addToCart(item)}>
            <FaPlusCircle/>
          </button>

         <div className=' text-2xl mx-2'>${item.price * item.quantity}</div>
        </div>

     </div>

    </div>

  </>
  )
}

export default CartItem