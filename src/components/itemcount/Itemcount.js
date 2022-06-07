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
    <div className='flex gap-5'>
    <button onClick={()=>{handlecount("-")}} >-</button>
    <div>{count}</div>
    <button onClick={()=>{handlecount("+")}}>+</button>
    <button onClick={()=>onSubmit(count)}>Añadir al carrito</button>

</div>
  )
}

export default Itemcount