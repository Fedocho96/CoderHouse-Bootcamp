import React from 'react'

const Footer = () => {
  return (
    <div className='bg-color1 w-auto h-28 py-4 px-32 items-center flex justify-around text-center divide-x-2'>

        <div className=' text-color3 pl-5'>
            <h1 className=' text-xl'>CONTACTENOS</h1>
            <h2>Fedocho.96@gmail.com</h2>
        </div>

        <div className=' text-color3 pl-5'>
            <h1 className=' text-xl'>CONSULTAS</h1>
            <h2>Stock</h2>
            <h2>Ofertas</h2>
            <h2>Nuestros productos</h2>
        </div>

        <div className=' text-color3 pl-5'>
            <h1 className=' text-xl'>MI CUENTA</h1>
            <h2>Crear mi cuenta</h2>
            <h2>Olvidé mi contraseña</h2>
            <h2>Cambiar de contraseña</h2>
        </div>

        <div className=' text-color3 pl-5'>
            Soy el footer!!!
        </div>

    </div>
  )
}

export default Footer