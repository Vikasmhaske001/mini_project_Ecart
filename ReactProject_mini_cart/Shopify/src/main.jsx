import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ListProduct from './ListProduct.jsx'
import Cart from './Cart.jsx'
import Login from './Login.jsx'
import Loginprovider from './loginprovider.jsx';
import Logout from './Logout.jsx'
import Contactus from './Contactus.jsx'



createRoot(document.getElementById('root')).render(
  <Loginprovider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='ListProduct' element={<ListProduct />} />
          <Route path='Contactus' element={<Contactus />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='Login' element={<Login />} />
          <Route path='Logout' element={<Logout />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </Loginprovider>

)
