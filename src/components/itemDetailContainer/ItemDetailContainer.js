import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {getFirestore, doc, getDoc} from 'firebase/firestore'

import ItemDetail from '../itemDetail/ItemDetail'
import { NavLink } from 'react-router-dom'

const ItemDetailContainer = ({id}) => {
  const [product, setProduct] = useState([])
  console.log(id)

  /*
  const getItem = ()=>{
    axios
      .get('https://apimocha.com/listproduct/products')
      .then((response)=> setProduct(response.data.find((prod)=> prod.id === id)))
      .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getItem()
}, [])
*/

useEffect(() => {
  const db = getFirestore()
  const productRef = doc(db, "productos", id)
  getDoc(productRef).then((snapshot) => {
    setProduct({id: snapshot.id, ...snapshot.data()})
  })
}, [id])


  return (
    <div className=' h-fit'>
      {product.title ? 
        <div className=' rounded-md shadow-xl bg-color4 m-2 p-2 h-fit w-fit'>
          <ItemDetail product={product}/>
        </div>
        :
        <div className=' shadow-lg flex justify-center text-center items-center'>
           <h1 className=' text-2xl'>No se encontró el producto</h1>
           <NavLink to={"/"}  className=' bg-color1 text-color3 font-bold py-2 px-4 rounded m-3 w-fit h-10 shadow-xl hover:text-color3 ring ring-color3 hover:ring-color1 text-center '>
            <h1 className=' text-lg'> Regresar a comprar </h1>
           </NavLink>
        </div>
      }
    </div>
  )
}

export default ItemDetailContainer