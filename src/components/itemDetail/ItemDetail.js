import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'


/* ------------------------------- components ------------------------------- */
import Itemcount from '../itemcount/Itemcount'
/* ----------------------------------- xxx ---------------------------------- */

/* --------------------------------- context -------------------------------- */
import { CartContext } from '../../Context/CartContext'
/* ---------------------------------- xxxx ---------------------------------- */



const ItemDetail = ({product}) => {
  const {addToCart, isInCart} = React.useContext(CartContext)

  const [count, setCount] = useState(1)

  return (
    <div className='grid grid-cols-4 gap-1 justify-evenly items-center'>

          <img alt= "" src={product.pictureUrl} className='h-auto w-auto col-span-2 border-2 border-gray-700' />
        <div className='col-span-2 flex flex-col gap-2'>
          <div className=' font-extrabold text-2xl'>{product.title}</div>
          <div className=' text-left'>{product.description}</div>
          <div className=' text-xl font-bold'>${product.price}</div>
          {isInCart(product.id) ? (
              <NavLink to={"/cart"} className=" border-2 border-zinc-700">
              Ir al Carrito
              </NavLink>
          ) : (
            <Itemcount count={count} setCount={setCount} onSubmit={()=>addToCart(product, count)}/>
          )}
        </div>   
    </div>
  )
}

export default ItemDetail