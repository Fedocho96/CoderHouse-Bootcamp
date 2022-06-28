import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({manageCart, stock, producto}) => {
  return (
      <>
        <div className=' h-auto grid grid-cols-3 bg-color4 rounded-md shadow-md'>
          <NavLink to={`/item/${producto.id}`} className=' h-auto w-auto  self-center place-self-center'>
            <img src={producto.pictureUrl} className=" h-40"/>
          </NavLink>
          <div className='grid col-span-2 pr-2'>
           <div className=' text-2xl text-center mb-1'>{producto.title}</div>
           <div className='truncate text-ellipsis pl-2'>{producto.description}</div>
            <div className=' text-2xl pl-2'>${producto.price}</div>
            <NavLink to={`/item/${producto.id}`} className='bg-color1 text-color3 font-bold py-2 px-4 rounded m-3 w-fit h-10 shadow-xl hover:text-color3 ring ring-color3 hover:ring-color1'>Ver Producto </NavLink >
          </div>
        </div>
      </>
  )
}

export default Item