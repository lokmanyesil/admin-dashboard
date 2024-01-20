import React from "react";

import {
  Card,
  Typography,
  Input,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Settings from "../pages/settings/Settings";
import { pages } from "../../../PagesData.jsx";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate()

  const handleClick = (url) => {
    // Sayfayı yönlendir
    navigate(url);
  };

  return (
    /* Card içinden h-screen kaldırdık */
    <>
    <Card className="w-[calc(100vh-2rem)] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/1">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">
          Yeşil İYS
        </Typography>
      </div>
      <div className="p-2">
        <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Aranacak kelime" />
      </div>
          <List className="flex items-start justify-center gap-2 mt-10">           
              {pages.map((page)=>(
                <ListItem key={page.id} onClick={()=> handleClick(page.url)}>
                  <ListItemPrefix>
                    {page.icon}
                  </ListItemPrefix>
                  {page.name}
                </ListItem>
              ))}
          </List> 

          <hr className="my-2 border-blue-gray-50" />
          <Settings />
    </Card>    
</>
  );
}

export default SideMenu;