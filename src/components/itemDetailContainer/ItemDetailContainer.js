import React, {useState, useEffect} from 'react'
import axios from 'axios'

import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [products, setProducs] = useState([])


  const getItem = ()=>{
    axios
      .get('https://apimocha.com/listproduct/products')
      .then((response)=> setProducs(response.data))
      .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getItem()
}, [])


  return (
    <div className=' border-red-600 border-2 h-full'>
      <ItemDetail products={products}/>
    </div>
  )
}

export default ItemDetailContainer