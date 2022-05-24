import React, {useState} from 'react'

const Itemcount = ({ManageAmount}) => {
    const [count, setCount] = useState(1)

    const handlecount = (value) => {
        if(value === "+"){
          
                setCount(count + 1)    
        }else{
            if(count > 0){
                setCount(count - 1)
            }
        }
    }

  return (
    <div className='flex gap-5'>
        <button onClick={()=>{handlecount("-")}} >-</button>
        <div>{count}</div>
        <button onClick={()=>{handlecount("+")}}>+</button>
        <button onClick={()=>{ManageAmount(count)}}>Añadir al carrito</button>

    </div>
  )
}

export default Itemcount