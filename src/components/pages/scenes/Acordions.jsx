import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataTable from './DataTable';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='ml-2 mr-2 mt-5'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Hakedişi Olmayan Bayiler</Typography>
        </AccordionSummary>
        <AccordionDetails className=''>
          <Typography>
            <DataTable />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='ml-2 mr-2 mt-1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Ödemeye Hazır Olan Bayiler</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <DataTable />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='ml-2 mr-2 mt-1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Faturası Gelmeyen Bayiler</Typography>
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
