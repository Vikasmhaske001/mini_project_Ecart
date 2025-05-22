import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navlink from './NavLink'
function App() {



  return (
    <>
      <Navlink />
      <Outlet />
    </>
  )
}

export default App
