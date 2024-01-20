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

const Application = () => {
	const [isFormValid, setIsFormValid] = useState(false);
	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
	const [emptyField, setEmptyField] = useState(null);
	const formik = useFormik({
		initialValues: {
			satisDestek: "",
			sahaSatisSorumlusu: "",
			bayi: "",
			verilenHizmet: "",
			kampanya: "",
			islemDurumu: "",
			islemTarihi: "",
			hizmetNumarasi: "",
			not: "",
			musteri: "",
		},
		onSubmit: (values, { resetForm }) => {
			// Zorunlu alanların boş olup olmadığını kontrol et
			const requiredFields = [
				"satisDestek",
				"sahaSatisSorumlusu",
				"bayi",
				"verilenHizmet",
				"kampanya",
				"islemDurumu",
				"islemTarihi",
				"hizmetNumarasi",
				"not",
				"musteri",
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
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="satisDestekLabel">Satış Destek</InputLabel>
						<Select
							labelid="satisDestekLabel"
							id="satisDestek"
							name="satisDestek"
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
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="sahaSatisSorumlusuLabel">
							Saha Satış Sorumlusu
						</InputLabel>
						<Select
							labelid="sahaSatisSorumlusuLabel"
							id="sahaSatisSorumlusu"
							name="sahaSatisSorumlusu"
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
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="bayiLabel">Bayi</InputLabel>
						<Select
							labelid="bayiLabel"
							id="bayi"
							name="bayi"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.bayi}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">A Bayi</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="verilenHizmetLabel">Verilen Hizmet</InputLabel>
						<Select
							labelid="verilenHizmetLabel"
							id="verilenHizmet"
							name="verilenHizmet"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.verilenHizmet}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">Dsl Modemli</MenuItem>
							<MenuItem value="#">Dsl Modemsiz</MenuItem>
							<MenuItem value="#">PSTN</MenuItem>
							<MenuItem value="#">Tivibu</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="kampanyaLabel">Kampanya</InputLabel>
						<Select
							labelid="kampanyaLabel"
							id="kampanya"
							name="kampanya"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.kampanya}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">A Kampanya</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="islemDurumuLabel">İşlem durumu</InputLabel>
						<Select
							labelid="islemDurumuLabel"
							id="islemDurumu"
							name="islemDurumu"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.islemDurumu}>
							<MenuItem value="">Seçiniz</MenuItem>
							<MenuItem value="#">Yeni Kayıt</MenuItem>
							<MenuItem value="#">İptal İşlemi</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<FormHelperText id="islemTarihiLabel">İşlem Tarihi</FormHelperText>
						<Input
							labelid="islemTarihiLabel"
							id="islemTarihi"
							name="islemTarihi"
							type="date"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.islemTarihi}
							className=" p-3 border border-gray-400 rounded-md w-full"
						/>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="hizmetNumarasiLabel">Hizmet Numarası</InputLabel>
						<InputBase
							labelid="hizmetNumarasiLabel"
							id="hizmetNumarasi"
							name="hizmetNumarasi"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.hizmetNumarasi}
							className=" p-3 border border-gray-400 rounded-md w-full"
						/>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="notLabel">Not</InputLabel>
						<InputBase
							labelid="notLabel"
							id="not"
							name="not"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.not}
							className=" p-3 border border-gray-400 rounded-md w-full h-[100px]"
							sx={{ resize: "both", overflow: "auto" }}
						/>
					</FormControl>
				</div>
				<div className="mb-4">
					<FormControl fullWidth>
						<InputLabel id="musteriLabel">Müşteri Adı</InputLabel>
						<InputBase
							labelid="musteriLabel"
							id="musteri"
							name="musteri"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.musteri}
							className=" p-3 border border-gray-400 rounded-md w-full"
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

export default Application;
