import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './clients.scss'
import DatatableClients from '../../components/datatableClients/DatatableClients'

const Clients = () => {
  return (
    <div className='clients'>
      <Sidebar/>
      <div className='clientsContainer'>
        <Navbar/>
        <DatatableClients/>
      </div>
    </div> 
  )
}

export default Clients