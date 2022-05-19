import React, {useState, useEffect} from 'react'
import axios from 'axios'

import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = ({id}) => {
  const [product, setProduct] = useState([])


  const getItem = ()=>{
    axios
      .get('https://apimocha.com/listproduct/products')
      .then((response)=> setProduct(response.data.find((prod)=> prod.id === id)))
      .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getItem()
}, [])


  return (
    <div className=' border-red-600 border-2 h-full'>
      <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer