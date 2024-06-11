import React from 'react'
import "./datatableOrders.scss"

import { DataGrid } from '@mui/x-data-grid';
import { orderColumns, orderRows } from '../../datatableOrdersSource';
import {Link} from 'react-router-dom'

const DatatableOrders = () => {
    const actionColumn =[{field:"action", headerName:"Action",width:180, renderCell:() =>
    {
        return(
            <div className='cellAction'>
                <div className='viewButton'>Details</div>
                <div className='deleteButton'>Delete</div>
            </div>
        )

    }}];
  return (
    <div className='datatableOrders'>
        <div className='datatableOrdersTitle'>Orders
        <Link style={{textDecoration:"none"}} className='link'>
            Add New
            </Link>
        </div>
         <DataGrid
        rows={orderRows}
        columns={orderColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default DatatableOrders