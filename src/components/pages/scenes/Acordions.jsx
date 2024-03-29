import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DataTable from "./DataTable";

export default function ControlledAccordions() {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className="md:grid md:grid-cols-1 md:gap-4 md:mx-2 sm:flex sm:flex-col">
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
				className="mt-1 md:ml-2 md:mr-2">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3bh-content"
					id="panel3bh-header">
					<Typography>Hakedişi Olmayan Bayiler</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<DataTable />
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
				className="mt-1 md:ml-2 md:mr-2">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4bh-content"
					id="panel4bh-header">
					<Typography>Ödemeye Hazır Olan Bayiler</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<DataTable />
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}
				className="mt-1 md:ml-2 md:mr-2">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel5bh-content"
					id="panel5bh-header">
					<Typography>Faturası Gelmeyen Bayiler</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<DataTable />
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
