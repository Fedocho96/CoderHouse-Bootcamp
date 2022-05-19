import React from 'react'
import Item from '../item/Item'


const ItemList = ({manageCart, stock, listaproductos}) => {
  return (
      <>
        <div className=' container flex flex-col gap-2 h-auto rounded-sm'>
          {
            listaproductos.map((producto)=><Item producto={producto} key={producto.id} manageCart={manageCart} stock={stock} />)
          }
        </div>
      </>
  )
}

export default ItemList