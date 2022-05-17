import React from 'react'

/* ------------------------------- components ------------------------------- */
import Itemcount from '../itemcount/Itemcount'
/* ----------------------------------- xxx ---------------------------------- */

const ItemDetail = ({products}) => {
console.log(products)
  return (
    <div className='grid grid-cols-4 gap-1 justify-evenly items-center'>
    <img alt= "" src={products[0].pictureUrl} className='h-auto w-auto col-span-2 border-2 border-gray-700' />
      <div className='col-span-2 flex flex-col gap-2'>
        <div className=' font-extrabold text-2xl'>{products[0].title}</div>
        <div className=' text-left'>{products[0].description}</div>
        <div className=' text-xl font-bold'>${products[0].price}</div>
        <Itemcount/>
      </div> 
    </div>
  )
}

export default ItemDetail