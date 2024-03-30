import React from 'react'
import "./Admin.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../../components/addproduct/Addproduct'
import Listproduct from '../../components/listproduct/Listproduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/addproducts'  element={< Addproduct/>}/>
        <Route path='/listproduct'  element={< Listproduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin
