import React, {useState} from 'react'
import { useParams } from 'react-router-dom';

/* ------------ Components ---------- */
import ItemDetailContainer from '../../components/itemDetailContainer/ItemDetailContainer';
import Navbar from "../../components/Navbar/Navbar"
/* ------------ xxxxxxxxxx ---------- */




function Detail() { 
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

      <div>
        <ItemDetailContainer id={id}/>
      </div>

    </div>
  );
}

export default Detail;