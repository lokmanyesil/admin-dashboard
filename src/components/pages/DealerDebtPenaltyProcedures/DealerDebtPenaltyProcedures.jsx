// BaşvuruFormu.jsx
import React, { useState } from "react";
import { useFormik } from "formik";
import {
	Alert,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Snackbar,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const DealerDebtPenaltyProcedures = () => {
	const [isFormValid, setIsFormValid] = useState(false);
	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
	const [emptyField, setEmptyField] = useState(null);
	const formik = useFormik({
		initialValues: {
			kesintiTuru: "",
			hangiAy: "",
			hangiYil: "",
			gecerliOlduguDonem: "",
			tahsisEdildiMi: "",
			faturaEdildiMi: "",
			tahsisTuru: "",
			bayiAdi: "",
			vadesiGelmeyenleriGoster: "",
		},
		onSubmit: (values, { resetForm }) => {
			// Zorunlu alanların boş olup olmadığını kontrol et
			const requiredFields = [
				"kesintiTuru",
				"hangiAy",
				"hangiYil",
				"gecerliOlduguDonem",
				"tahsisEdildiMi",
				"faturaEdildiMi",
				"tahsisTuru",
				"bayiAdi",
				"vadesiGelmeyenleriGoster",
			];
			const emptyField = requiredFields.find((field) => !values[field]);

			if (emptyField) {
				setEmptyField(emptyField);
				return;
			}

			console.log("Kesintiler Listelendi:", values);
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
			<h1 className="text-2xl font-bold mb-6">
				BAYİLERİN BORÇ CEZA KESİNTİLERİ LİSTELEME
			</h1>

			<form onSubmit={formik.handleSubmit}>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="kesintiTuruLabel">Kesinti Türü</InputLabel>
						<Select
							labelid="kesintiTuruLabel"
							id="kesintiTuru"
							name="kesintiTuru"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.kesintiTuru}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">ARŞİV EKSİK EVRAK CEZASI</MenuItem>
							<MenuItem value="#">GÖNDERİLMEMİŞ EVRAK MOBİL</MenuItem>
							<MenuItem value="#">GÖNDERİLMEMİŞ EVRAK CİHAZ</MenuItem>
							<MenuItem value="#">GÖNDERİLMEMİŞ EVRAK DSL</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="hangiAyLabel">Hangi Ay</InputLabel>
						<Select
							labelid="hangiAyLabel"
							id="hangiAy"
							name="hangiAy"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.hangiAy}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">OCAK</MenuItem>
							<MenuItem value="#">ŞUBAT</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="hangiYilLabel">Hangi Yıl</InputLabel>
						<Select
							labelid="hangiYilLabel"
							id="hangiYil"
							name="hangiYil"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.hangiYil}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">2024</MenuItem>
							<MenuItem value="#">2023</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="gecerliOlduguDonemLabel">Geçerli Olduğu Dönem</InputLabel>
						<Select
							labelid="gecerliOlduguDonemLabel"
							id="gecerliOlduguDonem"
							name="gecerliOlduguDonem"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.gecerliOlduguDonem}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">OCAK</MenuItem>
							<MenuItem value="#">ŞUBAT</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="tahsisEdildiMiLabel">Tahsis Edildi Mi?</InputLabel>
						<Select
							labelid="tahsisEdildiMiLabel"
							id="tahsisEdildiMi"
							name="tahsisEdildiMi"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.tahsisEdildiMi}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">EVET</MenuItem>
							<MenuItem value="#">HAYIR</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="faturaEdildiMiLabel">Fatura Edildi Mi?</InputLabel>
						<Select
							labelid="faturaEdildiMiLabel"
							id="faturaEdildiMi"
							name="faturaEdildiMi"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.faturaEdildiMi}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">EVET</MenuItem>
							<MenuItem value="#">HAYIR</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="tahsisTuruLabel">Tahsis Türü</InputLabel>
						<Select
							labelid="tahsisTuruLabel"
							id="tahsisTuru"
							name="tahsisTuru"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.tahsisTuru}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">NAKİT</MenuItem>
							<MenuItem value="#">BANKA</MenuItem>
							<MenuItem value="#">HAKEDİŞ</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="bayiAdiLabel">Bayi Adı</InputLabel>
						<Select
							labelid="bayiAdiLabel"
							id="bayiAdi"
							name="bayiAdi"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.bayiAdi}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">A BAYİ</MenuItem>
							<MenuItem value="#">B BAYİ</MenuItem>
							<MenuItem value="#">C BAYİ</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="vadesiGelmeyenleriGosterLabel">
							Vadesi Gelmeyenleri Göster
						</InputLabel>
						<Select
							labelid="vadesiGelmeyenleriGosterLabel"
							id="vadesiGelmeyenleriGoster"
							name="vadesiGelmeyenleriGoster"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.vadesiGelmeyenleriGoster}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">EVET</MenuItem>
							<MenuItem value="#">HAYIR</MenuItem>
              </Select>
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
					Kesintileri Listele
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

export default DealerDebtPenaltyProcedures;
