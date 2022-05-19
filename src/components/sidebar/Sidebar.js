import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const categorias = [{titulo:"Teclados", id:"1"}, {titulo:"Ratones", id:"2"}, {titulo:"Gabinetes", id:"3"}, {titulo:"Auriculares", id:"4"}]

  return (
    <div className='grid '>
            <div className="grid gap-4 text-xl text-black ">
                <NavLink to={"/"} className="cursor-pointer hover:text-red-800 px-10" >Todo</NavLink>
                {categorias.map(({titulo, id})=>(
                    <NavLink to={`/category/${id}`} key={id} className="cursor-pointer hover:text-red-800 px-10">{{titulo}.titulo}</NavLink>
                ))}
            </div>
    </div>          
  )
}

export default Sidebar