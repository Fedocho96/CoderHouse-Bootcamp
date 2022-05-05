import React, {useState} from 'react'

/* ------------ Components ---------- */
import CardContainer from "./components/cardcontainer/CardContainer";
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar";
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

      <div className="grid grid-cols-4">
        <div className="col-span-1 mt-10">
           <Sidebar/>
        </div>

        <div className="col-span-3 mt-10">
          <CardContainer manageCart={manageCart} stock={stock} />
        </div>
      </div>

    </div>
  );
}

export default App;
