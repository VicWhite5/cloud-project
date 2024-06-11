import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './orders.scss'
import DatatableOrders from '../../components/datatableOrders/DatatableOrders'

const Orders = () => {
  return (
    <div className='orders'>
      <Sidebar/>
      <div className='ordersContainer'>
        <Navbar/>
        <DatatableOrders/>
      </div>
    </div> 
  )
}

export default Orders