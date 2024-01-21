import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DailyTaksData from './DailyTaksData';

export default function DailyTasks() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
		<div className="md:mx-2">
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
				className="mt-5 sm:mt-1">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3bh-content"
					id="panel3bh-header">
					<Typography className="md:w-1/3 flex-shrink-0">
						Günlük Gelen İşlemler
					</Typography>
				</AccordionSummary>
				<AccordionDetails className="">
					<Typography>
						<DailyTaksData />
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
