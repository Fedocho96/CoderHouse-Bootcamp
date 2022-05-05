import React from 'react'

import { ImCart } from 'react-icons/im';


const Cartwidget = ({cartCounter}) => {
  return (
    <div>
        <button className=' flex gap-1 cursor-pointer hover:text-slate-900'>
            {cartCounter}
            <ImCart/>
            <div>

            </div>
        </button>
    </div>
  )
}

export default Cartwidget