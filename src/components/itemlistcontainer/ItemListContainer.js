import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

/* ------------------------------- containters ------------------------------- */
import ItemList from '../itemlist/ItemList'
/* ----------------------------------- xxx ---------------------------------- */

const ItemListContainer = ({manageCart, stock, id}) => {
    const [listaproductos, setListaProductos] = useState([])
  
    /*
    const getItem = ()=>{
        axios
          .get('https://apimocha.com/listproduct/products')
          .then((response)=> {
            if(id){
              const found = response.data.filter((prod)=> prod.categoryId === id)
              setListaProductos(found)
            }else{
              setListaProductos(response.data)
            }
        })
          .catch((err)=>console.log(err))
      }
    */

    useEffect(() => {
        const db = getFirestore()
        
        // trigo una categoria
        if(id){
          const q = query(
            collection(db, "productos"),
            where("categoryId", "==", parseInt(id))
          )
          getDocs(q).then((snapshot)=>{
            if(snapshot.size === 0){
              console.log("No hay productos")
            }
            setListaProductos(snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()})))
          });
        }else{
          // traigo todos los productos
          const productsRef = collection(db, "productos")
          getDocs(productsRef).then(snapshot => {
              setListaProductos(  snapshot.docs.map(doc => {
                  return {
                      id: doc.id,
                      ...doc.data()
                  }
              }
              ))
          })
        }

    },[id])

    return (
    <div className='mr-3'>
        <ItemList listaproductos={listaproductos} manageCart={manageCart} stock={stock}/>
    </div>
  )
}

export default ItemListContainer