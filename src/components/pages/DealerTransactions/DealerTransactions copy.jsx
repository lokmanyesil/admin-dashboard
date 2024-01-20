// BaşvuruFormu.jsx
import React, { useState } from "react";
import { useFormik } from "formik";
import {
	Alert,
	Button,
	FormControl,
	FormHelperText,
	Input,
	InputBase,
	InputLabel,
	MenuItem,
	Select,
	Snackbar,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const DealerTransactions = () => {
	const [isFormValid, setIsFormValid] = useState(false);
	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
	const [emptyField, setEmptyField] = useState(null);
	const formik = useFormik({
		initialValues: {
			satisDestek: "",
			sahaSatisSorumlusu: "",
			bayi: "",
			adres: "",
			vergiNo: "",
		},
		onSubmit: (values, { resetForm }) => {
			// Zorunlu alanların boş olup olmadığını kontrol et
			const requiredFields = [
				"satisDestek",
				"sahaSatisSorumlusu",
				"bayi",
				"adres",
				"vergiNo",
			];
			const emptyField = requiredFields.find((field) => !values[field]);

			if (emptyField) {
				setEmptyField(emptyField);
				return;
			}

			console.log("Başvuru Formu Gönderildi:", values);
			// Form gönderildikten sonra localStorage'da işaretleyebilirsiniz
			localStorage.setItem("formSubmitted", "true");
			// Formu sıfırla
			resetForm();
			// Formun geçerliliğini tekrar kontrol et
			formik.validateForm().then((errors) => {
				setIsFormValid(Object.keys(errors).length === 0);
			});
			setIsSnackbarOpen(true);
			setEmptyField(null); // Reset the empty field indicator
		},
	});
	const handleSnackbarClose = () => {
		setIsSnackbarOpen(false);
	};

	return (
		<div className="w-full mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
			<h1 className="text-2xl font-bold mb-6">Yeni Başvuru</h1>

			<form onSubmit={formik.handleSubmit}>
				<div className=" mb-4 flex items-center">
					<div>
						<InputLabel
							id="satisDestekLabel"
							className=" mr-5">
							Satış Destek
						</InputLabel>
					</div>
					<FormControl fullWidth>
						<Select
							labelid="satisDestekLabel"
							id="satisDestek"
							name="satisDestek"
							className="h-9"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.satisDestek}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">Ferdane DALASLAN</MenuItem>
							<MenuItem value="#">Sinem KARAHAN TIĞIN</MenuItem>
							<MenuItem value="#">Nazlı KARAYEL</MenuItem>
							<MenuItem value="#">Ceren KORKMAZ</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className=" mb-4 flex items-center">
					<div className=" mr-5">
						<InputLabel id="sahaSatisSorumlusuLabel">
							Saha Satış Sorumlusu
						</InputLabel>
					</div>
					<FormControl fullWidth>
						<Select
							labelid="sahaSatisSorumlusuLabel"
							id="sahaSatisSorumlusu"
							name="sahaSatisSorumlusu"
							className="h-9"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.sahaSatisSorumlusu}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">Abdullah KARA</MenuItem>
							<MenuItem value="#">Alper Fazıl KONDAK</MenuItem>
							<MenuItem value="#">Furkan ÖNDER</MenuItem>
							<MenuItem value="#">KEMAL ÖZTÜRK</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4 flex items-center">
					<div className=" mr-5">
						<InputLabel id="bayiLabel">Bayi</InputLabel>
					</div>
					<FormControl fullWidth>
						<InputBase
							labelid="bayiLabel"
							id="bayi"
							name="bayi"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.bayi}
							className=" p-3 h-9 border border-gray-400 rounded-md w-full"
						/>
					</FormControl>
				</div>
				<div className="mb-4 flex items-center">
					<div className=" mr-5">
						<InputLabel id="adresLabel">Adres</InputLabel>
					</div>
					<FormControl fullWidth>
						<InputBase
							labelid="adresLabel"
							id="adres"
							name="adres"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.adres}
							className=" p-3 h-9 border border-gray-400 rounded-md w-full"
						/>
					</FormControl>
				</div>
				<div className="mb-4 flex items-center">
					<div className=" mr-5">
						<InputLabel id="vergiNoLabel">Vergi No</InputLabel>
					</div>
					<FormControl fullWidth>
						<InputBase
							labelid="vergiNoLabel"
							id="vergiNo"
							name="vergiNo"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.vergiNo}
							className=" p-3 h-9 border border-gray-400 rounded-md w-full"
						/>
					</FormControl>
				</div>
				<Button
					variant="contained"
					color="primary"
					startIcon={<CheckCircle />}
					onClick={formik.handleSubmit}
					fullWidth
					className="mt-6"
					disabled={isFormValid}>
					Kayıt Et
				</Button>
				{emptyField && (
					<p className="text-red-500 mt-2">
						{emptyField} alanı boş bırakılamaz.
					</p>
				)}
			</form>
			<Snackbar
				open={isSnackbarOpen}
				autoHideDuration={2000} // Adjust as needed
				onClose={handleSnackbarClose}>
				<Alert
					onClose={handleSnackbarClose}
					severity="success">
					Başvurunuz başarı ile alınmıştır.
				</Alert>
			</Snackbar>
		</div>
	);
};

export default DealerTransactions;
