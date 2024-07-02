import { useState } from 'react'
import Navbar from './components/Navbar'
import CustomerForm from './components/CustomerForm'
import CustomerTable from './components/CustomerTable'
import ManagerTable from './components/ManagerTable'
import MoTable from './components/MoTable'



function App() {

  return (
    <>
      <Navbar/>
      <CustomerForm/>
      <ManagerTable/>
      <MoTable/>
      <CustomerTable/>
      
      

      
    </>
  )
}

export default App
