// BaşvuruFormu.jsx
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
	Alert,
	Button,
	FormControl,
	InputBase,
	InputLabel,
	Snackbar,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import PostProcesses from "../../../../services/PostProcesses";

const NewSale = () => {
	const [isFormValid, setIsFormValid] = useState(false);
	const [emptyField, setEmptyField] = useState(null);
	const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
	const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
	const formik = useFormik({
		initialValues: {
			musteriAdi: "",
			musteriSoyadi: "",
			urunAdi: "",
			miktari: "",
			fiyati: "",
		},
		onSubmit: (values, { resetForm }) => {
			console.log("Başvuru Formu Gönderildi:", values);
			// Form gönderildikten sonra localStorage'da işaretleyebilirsiniz
			localStorage.setItem("formSubmitted", "true");
			// Formu sıfırla
			resetForm();
			// Formun geçerliliğini tekrar kontrol et
			formik.validateForm().then((errors) => {
				setIsFormValid(Object.keys(errors).length === 0);
			});
			setEmptyField(null); // Reset the empty field indicator
		},
	});
	//snacbar fonksiyon olarak yazıldı
	const handleSnackbarClose = (type) => {
		if (type === "success") {
			setSuccessSnackbarOpen(false);
		} else if (type === "error") {
			setErrorSnackbarOpen(false);
		}
	};

	const handleSubmit = (e) => {
		// Zorunlu alanların boş olup olmadığını kontrol et
		const requiredFields = [
			"musteriAdi",
			"musteriSoyadi",
			"urunAdi",
			"miktari",
			"fiyati",
		];
		const emptyField = requiredFields.find((field) => !formik.values[field]);
		if (emptyField) {
			setEmptyField(emptyField);
			return;
		}
		e.preventDefault();
		const process = new PostProcesses();
		const formData = {
			customer_name: formik.values.musteriAdi,
			customer_surname: formik.values.musteriSoyadi,
			process_name: formik.values.urunAdi,
			process_quantity: parseInt(formik.values.miktari), // Miktarı tam sayıya dönüştür
			process_price: parseFloat(formik.values.fiyati), // Fiyatı ondalıklı sayıya dönüştür
		};
		process
			.addProcess(formData)
			.then((response) => {
				if (!response.id) {
					setErrorSnackbarOpen(true); //snackbar usestate dönüştürlmüş hali
				} else {
					setSuccessSnackbarOpen(true); //snackbar usestate dönüştürlmüş hali
				}
			})
			.catch((error) => {
				console.error("İstek hatası:", error);
				setErrorSnackbarOpen(true); //snackbar usestate dönüştürlmüş hali
			});
	};

	return (
		<div className="w-full mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
			<h1 className="text-2xl font-bold mb-6">Yeni Başvuru</h1>
			<form onSubmit={formik.handleSubmit}>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="musteriAdiLabel">Müşteri Adı</InputLabel>
						<InputBase
							labelid="musteriAdiLabel"
							id="musteriAdi"
							name="musteriAdi"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.musteriAdi}
							className=" p-3 border border-gray-400 rounded-md w-full"
						/>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="musteriSoyadi">Müşteri Soyadı</InputLabel>
						<InputBase
							labelid="musteriSoyadi"
							id="musteriSoyadi"
							name="musteriSoyadi"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.musteriSoyadi}
							className=" p-3 border border-gray-400 rounded-md w-full"
						/>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="urunAdi">Ürün Adı</InputLabel>
						<InputBase
							labelid="urunAdi"
							id="urunAdi"
							name="urunAdi"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.urunAdi}
							className=" p-3 border border-gray-400 rounded-md w-full"
						/>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="miktari">Miktarı</InputLabel>
						<InputBase
							labelid="miktari"
							id="miktari"
							name="miktari"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.miktari}
							className=" p-3 border border-gray-400 rounded-md w-full"
						/>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="fiyati">Fiyatı</InputLabel>
						<InputBase
							labelid="fiyati"
							id="fiyati"
							name="fiyati"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.fiyati}
							className=" p-3 border border-gray-400 rounded-md w-full"
						/>
					</FormControl>
				</div>

				<Button
					variant="contained"
					color="primary"
					startIcon={<CheckCircle />}
					onClick={handleSubmit}
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
				open={successSnackbarOpen}
				autoHideDuration={2000} // snackbarın ne kadar kalacağını ayarlar
				onClose={() => handleSnackbarClose("success")}>
				<Alert
					onClose={() => handleSnackbarClose("success")}
					severity="success">
					Tebrikler Bir Satış Gerçekleştirdiniz
				</Alert>
			</Snackbar>
			<Snackbar
				open={errorSnackbarOpen}
				autoHideDuration={2000} // snackbarın ne kadar kalacağını ayarlar
				onClose={() => handleSnackbarClose("error")}>
				<Alert
					onClose={() => handleSnackbarClose("error")}
					severity="error">
					Bir hata oluştu. Daha fazla bilgi için konsolu kontrol edin.
				</Alert>
			</Snackbar>
		</div>
	);
};

export default NewSale;
