//import * as React from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import NavConstants from "./navConstants";

//function SideBarDrawer(_props: any) {
function SideBarDrawer({ state, setState, toggleDrawer }) {

  const toggleDrawerv = (newOpen: boolean) => () => {
    setState(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawerv(false)}>
      <List>
        {NavConstants.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Reports"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Link className="nav-link active" to="/functions">

              </Link>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer open={state} onClose={toggleDrawerv(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}

export default SideBarDrawer;
