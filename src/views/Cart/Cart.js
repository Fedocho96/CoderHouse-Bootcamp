import React from 'react'
import Footer from '../../components/footer/Footer';
import ItemCartContainer from '../../components/itemCartContainer/ItemCartContainer'
import Navbar from "../../components/Navbar/Navbar";

const Cart = () => {
  return (
    <div className='bg-color3 min-h-screen'>

        <Navbar/>
      
      <div className='xl:mx-72'>

        <h1 className=' text-center text-2xl text-slate-900 text my-10'>Mi Carrito</h1>

        <div className=' text-center '>
          <ItemCartContainer/>
        </div>

      </div>

      <div className=' object-bottom'>
        <Footer/>
      </div>

    </div>
  )
}

export default Cart