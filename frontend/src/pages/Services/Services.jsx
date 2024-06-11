import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './services.scss'
import DatatableServices from '../../components/datatableServices/DatatableServices'

const Services = () => {
  return (
    <div className='services'>
      <Sidebar/>
      <div className='servicesContainer'>
        <Navbar/>
        <DatatableServices/>
      </div>
    </div> 
  )
}

export default Services