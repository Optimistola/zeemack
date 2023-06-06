import * as React from "react";
import {Route, Routes, BrowserRouter as Router, BrowserRouter} from 'react-router-dom'
import NavBar from "./components/nav.jsx"
import './App.css';
import Home from './components/pages/home.jsx'
import Cloth from "./components/pages/categories/clothes.jsx";
import Bags from "./components/pages/categories/bags.jsx";
import Shoes from "./components/pages/categories/shoe.jsx";
import All from "./components/pages/categories/all.jsx";
import Watches from "./components/pages/categories/watches.jsx";
import Cart from "./components/pages/cart.jsx";
import { Alert } from "./components/utils/alert.jsx";
import { useContext } from "react";
import CartContext from "./components/context/cartContext.jsx";
import Modal from "./components/utils/modal.jsx";
import { Footer } from "./components/footer.jsx";
function App() {
const {showModal}=useContext(CartContext)
  return (
<main>
{showModal && <Modal /> }

   <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/pages/cart' element={<Cart/>}></Route>
          <Route path='/pages/categories/clothes' element={<Cloth/>}></Route>
          <Route path='/pages/categories/bags' element={<Bags/>}></Route>
          <Route path='/pages/categories/shoes' element={<Shoes/>}></Route>
          <Route path='/pages/categories/watches' element={<Watches/>}></Route>
          <Route path='/pages/categories/all' element={<All/>}></Route>

        </Routes>
  </BrowserRouter>
  <Footer/>
</main>
  );
}

export default App;
