import React from "react";
import Footer from "./components/footer/Footer";
import SideMenu from "./components/sideMenu/SideMenu";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home/Pages/HomePage";
import DealerDebtPenaltyProcedures from "./components/pages/DealerDebtPenaltyProcedures/DealerDebtPenaltyProcedures";
import DealerTransactions from "./components/pages/DealerTransactions/DealerTransactions";
import Application from "./components/pages/ApplicationProcedures/Application";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/Login/Login";

const App = () => {
	return (
		<>
			<div className="flex flex-grow flex-row">
				<SideMenu />
				<div className="flex flex-grow flex-col">
					<Header />
					<Routes>
						{/* Home */}
						<Route
							path="/"
							element={<HomePage />}
						/>
						<Route
							path="/application"
							element={<Application />}
						/>
						<Route
							path="/dealerDebtPenaltyProcedures"
							element={<DealerDebtPenaltyProcedures />}
						/>
						<Route
							path="/dealerTransactions"
							element={<DealerTransactions />}
						/>
						<Route
							path="/login"
							element={<Login />}
						/>
						<Route
							path="/signUp"
							element={<SignUp />}
						/>
					</Routes>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default App;
