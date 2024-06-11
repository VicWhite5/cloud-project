import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './vendors.scss'
import DatatableVendors from '../../components/datatableVendors/DatatableVendors'

const Vendors = () => {
  return (
    <div className='vendors'>
      <Sidebar/>
      <div className='vendorsContainer'>
        <Navbar/>
        <DatatableVendors/>
      </div>
    </div> 
  )
}

export default Vendors