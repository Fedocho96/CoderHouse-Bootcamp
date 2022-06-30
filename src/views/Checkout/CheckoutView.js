import React from 'react'

import Checkout from '../../components/checkout/Checkout'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer';

const CheckoutView = () => {

    return (
        <div className='bg-color3 min-h-screen flex flex-col flex-auto max-h-max'>

            <Navbar/>

            <div className=' my-4 flex flex-auto justify-center  h-fit xl:mx-72 shadow-xl bg-color4 rounded-md'>
                <div className=' w-full'>
                    <Checkout />
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default CheckoutView