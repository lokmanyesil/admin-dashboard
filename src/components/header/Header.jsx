import React, { useState } from 'react';
import ProfileMenu from "../pages/home/Pages/ProfileMenu";

const Header = (setIsLoggedIn) => {
	return (
		/* Search section and profile section in the header */
		<div className="w-full">
			<div className="flex items-center justify-between h-24 shadow-xl shadow-blue-gray-900/1">
				<div></div>
				<div className="flex items-center space-x-1 mr-5">
					<ProfileMenu setIsLoggedIn={setIsLoggedIn} />
				</div>
			</div>
		</div>
	);
};

export default Header;
