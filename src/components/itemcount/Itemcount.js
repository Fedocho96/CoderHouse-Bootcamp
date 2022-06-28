import React from 'react'



const Itemcount = ({count, setCount, onSubmit}) => {

    const handlecount = (value) => {
        if(value === "+"){
          
                setCount(count + 1)    
        }else{
            if(count > 1){
                setCount(count - 1)
            }
        }
    }

  return (
    <div className='flex gap-5 items-center '>
      <button className=' text-color1 text-2xl font-bold py-2 px-4 rounded m-3 w-fit h-10 shadow-xl ring ring-color3 hover:ring-color1' onClick={()=>{handlecount("-")}} >-</button>
      <div className=' items-center'>{count}</div>
      <button className=' text-color1 text-2xl font-bold py-2 px-4 rounded m-3 w-fit h-10 shadow-xl  ring ring-color3 hover:ring-color1' onClick={()=>{handlecount("+")}}>+</button>
      <button className='bg-color1 text-color3 font-bold py-2 px-4 rounded m-3 w-fit h-10 shadow-xl hover:text-color3 ring ring-color3 hover:ring-color1' onClick={()=>onSubmit(count)}>Añadir al carrito</button>
    </div>
  )
}

export default Itemcount