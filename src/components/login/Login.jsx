import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);
	const navigate = useNavigate();

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleLogin();
		}
	};

	const handleLogin = async () => {
		setLoading(true);

		try {
			const response = await fetch(
				`http://127.0.0.1:8000/login?user_email=${username}&password=${password}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
				}
			).then((response) => response.json());
			console.log(response);

			if (!response) {
				throw new Error("Kullanıcı adı veya şifre yanlış!");
			}

			setSuccessMessage(true);
			setIsLoggedIn(true);

			setTimeout(() => {
				setSuccessMessage(false);
				setLoading(false);
				navigate("/");
			}, 2000);
		} catch (error) {
			setLoading(false);
			alert(error.message);
			setUsername("");
			setPassword("");
		}
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-96">
				<h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
				{!successMessage ? (
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleLogin();
						}}>
						<TextField
							label="Kullanıcı Adı"
							variant="outlined"
							fullWidth
							margin="normal"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
						<TextField
							label="Şifre"
							type="password"
							variant="outlined"
							fullWidth
							margin="normal"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onKeyDown={handleKeyDown}
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
					</form>
				) : (
					<p className="text-green-500">Başarıyla giriş yaptınız!</p>
				)}
				<div className="mt-5">
					Üye Olmak İçin{" "}
					<Link
						to="/SignUp"
						className="font-bold text-blue-800">
						Üye Ol
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
