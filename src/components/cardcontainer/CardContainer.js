import React from 'react'
import Card from '../card/Card'


const CardContainer = ({manageCart, stock}) => {
  return (
      <>
        <div className=' container grid md:grid-cols-2 lg:grid-cols-4 gap-3 content-evenly'>
            <Card manageCart={manageCart} stock={stock}/>
            <Card manageCart={manageCart} stock={stock}/>
            <Card manageCart={manageCart} stock={stock}/>
            <Card manageCart={manageCart} stock={stock}/>
        </div>
      </>
  )
}

export default CardContainer