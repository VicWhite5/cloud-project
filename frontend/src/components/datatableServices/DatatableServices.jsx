import React from 'react'
import "./datatableServices.scss"

import { DataGrid } from '@mui/x-data-grid';
import { serviceColumns, getRamenData } from '../../datatableServicesSource';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { deleteRamenData } from '../../datatableServicesSource';


const DatatableServices = () => {
  
    const actionColumn =[{field:"action", headerName:"Action",width:180, renderCell:(params) =>
    {
      
        return(
            <div className='cellAction'>
              <Link to={'/services/test'} state={{ data: params.row }}style={{textDecoration:"none"}}>
              <div className='viewButton' 
              >Update</div>
              </Link>
              <Link style={{textDecoration:"none"}}>
                <div className='deleteButton' onClick={() => {deleteRamenData(params.row.id); getRamenData().then(data => setRows(data));}}>Delete</div>
                </Link>
            </div>
        )

    }}];
    const [rows, setRows] = useState([]);
      useEffect(() => {
        getRamenData().then(data => setRows(data));
      }, []);
  return (
    <div className='datatableServices'>
        <div className='datatableServicesTitle'>Menu
        <Link to="/services/new"style={{textDecoration:"none"}} className='link'>
            Add New
            </Link>
        </div>
         <DataGrid
        rows={rows}
        columns={serviceColumns.concat(actionColumn)}
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

export default DatatableServices