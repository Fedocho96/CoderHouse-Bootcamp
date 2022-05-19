import React from 'react'
import { useParams } from 'react-router-dom'

/* ------------------------------- components ------------------------------- */
import Itemcount from '../itemcount/Itemcount'
/* ----------------------------------- xxx ---------------------------------- */

const ItemDetail = ({product}) => {

  const params = useParams()

  return (
    <div className='grid grid-cols-4 gap-1 justify-evenly items-center'>

          <img alt= "" src={product.pictureUrl} className='h-auto w-auto col-span-2 border-2 border-gray-700' />
        <div className='col-span-2 flex flex-col gap-2'>
          <div className=' font-extrabold text-2xl'>{product.title}</div>
          <div className=' text-left'>{product.description}</div>
          <div className=' text-xl font-bold'>${product.price}</div>
          <Itemcount/>
        </div>   
    </div>
  )
}

export default ItemDetail