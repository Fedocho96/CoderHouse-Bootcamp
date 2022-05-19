import React, {useState} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

/* ------------ Views ---------- */
import Category from './views/Category/Category';
import Detail from './views/Detail/Detail';
import Products from './views/Products/Products';
/* ------------ xxxxxxxxxx ---------- */




function App() { 
  const [cartCounter, setCardCounter] = useState(0)
  const [stock, setStock] = useState(20)

  const manageCart = (value) =>{
      setCardCounter(cartCounter + value)
      setStock(stock - value)
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Products/>}/>
        <Route exact path="/item/:id" element={<Detail/>}/>
        <Route exact path="/category/:id" element={<Category/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
