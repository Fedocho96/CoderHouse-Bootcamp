import React, { useEffect, useState } from 'react'

/* ------------------------------- containters ------------------------------- */
import ItemList from '../itemlist/ItemList'
/* ----------------------------------- xxx ---------------------------------- */

const ItemListContainer = ({manageCart, stock}) => {
    const [listaproductos, setListaProductos] = useState([])
    
  const productos = [
      {id: '1', title: 'lechuga1', description:' description description description description description description description ', price:'20', pictureUrl:'https://www.cocinayvino.com/wp-content/uploads/2020/09/www.cocinayvino.com-la-lechuga-es-mucho-mas-que-agua-lechuga1-e1601317319527-1200x900.jpg'},
      {id: '2', title: 'lechuga2', description:'description description description description description description description description description description ', price:'20', pictureUrl:'https://www.cocinayvino.com/wp-content/uploads/2020/09/www.cocinayvino.com-la-lechuga-es-mucho-mas-que-agua-lechuga1-e1601317319527-1200x900.jpg'},
      {id: '3', title: 'lechuga3', description:'description description description description description description description description description ', price:'20', pictureUrl:'https://www.cocinayvino.com/wp-content/uploads/2020/09/www.cocinayvino.com-la-lechuga-es-mucho-mas-que-agua-lechuga1-e1601317319527-1200x900.jpg'}
  ]
  const traerProducto = new Promise ((resolve, reject) =>{
      let condition = true
      setTimeout(()=>{
        if(condition){
            resolve(productos)
        }else{
            reject("F")
        }
      }, 2000)
  })

  useEffect(()=>{
      traerProducto
      .then((res)=>setListaProductos(res))
      .catch((error)=>console.log(error))
  }, [])

  return (
    <div >
        <ItemList listaproductos={listaproductos} manageCart={manageCart} stock={stock}/>
    </div>
  )
}

export default ItemListContainer