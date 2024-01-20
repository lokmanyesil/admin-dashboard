import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {mockDataTeam as data} from "../../data/mockData"
import { Button } from '@mui/material';


export default function DailyTaksData({ searchData }) {
  const [filteredRows, setFilteredRows] = React.useState([]);
  
  const rows = data.map((item) => {
    return createData(
      item.name,
      item.email,
      item.name,
      item.age,
      item.phone
    );
  });
  function createData(id, dealerName, service, customer, situation, history) {
    return {id, dealerName, service, customer, situation, history };
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bayi Adı</TableCell>
            <TableCell align="center">Verılen Hızmet</TableCell>
            <TableCell align="center">Müşteri</TableCell>
            <TableCell align="center">Durum</TableCell>
            <TableCell align="center">Tarih</TableCell>
            <TableCell align="center">Detay</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.dealerName}
              </TableCell>
              <TableCell align="center">{row.service}</TableCell>
              <TableCell align="center">{row.customer}</TableCell>
              <TableCell align="center">{row.situation}</TableCell>
              <TableCell align="center">{row.history}</TableCell>
              <TableCell align="center">
              <div className='flex justify-evenly'>                
                <Button variant="contained" color="primary">Değiştir</Button>
                <Button variant="contained" color="primary">Detay</Button>
              </div>
              </TableCell>
            </TableRow>          
        ))}
        </TableBody>  
      </Table>
    </TableContainer>
  );
}
