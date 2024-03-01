// RegistrationForm.jsx
import React, { useState } from "react";
import {
	TextField,
	Button,
	Card,
	CardContent,
	Typography,
	Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const response = fetch("http://127.0.0.1:8000/add_user", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user_name: formData.username,
				user_surname: formData.email,
				user_mail: formData.email,
				user_password: formData.password,
			}),
		}).then((response) => {
			if (response.ok) {
				setTimeout(() => {
					navigate("/");
				}, 2000);
			}
			return response.json();
		});

		// Burada kayıt işlemleri yapılabilir
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<Container maxWidth="sm">
				<Card>
					<CardContent>
						<Typography
							variant="h5"
							component="div"
							align="center">
							Kayıt Ol
						</Typography>
						<form onSubmit={handleSubmit}>
							<TextField
								fullWidth
								margin="normal"
								label="Kullanıcı Adı"
								name="username"
								value={formData.username}
								onChange={handleChange}
								required
							/>
							<TextField
								fullWidth
								margin="normal"
								label="E-posta"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
							<TextField
								fullWidth
								margin="normal"
								label="Parola"
								name="password"
								type="password"
								value={formData.password}
								onChange={handleChange}
								required
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								fullWidth
								style={{ marginTop: "16px" }}>
								Kayıt Ol
							</Button>
						</form>
					</CardContent>
				</Card>
			</Container>
		</div>
	);
};

export default SignUp;
