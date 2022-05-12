import React from 'react'
import Itemcount from '../itemcount/Itemcount'

const Item = ({manageCart, stock, producto}) => {
  return (
      <>
        <div className='border-2 border-purple-600 h-32'>
          <img src={producto.pictureUrl}/>
          <div className=' text-2xl text-center mb-1'>{producto.title}</div>
          <div>{producto.description}</div>
          <button className='bg-slate-300 hover:bg-slate-400 rounded text-justify text-sm'>Ver mas detalles </button>
          <div className=' text-2xl'>${producto.price}</div>
            <Itemcount manageCart={manageCart} stock={stock}/>
        </div>
      </>
  )
}

export default Item