import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import GetProcess from "../../../../services/getProcess";

export default function DailyTaksData({
	page,
	rowsPerPage,
	onPageChange,
	onRowsPerPageChange,
}) {
	const [data, setData] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	useEffect(() => {
		const process = new GetProcess();
		process
			.getProcess(page + 1, rowsPerPage)
			.then((response) => {
				setData(response);
				setTotalItems(response.total); // Toplam öğe sayısını belirt
			})
			.catch((error) => {
				console.error("Veri alınamadı:", error);
			});
	}, [page, rowsPerPage]);

	const handleChangePage = (event, newPage) => {
		onPageChange(newPage); // Sayfa değiştirme işlevini çağır
	};

	const handleChangeRowsPerPage = (event) => {
		onRowsPerPageChange(+event.target.value); // Satır sayısı değiştirme işlevini çağır
	};

	return (
		<div>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 500 }}
					aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Müşteri Adı</TableCell>
							<TableCell align="center">Müşteri Soyadı</TableCell>
							<TableCell align="center">Ürün Adı</TableCell>
							<TableCell align="center">Miktarı(Adet)</TableCell>
							<TableCell align="center">Fiyatı(₺)</TableCell>
							<TableCell align="center">Detay</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row) => (
							<TableRow key={row.id}>
								<TableCell>{row.customer_name}</TableCell>
								<TableCell align="center">{row.customer_surname}</TableCell>
								<TableCell align="center">{row.process_name}</TableCell>
								<TableCell align="center">{row.process_quantity}</TableCell>
								<TableCell align="center">{row.process_price}</TableCell>
								<TableCell align="center">
									<div className="flex justify-evenly">
										<Button
											variant="contained"
											color="primary">
											Değiştir
										</Button>
										<Button
											variant="contained"
											color="primary">
											Detay
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
