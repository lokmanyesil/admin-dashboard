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

const SignUp = () => {
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
		console.log("Form submitted with data:", formData);
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
