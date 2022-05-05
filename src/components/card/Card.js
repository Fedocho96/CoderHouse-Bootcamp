import React from 'react'
import Itemcount from '../itemcount/Itemcount'

const Card = ({manageCart, stock}) => {
  return (
      <>
        <div className='border-2 border-lime-600 h-32'>
            Esta es una Card de producto
            <Itemcount manageCart={manageCart} stock={stock}/>
        </div>
      </>
  )
}

export default Card