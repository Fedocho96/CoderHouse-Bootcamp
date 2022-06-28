import React, {useState} from 'react'
import { useParams } from 'react-router-dom';

import ItemListContainer from "../../components/itemlistcontainer/ItemListContainer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ImgCarousel from '../../components/carousel/ImgCarousel';
import Footer from '../../components/footer/Footer';


const Category = () => {
    const {id} = useParams()

    const [cartCounter, setCardCounter] = useState(0)
    const [stock, setStock] = useState(20)

    const manageCart = (value) =>{
      setCardCounter(cartCounter + value)
      setStock(stock - value)


  }
  return (
    <div className='bg-color3'>

    <Navbar cartCounter={cartCounter}/>

    <div className='xl:mx-72'>
        <ImgCarousel/>
     </div>

    <div className='xl:mx-72'>

    <div className="grid grid-cols-4 max-h-full ">

       <div className="bg-color4 h-fit col-span-1 mx-5 pb-10 py-2 border-0 rounded-md">
           <Sidebar/>
        </div>

        <div className="col-span-3 mx-5 pr-4 pb-4 border-0 rounded-md">
          <ItemListContainer manageCart={manageCart} stock={stock} id={id} />
        </div>

      </div>

    </div>  
    
      <Footer/>

  </div>
  )
}

export default Category