import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

/* ------------ Views ---------- */
import Category from './views/Category/Category';
import Detail from './views/Detail/Detail';
import Products from './views/Products/Products';
import Cart from './views/Cart/Cart'
/* ------------ xxxxxxxxxx ---------- */

import { CartProvider } from './Context/CartContext';




function App() { 

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
         <Route exact path="/" element={<Products/>}/>
         <Route exact path="/item/:id" element={<Detail/>}/>
         <Route exact path="/category/:id" element={<Category/>} />
         <Route exact path="/cart" element={<Cart/>} />
       </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
