import React from 'react'
import Item from '../item/Item'


const ItemList = ({manageCart, stock, listaproductos}) => {
  return (
      <>
        <div className=' container grid md:grid-cols-2 lg:grid-cols-4 gap-3 h-max'>
          {
            listaproductos.map((producto)=><Item producto={producto} key={producto.id} manageCart={manageCart} stock={stock} />)
          }
        </div>
      </>
  )
}

export default ItemList