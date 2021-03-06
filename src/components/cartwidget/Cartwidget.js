import React from 'react'
import { NavLink } from 'react-router-dom';

import { ImCart } from 'react-icons/im';

import { CartContext } from '../../Context/CartContext';


const Cartwidget = () => {

  const {cart} = React.useContext(CartContext)

  return (
    <NavLink to={"/cart"}>
        <button className=' flex gap-1 cursor-pointer hover:text-slate-900'>
          <span >
            {cart.map(item => item.quantity).reduce((a, b) => a + b, 0)}
          </span>
            <ImCart/>
        </button>
    </NavLink>
  )
}

export default Cartwidget