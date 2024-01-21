import React from "react";
import { Link } from "react-router-dom";
import { Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle, Power } from "@mui/icons-material";
 
function Settings() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
		<Card className="mt-2 sm:mt-0">
			<List>
				<ListItem disablePadding>
					<ListItemButton
						component={Link}
						to="/profileMenu">
						<ListItemIcon>
							<AccountCircle />
						</ListItemIcon>
						<ListItemText primary="Hesabım" />
					</ListItemButton>
				</ListItem>
			</List>
		</Card>
	);
}

export default Settings;