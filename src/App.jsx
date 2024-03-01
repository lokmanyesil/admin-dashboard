import React, { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import SideMenu from "./components/sideMenu/SideMenu";
import Header from "./components/header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/pages/home/Pages/HomePage";
import DealerDebtPenaltyProcedures from "./components/pages/DealerDebtPenaltyProcedures/DealerDebtPenaltyProcedures";
import DealerTransactions from "./components/pages/DealerTransactions/DealerTransactions";
import NewSale from "./components/pages/NewSale/NewSale";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/Login/Login";

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		// Kullanıcının oturum durumunu kontrol etmek için kullanılacak useEffect
		// Gerçek kimlik doğrulama mekanizmasını burada kullanarak isLoggedIn durumunu ayarlayın
		// Örneğin, bir JWT token kontrolü gibi
		// Kullanıcı giriş yapana kadar isLoggedIn false olarak kalacak
	}, []);
	return (
		<>
			<div className="flex flex-grow flex-row">
				{isLoggedIn && <SideMenu />}
				<div className="flex flex-grow flex-col">
					{isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} />}
					<Routes>
						{isLoggedIn ? (
							<>
								{/* Home */}
								<Route
									path="/"
									element={<HomePage />}
								/>
								<Route
									path="/NewSale"
									element={<NewSale />}
								/>
								<Route
									path="/dealerDebtPenaltyProcedures"
									element={<DealerDebtPenaltyProcedures />}
								/>
								<Route
									path="/dealerTransactions"
									element={<DealerTransactions />}
								/>
							</>
						) : (
							<>
								<Route
									path="/login"
									element={<Login setIsLoggedIn={setIsLoggedIn} />}
								/>
								<Route
									path="/signup"
									element={<SignUp />}
								/>
								<Route
									path="/"
									element={<Navigate to="/login" />}
								/>
							</>
						)}
					</Routes>
				</div>
			</div>
			{isLoggedIn && (
				<footer>
					<Footer />
				</footer>
			)}
		</>
	);
};

export default App;
