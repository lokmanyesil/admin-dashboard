//Başvuru işlemleri
import { HomeIcon } from "@heroicons/react/24/solid";
import { Card, List, ListItem, ListItemPrefix} from "@material-tailwind/react";
import React from "react";
import { pages } from "./HomeData";
function Home() {
  return (
      <div>
      <Card>
      <List className="flex items-start justify-center gap-2 mt-10">
        {pages.map((page)=>(
                <ListItem key={page.id} onClick={()=> handleClick(page.url)}>
                  <ListItemPrefix>
                    <HomeIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  {page.name}
                </ListItem>
              ))}
          </List>
      </Card>
      </div>
);
}
export default Home;