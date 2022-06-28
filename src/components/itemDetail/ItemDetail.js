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
  console.log(product)

  return (
    <div>
      <div className='grid grid-cols-4 gap-1 justify-evenly items-center h-128 '>

            <img alt= "" src={product.pictureUrl} className=' h-auto w-auto col-span-2' />

          <div className='col-span-2 gap-6 h-full flex flex-col justify-between divide-y-2 divide-color2 divide-opacity-50'>
            <div className=' font-extrabold text-3xl text-center '>{product.title}</div>

            <div className=' flex justify-start items-center gap-2 w-full '>
              <h1 className=' text-lg'>Productos similares: </h1>
              <h1 className=' text-color1'>Link</h1>
            </div>

            <div>
              {product.stock ? (<h1 className=' text-color5'> Hay stock</h1>) : (<h1 className=' text-color1'>X No hay stock</h1>) }
              <h1 className=' text-color5 text-lg'>Garantia por 12 meses</h1>
              <h1 className=' text-color5 text-lg'>Envios a todo el país</h1>
            </div>

            <div className=' text-left text-lg tracking-wide'>{product.description}</div>

            <div className=' flex justify-between mx-2'>
              <div className=' text-2xl font-bold'>${product.price}</div>
              <h1 className=' text-lg'>12 Cuotas sin interes de ${(product.price / 12)}</h1>
            </div>


            {isInCart(product.id) ? (
                <NavLink to={"/cart"} className=" bg-color1 text-color3 font-bold py-2 px-4 rounded m-3 w-fit h-10 shadow-xl hover:text-color3 ring ring-color3 hover:ring-color1">
                Ir al Carrito
                </NavLink>
            ) : (
              <Itemcount count={count} setCount={setCount} onSubmit={()=>addToCart(product, count)}/>
            )}
          </div>   
      </div>

    </div>
  )
}

export default ItemDetail