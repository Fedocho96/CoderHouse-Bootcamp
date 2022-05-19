import React from 'react'
import { NavLink } from 'react-router-dom'
import Itemcount from '../itemcount/Itemcount'

const Item = ({manageCart, stock, producto}) => {
  return (
      <>
        <NavLink to={`/item/${producto.id}`} className='border-2 border-purple-600 h-max'>
          <img src={producto.pictureUrl}/>
          <div className=' text-2xl text-center mb-1'>{producto.title}</div>
          <div className='truncate text-ellipsis'>{producto.description}</div>
          <button className='bg-slate-300 hover:bg-slate-400 rounded text-justify text-sm'>Ver mas detalles </button>
          <div className=' text-2xl'>${producto.price}</div>
            <Itemcount manageCart={manageCart} stock={stock}/>
        </NavLink>
      </>
  )
}

export default Item