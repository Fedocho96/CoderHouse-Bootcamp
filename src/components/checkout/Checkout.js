import React from 'react'
import {addDoc, collection, getFirestore, writeBatch, doc } from 'firebase/firestore'
import { CartContext } from '../../Context/CartContext'

const Checkout = () => {
    const {cart} = React.useContext(CartContext)
    const [buyier, setBuyier] = React.useState()
    const [orderId, setOrderId] = React.useState()

    const handleBuyier = (event) => {
        const { name, value } = event.target
        setBuyier({ ...buyier, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const order = {
            buyier,
            cart,
            date: new Date(),
            total: cart.reduce((total, item) => total + item.price * item.quantity, 0)
        }
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        await addDoc(ordersCollection, order).then(({id})=> {
            setOrderId(id)
            updateProducts()
        })
    }

    const updateProducts = () => {
        const db = getFirestore()
        const batch = writeBatch(db)
        cart.forEach(item => {
            const productRef = doc(db, "productos", item.id)
            batch.update(productRef, {
                stock: item.stock - item.quantity
            })
        })
        batch.commit()
    }



  return (
    <div className=' col-span-2  flex flex-col items-center'>
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit} className=" grid grid-cols-2 gap-2">
            <input type="text" name="name" placeholder="Name" onChange={handleBuyier} />
            <input type="email" name="email" placeholder="Email" onChange={handleBuyier} />
            <input type="address" name="address" placeholder="Address" onChange={handleBuyier} />
            <input type="city" name="city" placeholder="City" onChange={handleBuyier} />
            <input type="submit" value="comprar" />
        </form>
        
    </div>
  )
}

export default Checkout