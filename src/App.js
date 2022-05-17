import React, {useState} from 'react'

/* ------------ Components ---------- */
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
/* ------------ xxxxxxxxxx ---------- */




function App() { 
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
          <ItemListContainer manageCart={manageCart} stock={stock} />
        </div>

      </div>

      <div>
        <ItemDetailContainer/>
      </div>

    </div>
  );
}

export default App;
