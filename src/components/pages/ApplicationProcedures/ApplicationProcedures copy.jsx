//Başvuru işlemleri
import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { pages } from "./ApplicationProceduresData";
import { Link } from "react-router-dom";
 
function ApplicationProcedures({isOpenComponents, onOpenComponents}) {
 
  const handleOpen = () => {
    onOpenComponents();
  };
  return (
    <List>
        <Accordion
          open={isOpenComponents}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${isOpenComponents ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={isOpenComponents}>
            <AccordionHeader onClick={handleOpen} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal" variant="small">
                Başvuru İşlemleri
              </Typography>
            </AccordionHeader>
          </ListItem>
          {pages.map((page)=>(                            
          <AccordionBody className="py-2" key={page.id}>          
            <Link to={page?.url} className="text-xm flex items-center">
            <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
            {page?.name}
            </Link>
          </AccordionBody>
            ))}
        </Accordion>
      </List>     
  );
}
export default ApplicationProcedures;



              /*   <a href={page.url} key={page.id}>
                  <Button fullWidth variant="text" size="md" className="ml-2 gap-1">
                    <HomeIcon className="h-5 w-5" /> 
                      {page.name}
                  </Button> 
                  </a> */