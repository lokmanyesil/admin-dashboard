import React, { useState } from "react";
import DailyTaksData from "./DailyTaksData";
import TablePagination from "@mui/material/TablePagination";

export default function DailyTasks() {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10); // Varsayılan satır sayısı

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		const newRowsPerPage = +event.target.value;
		setRowsPerPage(newRowsPerPage);
		setPage(0); // Yeni sayfa, 0. sayfaya geri dön
	};
	return (
		<div>
			<DailyTaksData
				page={page}
				rowsPerPage={rowsPerPage}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
			<TablePagination
				className="mb-5"
				rowsPerPageOptions={[10, 25, 50, 100]} // Kullanıcıya sunulan seçenekler
				component="div"
				count={100} // Toplam öğe sayısı, gerçek veriye göre güncellenmelidir
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</div>
	);
}
