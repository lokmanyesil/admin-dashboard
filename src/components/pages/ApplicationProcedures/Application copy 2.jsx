// BaşvuruFormu.jsx
import React from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const Application = () => {
	const formik = useFormik({
		initialValues: {
			satisDestek: "",
			sahaSatisSorumlusu: "",
			bayi: "",
			verilenHizmet: "",
			kampanya: "",
			dosyaDurumu: "",
			kayıtTarihi: "",
			hizmetNumarası: "",
			not: "",
			musteri: "",
		},
		onSubmit: (values) => {
			console.log("Başvuru Formu Gönderildi:", values);
		},
	});

	return (
		<div className="w-full mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
			<h1 className="text-2xl font-bold mb-6">Yeni Başvuru</h1>

			<form onSubmit={formik.handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="satisDestek"
						className="block text-sm font-medium text-gray-700">
						Satış Destek
					</label>
					<select
						id="satisDestek"
						name="satisDestek"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.satisDestek}
						className="mt-1 p-2 border border-gray-300 rounded-md w-full">
						<option value="">Seçiniz</option>
						<option value="Ferdane DALASLAN">Ferdane DALASLAN</option>
						<option value="SİNEM KARAHAN TIĞIN">Sinem KARAHAN TIĞIN</option>
						<option value="NAZLI KARAYEL">Nazlı KARAYEL</option>
						<option value="CEREN KORKMAZ">Ceren KORKMAZ</option>
					</select>
				</div>
				{/* Saha Satış Sorumlusu */}
				<div className="mb-4">
					<label
						htmlFor="sahaSatisSorumlusu"
						className="block text-sm font-medium text-gray-700">
						Saha Satış Sorumlusu
					</label>
					<select
						id="sahaSatisSorumlusu"
						name="sahaSatisSorumlusu"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.sahaSatisSorumlusu}
						className="mt-1 p-2 border border-gray-300 rounded-md w-full">
						<option value="">Seçiniz</option>
						<option value="Abdullah KARA">Abdullah KARA</option>
						<option value="Alper Fazıl KONDAK">Alper Fazıl KONDAK</option>
						<option value="Furkan ÖNDER">Furkan ÖNDER</option>
						<option value="KEMAL ÖZTÜRK">KEMAL ÖZTÜRK</option>
					</select>
				</div>

				{/* Bayi */}
				<div className="mb-4">
					<label
						htmlFor="bayi"
						className="block text-sm font-medium text-gray-700">
						Bayi
					</label>
					<select
						id="bayi"
						name="bayi"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.bayi}
						className="mt-1 p-2 border border-gray-300 rounded-md w-full">
						<option value="">Seçiniz</option>
						{/* Bayi listesi buraya eklenecek */}
					</select>
				</div>

				{/* Verilen Hizmet */}
				<div className="mb-4">
					<label
						htmlFor="verilenHizmet"
						className="block text-sm font-medium text-gray-700">
						Verilen Hizmet
					</label>
					<select
						id="verilenHizmet"
						name="verilenHizmet"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.verilenHizmet}
						className="mt-1 p-2 border border-gray-300 rounded-md w-full">
						<option value="">Seçiniz</option>
						<option value="Dsl Modemli">Dsl Modemli</option>
						<option value="Dsl Modemsiz">Dsl Modemsiz</option>
						<option value="Tivibu">Tivibu</option>
					</select>
				</div>

				{/* Kampanya */}
				<div className="mb-4">
					<label
						htmlFor="kampanya"
						className="block text-sm font-medium text-gray-700">
						Kampanya
					</label>
					<select
						id="kampanya"
						name="kampanya"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.kampanya}
						className="mt-1 p-2 border border-gray-300 rounded-md w-full">
						<option value="">Seçiniz</option>
						{/* Kampanya listesi buraya eklenecek */}
					</select>
				</div>

				{/* Dosya Durumu */}
				<div className="mb-4">
					<label
						htmlFor="dosyaDurumu"
						className="block text-sm font-medium text-gray-700">
						Dosya Durumu
					</label>
					<select
						id="dosyaDurumu"
						name="dosyaDurumu"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.dosyaDurumu}
						className="mt-1 p-2 border border-gray-300 rounded-md w-full">
						<option value="">Seçiniz</option>
						<option value="Yeni Kayıt">Yeni Kayıt</option>
						<option value="Onaylandı">Onaylandı</option>
						<option value="Beklemede">Beklemede</option>
						<option value="İptal Edildi">İptal Edildi</option>
					</select>
				</div>

				{/* Kayıt Tarihi */}
				<div className="mb-4">
					<label
						htmlFor="kayıtTarihi"
						className="block text-sm font-medium text-gray-700">
						Kayıt Tarihi
					</label>
					<input
						id="kayıtTarihi"
						name="kayıtTarihi"
						type="date"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.kayıtTarihi}
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				{/* Hizmet Numarası */}
				<div className="mb-4">
					<label
						htmlFor="hizmetNumarası"
						className="block text-sm font-medium text-gray-700">
						Hizmet Numarası
					</label>
					<input
						id="hizmetNumarası"
						name="hizmetNumarası"
						type="text"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.hizmetNumarası}
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				{/* Not */}
				<div className="mb-4">
					<label
						htmlFor="not"
						className="block text-sm font-medium text-gray-700">
						Not
					</label>
					<textarea
						id="not"
						name="not"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.not}
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				{/* musteri */}
				<div className="mb-4">
					<label
						htmlFor="musteri"
						className="block text-sm font-medium text-gray-700">
						musteri
					</label>
					<input
						id="musteri"
						name="musteri"
						type="text"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.musteri}
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				{/* Başvuru Evrağı Alt Bölümü */}
				<p className="text-red-700 font-bold mt-6 text-xs">
					BAŞVURU EVRAĞININ ALT BÖLÜMÜNE MÜŞTERİ TARAFINDAN "BİR NÜSHA ELDEN
					TESLİM ALDIM" YAZILIP ALTINA İMZA ALMAYI UNUTMAYINIZ.
				</p>

				{/* Kayıt Et butonu */}
				<div className="mt-6">
					<Button
						variant="contained"
						color="primary"
						startIcon={<CheckCircle />}
						onClick={formik.handleSubmit}>
						Kayıt Et
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Application;
