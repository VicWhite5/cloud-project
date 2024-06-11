import React from 'react'
import "./datatableclients.scss"

import { DataGrid } from '@mui/x-data-grid';
import { clientColumns, clientRows } from '../../datatableClientsSource';
import {Link} from 'react-router-dom'
 
const DatatableClients = () => { 
    const actionColumn =[{field:"action", headerName:"Action",width:200, renderCell:() =>
    {
        return(
            <div className='cellAction'>
              <Link to="/clients/test" style={{textDecoration:"none"}}>
              <div className='viewButton'>View</div>
              </Link>
                <div className='deleteButton'>Delete</div>
            </div>
        )

    }}];
  return (
    <div className='datatableClients'>
        <div className='datatableClientsTitle'>Clients
        <Link to="/clients/new"style={{textDecoration:"none"}} className='link'>
            Add New
            </Link>
        </div> 
         <DataGrid
        rows={clientRows}
        columns={clientColumns.concat(actionColumn)}
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

export default DatatableClients