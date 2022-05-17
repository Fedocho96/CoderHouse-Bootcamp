import React, { useEffect, useState } from 'react'
import axios from 'axios'

/* ------------------------------- containters ------------------------------- */
import ItemList from '../itemlist/ItemList'
/* ----------------------------------- xxx ---------------------------------- */

const ItemListContainer = ({manageCart, stock}) => {
    const [listaproductos, setListaProductos] = useState([])
    
    const getItem = ()=>{
        axios
          .get('https://apimocha.com/listproduct/products')
          .then((response)=> setListaProductos(response.data))
          .catch((err)=>console.log(err))
      }
    
    useEffect(()=>{
        getItem()
    }, [])

    return (
    <div className=' h-full w-screen'>
        <ItemList listaproductos={listaproductos} manageCart={manageCart} stock={stock}/>
    </div>
  )
}

export default ItemListContainer