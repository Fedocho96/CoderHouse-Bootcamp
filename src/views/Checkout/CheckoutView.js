import React from 'react'

import Checkout from '../../components/checkout/Checkout'
import Navbar from '../../components/Navbar/Navbar'

const CheckoutView = () => {

    return (
        <>
            <Navbar/>
            <div className=' mt-4 flex flex-auto justify-center bg-slate-500 h-auto w-full'>
                <Checkout />
            </div>
        </>
    )
}

export default CheckoutView