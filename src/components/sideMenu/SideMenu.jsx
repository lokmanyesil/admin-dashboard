import React, { useState } from "react";

import {
	Card,
	Typography,
	Input,
	List,
	ListItem,
	ListItemPrefix,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { pages } from "../../../PagesData.jsx";
import { useNavigate } from "react-router-dom";
import {
	HiOutlineChevronDoubleLeft,
	HiOutlineChevronDoubleRight,
} from "react-icons/hi";

function SideMenu() {
	const navigate = useNavigate();
	const [expanded, setExpanded] = useState(true);
	const [cardWidth, setCardWidth] = useState(expanded ? "lg:w-80" : "lg:w-28"); // Initial width based on 'expanded' state

	const handleClick = (url) => {
		// Sayfayı yönlendir
		navigate(url);
	};

	const handleToggleExpand = () => {
		setExpanded((prev) => !prev);
		setCardWidth((prevWidth) =>
			prevWidth === "lg:w-80" ? "lg:w-28" : "lg:w-80"
		);
	};

	return (
		<Card
			className={` overflow-hidden p-4 shadow-xl shadow-blue-gray-900/1 ${cardWidth}`}>
			<div className="mb-2 flex items-center p-4">
				<img
					src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
					alt="brand"
					className={` overflow-hidden transition-all ${
						expanded ? "w-10" : "w-0"
					}`}
				/>
				<Typography
					variant="h5"
					color="blue-gray"
					className={` text-lg overflow-hidden transition-all ${
						expanded ? " w-32 pl-2" : "w-0"
					}`}>
					Yeşil İYS
				</Typography>
				<button
					onClick={handleToggleExpand}
					className={`p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 overflow-hidden transition-all ${
						expanded ? "ml-10" : "ml-0"
					}`}>
					{expanded ? (
						<HiOutlineChevronDoubleLeft />
					) : (
						<HiOutlineChevronDoubleRight />
					)}
				</button>
			</div>
			<div
				className={`p-2 mt-5 rounded-lg bg-gray-50 hover:bg-gray-100 overflow-hidden transition-all ${
					expanded ? "ml-0" : "0 opacity-0"
				}`}>
				<Input
					icon={<MagnifyingGlassIcon className="h-5 w-5" />}
					label="Aranacak kelime"
				/>
			</div>
			{/* Section where names are called with Side Menu Link and map function */}
			<List className="flex items-start justify-center flex-col lg:flex-col gap-2 mt-10 lg:mt-0">
				{pages.map((page) => (
					<ListItem
						key={page.id}
						onClick={() => handleClick(page.url)}
						className={`overflow-hidden transition-all ${
							expanded ? "h-10" : "h-10"
						}`}>
						<ListItemPrefix>
							<span>{page.icon}</span>
						</ListItemPrefix>
						<span
							className={`overflow-hidden transition-all ${
								expanded ? "w-13" : "w-0"
							}`}>
							{page.name}
						</span>
					</ListItem>
				))}
			</List>
		</Card>
	);
}

export default SideMenu;
