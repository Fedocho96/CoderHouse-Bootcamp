import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import ImgCarousel from '../../components/carousel/ImgCarousel';
import Footer from '../../components/footer/Footer';

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
    <div className=' bg-color3 min-h-screen flex flex-col flex-auto max-h-max'>

      <Navbar cartCounter={cartCounter}/>

      <div className='xl:mx-72'>
        <ImgCarousel/>
      </div>

      <div className='my-4 flex flex-auto justify-center  h-fit xl:mx-72  rounded-md'>
        <ItemDetailContainer id={id}/>
      </div>

      <div className=' object-bottom'>
        <Footer/>
      </div>

    </div>
  );
}

export default Detail;