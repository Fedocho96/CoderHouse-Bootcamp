import React, {useState} from 'react'
import { useParams } from 'react-router-dom';

import ItemListContainer from "../../components/itemlistcontainer/ItemListContainer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Category = () => {
    const {id} = useParams()

    const [cartCounter, setCardCounter] = useState(0)
    const [stock, setStock] = useState(20)

    const manageCart = (value) =>{
      setCardCounter(cartCounter + value)
      setStock(stock - value)


  }
  return (
    <div>

    <Navbar cartCounter={cartCounter}/>

    <div className="grid grid-cols-4 max-h-full ">
      <div className="col-span-1 mt-10">
         <Sidebar/>
      </div>

      <div className="col-span-3 mt-10">
        <ItemListContainer manageCart={manageCart} stock={stock} id={id} />
      </div>

    </div>

  </div>
  )
}

export default Category