import React from 'react'

const Sidebar = () => {

    const categorias = [{titulo:"categorias", id:"1"}, {titulo:"ofertas", id:"2"}, {titulo:"Populares", id:"3"}, {titulo:"Combos", id:"4"}]

  return (
    <div className='grid'>
            <div className="grid gap-4 text-xl text-black">
                {categorias.map(({titulo, id})=>(
                    <h2 key={id} className="cursor-pointer hover:text-red-800 px-10">{{titulo}.titulo}</h2>
                ))}
            </div>
    </div>          
  )
}

export default Sidebar