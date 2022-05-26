import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({manageCart, stock, producto}) => {
  return (
      <>
        <NavLink to={`/item/${producto.id}`} className=' h-auto grid grid-cols-3 border-2 border-purple-600'>
          <img src={producto.pictureUrl} className=" h-fit max-h-48 min-h-min"/>
          <div className='grid col-span-2'>
           <div className=' text-2xl text-center mb-1'>{producto.title}</div>
           <div className='truncate text-ellipsis'>{producto.description}</div>
            <button className='bg-slate-300 hover:bg-slate-400 rounded text-justify text-sm'>Ver mas detalles </button>
            <div className=' text-2xl'>${producto.price}</div>
          </div>
        </NavLink>
      </>
  )
}

export default Item