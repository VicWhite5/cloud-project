import React from 'react'
import "./datatable.scss"

import { DataGrid } from '@mui/x-data-grid';
import {  userColumns, userRows } from '../../datatableSource';
import {Link} from 'react-router-dom'

const Datatable = () => {
    const actionColumn =[{field:"action", headerName:"Action",width:200, renderCell:() =>
    {
        return(
            <div className='cellAction'>
                <div className='viewButton'>Update</div>
                <div className='deleteButton'>Delete</div>
            </div>
        )

    }}];
  return (
    <div className='datatable'>
        <div className='datatableTitle'>Users
        <Link style={{textDecoration:"none"}} className='link'>
            Add New
            </Link>
        </div>
         <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
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

export default Datatable