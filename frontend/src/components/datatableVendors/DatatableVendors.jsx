import React from 'react'
import "./datatableVendors.scss"

import { DataGrid } from '@mui/x-data-grid';
import { vendorColumns, vendorRows } from '../../datatableVendorsSource';
import {Link} from 'react-router-dom'

const DatatableVendors = () => {
    const actionColumn =[{field:"action", headerName:"Action",width:180, renderCell:() =>
    {
        return(
            <div className='cellAction'>
                <Link to="/vendors/test" style={{textDecoration:"none"}}>
                <div className='viewButton'>View</div>
                </Link>
                <div className='deleteButton'>Delete</div>
            </div>
        )

    }}];
  return (
    <div className='datatableVendors'>
        <div className='datatableVendorsTitle'>Vendors
        <Link to="/vendors/new"style={{textDecoration:"none"}} className='link'>
            Add New
            </Link>
        </div>
         <DataGrid
        rows={vendorRows}
        columns={vendorColumns.concat(actionColumn)}
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

export default DatatableVendors