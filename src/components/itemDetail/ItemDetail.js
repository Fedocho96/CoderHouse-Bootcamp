import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

/* ------------------------------- components ------------------------------- */
import Itemcount from '../itemcount/Itemcount'
/* ----------------------------------- xxx ---------------------------------- */

const CartButton = ()=>(
  <NavLink to={"/cart"} className=" border-2 border-zinc-700">
    Ir al Carrito
  </NavLink>
)

const ItemDetail = ({product}) => {
  const [amount, setAmount] = useState(0)

  const ManageAmount = (count)=> {
    setAmount(count)
  }

  


  return (
    <div className='grid grid-cols-4 gap-1 justify-evenly items-center'>

          <img alt= "" src={product.pictureUrl} className='h-auto w-auto col-span-2 border-2 border-gray-700' />
        <div className='col-span-2 flex flex-col gap-2'>
          <div className=' font-extrabold text-2xl'>{product.title}</div>
          <div className=' text-left'>{product.description}</div>
          <div className=' text-xl font-bold'>${product.price}</div>
          {amount ? <CartButton/> : <Itemcount ManageAmount={ManageAmount}/>}
        </div>   
    </div>
  )
}

export default ItemDetail