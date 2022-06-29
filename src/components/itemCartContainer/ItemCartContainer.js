import React from 'react'
import CartItem from '../cartItem/CartItem'

import { CartContext } from '../../Context/CartContext'

import {FaTrashAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const ItemCartContainer = () => {
    const {cart, addToCart, removeFromCart, deleteAll} = React.useContext(CartContext)
  return cart.length ? (
    <div className='md:mx-0 sm:mx-0 h-screen'>
      <button className='flex justify-center items-center bg-color1 text-color3 font-bold py-2 px-4 rounded m-3 w-fit h-10 shadow-xl hover:text-color3 ring ring-color3 hover:ring-color1' onClick={() => deleteAll()}>
        <FaTrashAlt/>
        <h1 className=' m-2'> Vaciar Carrito</h1>
      </button>
        {cart.map(item => <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} deleteAll={deleteAll}/>)}

        {/* ------------------------- xxxx metodo envio xxxx ------------------------- */}
 
        <div className=' items-center h-40 flex m-2 shadow-lg  rounded-sm'>


        <div className=' bg-color1 w-2 h-full rounded-l-md'></div>

        <div className=' grid grid-cols-4 h-full p-2 w-full  items-center'>
          
          <div className='col-span-3 grid grid-cols-1 justify-evenly'>

            <h1 className=' text-2xl'>Envíos a domicilio</h1>

            <div class=" text-center ">
              <input id="default-radio-1" type="radio" value="1200" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Oca : $1200</label>
            </div>

            <div class="text-center">
                <input checked id="default-radio-2" type="radio" value="1500" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Andreani: $1500</label>
            </div>

          </div>

          <div className='col-span-1'>
              <h1 className=' text-xl'> Total del envío </h1>
          </div>

        </div>

        </div>

        {/* ------------------------- xxxx - xxxx ------------------------- */}

        <NavLink to='/checkout'>
            <button className='flex justify-center items-center bg-color5 text-color3 font-bold py-2 px-4 rounded m-3 w-fit h-10 shadow-xl hover:text-color3 ring ring-color3 hover:ring-color5'>
                <h1> Finalizar Compra</h1>
            </button>
        </NavLink>
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