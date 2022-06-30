import React from 'react'
import {addDoc, collection, getFirestore, writeBatch, doc } from 'firebase/firestore'
import { CartContext } from '../../Context/CartContext'
import Item from '../item/Item'

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
            total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
            status: 'Generada'
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
    <div className=' w-full'>
        {orderId ? (

                <div className=' h-full'>
                    <h1 className="text-center text-2xl font-bold pt-2">Su pedido se ha generado con éxito</h1>

                    <div className="grid grid-cols-1 mt-4 text-lg text">
                    <h1 className="text-center text-lg font-bold">Su número de pedido es: {orderId}</h1>
                        <h1 className="text-center text-lg font-bold">Su total es: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h1>
                    </div>

                    <div className="grid grid-cols-1 mt-4 items-start">
                        <h1 className="text-center text-lg font-bold">Su nombre es: {buyier.name}</h1>
                        <h1 className="text-center text-lg font-bold">Su email es: {buyier.email}</h1>
                        <h1 className="text-center text-lg font-bold">Su teléfono es: {buyier.phone}</h1>
                        <h1 className="text-center text-lg font-bold">Su dirección es: {buyier.city}</h1>
                    </div>

                    <div className="grid grid-cols-1 mt-2 items-start">
                        <h1 className="text-center text-lg font-bold">Su pedido es:</h1>
                        {cart.map(item => (
                            <Item key={item.id} producto={item} />
                        ))}
                    </div>
                </div>

        ) : (
            <div className=' col-span-2  flex flex-col justify-start items-center my-5 mx-4'>
                <h1 className=' text-2xl mb-5'>Checkout</h1>
        
                <form class="w-full" onSubmit={handleSubmit}>
        
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full bg-color3 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name='name' onChange={handleBuyier}/>
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-color3 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" name='lastname' onChange={handleBuyier}/>
                        </div>
                    </div>

                    <div className="mb-3 pt-0">
                        <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="px-3 py-3 bg-color3 text-gray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                        />
                    </div>
        
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-phone">
                            Phone number
                        </label>
                        <input class="appearance-none block w-full bg-color3 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="int" placeholder="02245666666" name='phone' onChange={handleBuyier}/>
                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
        
                    <div class="flex flex-wrap -mx-3 mb-2">
        
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input class="appearance-none block w-full bg-color3 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" name='city' onChange={handleBuyier}/>
                        </div>
        
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-color3 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='state' onChange={handleBuyier}>
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
        
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input class="appearance-none block w-full bg-color3 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" name='zip' onChange={handleBuyier}/>
                        </div>
        
                    </div>
        
                    <input type="submit" value="comprar" className=' bg-color1 text-color3 font-bold py-2 px-4 rounded m-3 w-fit h-10 shadow-xl hover:text-color3 ring ring-color3 hover:ring-color1 text-center '/>
        
                </form>
        
        
                <div className=' gap-2'>
                    {cart.map(item => (< Item producto={item}/> ))}
                </div>
                
                
            </div>
    
        )}
    </div>
  )
}

export default Checkout





/*

<h1 className=' text-2xl mb-5'>Checkout</h1>
        <form onSubmit={handleSubmit} className=" grid grid-cols-2 gap-4 justify-around w-full">

            <input type="text" name="name" placeholder="Name" onChange={handleBuyier} />

            <input type="email" name="email" placeholder="Email" onChange={handleBuyier} />

            <input type="address" name="address" placeholder="Address" onChange={handleBuyier} />

            <input type="city" name="city" placeholder="City" onChange={handleBuyier} />

            <input type="submit" value="comprar" className='' />
        </form>

*/