import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {mockDataContacts as data} from '../../data/mockData';


 function DataTable() {  
    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'name', headerName: 'Ad', width: 200 },
      { field: 'email', headerName: 'E-posta', width: 200 },
      { field: 'age', headerName: 'Yaş', type: 'number', width: 100 },
      { field: 'phone', headerName: 'Telefon', width: 150 },
      { field: 'address', headerName: 'Adres', width: 300 },
      { field: 'city', headerName: 'Şehir', width: 150 },
      { field: 'zipCode', headerName: 'Posta Kodu', width: 150 },
      { field: 'registrarId', headerName: 'Kayıt ID', type: 'number', width: 150 },
    ];
  

  return (
    <div style={{ height: 400, width: '100%' }}>
    
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
export default DataTable