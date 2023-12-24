import ContactsIcon from "@mui/icons-material/Contacts";
import DateRangeIcon from "@mui/icons-material/DateRange";
import InfoIcon from "@mui/icons-material/Info";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import MenuIcon from "@mui/icons-material/Menu";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const listDrawer = [
  {
    icon: <InfoIcon color="primary" />,
    text: "About me",
    url: "/about_me",
  },
  {
    icon: <DateRangeIcon color="primary" />,
    text: "Work experience",
    url: "/experience",
  },
  {
    icon: <SchoolIcon color="primary" />,
    text: "Education",
    url: "/education",
  },
  {
    icon: <PsychologyIcon color="primary" />,
    text: "Skills",
    url: "/skills",
  },
  {
    icon: <ContactsIcon color="primary" />,
    text: "Contact",
    url: "/contact",
  },
  {
    icon: <LaptopMacIcon color="primary" />,
    text: "Projects",
    url: "/projects",
  },
];

type Anchor = "left";

export const TemporaryDrawer = () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        {listDrawer.map((e) => (
          <ListItem key={e.text} disablePadding>
            <ListItemButton onClick={() => navigate(e.url)}>
              <ListItemIcon>{e.icon}</ListItemIcon>
              <ListItemText primary={e.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/*       <Divider />
       */}{" "}
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer("left", true)}
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor={"left"}
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {list()}
      </Drawer>
    </div>
  );
};
