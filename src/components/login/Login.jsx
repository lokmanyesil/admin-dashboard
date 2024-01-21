import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	const handleLogin = () => {
		setLoading(true);

		// Simüle edilen API isteği
		setTimeout(() => {
			if (username.trim() === "admin" && password.trim() === "1234") {
				setSuccessMessage(true);
				setIsLoggedIn(true);

				// Başarı mesajını gösterdikten sonra 2 saniye sonra tekrar loading durumunu belirle ve ana sayfaya yönlendir
				setTimeout(() => {
					setSuccessMessage(false);
					setLoading(false); // set loading to false
					navigate("/");
				}, 2000);
			} else {
				setLoading(false);
				alert("Kullanıcı adı veya şifre yanlış!");
				setUsername("");
				setPassword("");
			}
		}, 2000);
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-96">
				<h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
				{!successMessage ? (
					<>
						<TextField
							label="Kullanıcı Adı"
							variant="outlined"
							fullWidth
							margin="normal"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<TextField
							label="Şifre"
							type="password"
							variant="outlined"
							fullWidth
							margin="normal"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button
							variant="contained"
							color="primary"
							fullWidth
							onClick={handleLogin}
							disabled={loading}>
							{loading ? (
								<CircularProgress
									size={24}
									color="inherit"
								/>
							) : (
								"Giriş Yap"
							)}
						</Button>
					</>
				) : (
					<p className="text-green-500">Başarıyla giriş yaptınız!</p>
				)}
			</div>
		</div>
	);
};

export default Login;
