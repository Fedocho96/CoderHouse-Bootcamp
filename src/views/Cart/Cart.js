import React from 'react'
import ItemCartContainer from '../../components/itemCartContainer/ItemCartContainer'
import Navbar from "../../components/Navbar/Navbar";

const Cart = () => {
  return (
    <div >
      <Navbar/>
      <h1 className=' text-center text-2xl text-slate-900 text my-10'>Mi Carrito</h1>
      <div className=' text-center'>
        <h1 className=' text-2xl text-slate-800 mb-5'>Tu carrito está vacío</h1>
        <ItemCartContainer/>
      </div>
    </div>
  )
}

export default Cart