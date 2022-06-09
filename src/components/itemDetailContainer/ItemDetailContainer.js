import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {getFirestore, doc, getDoc} from 'firebase/firestore'

import ItemDetail from '../itemDetail/ItemDetail'

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
    <div className=' border-red-600 border-2 h-full'>
      <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer