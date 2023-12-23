import {
  AppBar,
  Box,
  Link as LinkM,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import * as React from "react";
import { Link } from "react-router-dom";
import { TemporaryDrawer } from "../Drawer";

interface INavBarProps {
  children?: React.ReactNode;
}

export const NavBar: React.FC<INavBarProps> = () => {
  return (
    <Box flexGrow={1}>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar variant="dense">
          <TemporaryDrawer />

          <Typography
            variant="h6"
            color="inherit"
            component="div"
            flexGrow={1}
            sx={{
              display: {
                xs: "none",
                sm: "inherit",
              },
            }}
          ></Typography>
          <Stack
            direction={"row"}
            sx={{
              display: {
                sm: "inherit",
                xs: "none",
              },
            }}
          >
            <LinkM
              underline="hover"
              color={"white"}
              component={Link}
              to={"/about_me"}
            >
              <Typography padding={1} fontSize={20}>
                About me
              </Typography>
            </LinkM>

            <LinkM
              component={Link}
              underline="hover"
              color={"white"}
              to={"/experience"}
            >
              <Typography padding={1} fontSize={20}>
                Experience
              </Typography>
            </LinkM>
            <LinkM
              component={Link}
              to={"/skills"}
              color={"white"}
              underline="hover"
            >
              <Typography padding={1} fontSize={20}>
                Skills
              </Typography>
            </LinkM>
            <LinkM
              component={Link}
              color={"white"}
              underline="hover"
              to={"/education"}
            >
              <Typography padding={1} fontSize={20}>
                Education
              </Typography>
            </LinkM>
            <LinkM
              component={Link}
              color={"white"}
              underline="hover"
              to={"/projects"}
            >
              <Typography padding={1} fontSize={20}>
                Projects
              </Typography>
            </LinkM>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
