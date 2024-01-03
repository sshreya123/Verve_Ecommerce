import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Login from './Pages/Login.jsx'
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" banner={men_banner}/>} />
          <Route path="/womens" element={<ShopCategory category="women" banner={women_banner} />} />
          <Route path="/kids" element={<ShopCategory category="kid" banner={kid_banner}/>} />
          <Route path='product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>

      </BrowserRouter>

    </div>
  )
}

export default App
// shop page will be our home page

