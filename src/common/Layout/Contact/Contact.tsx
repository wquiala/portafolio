import React from "react";
import { Grid, Avatar, Stack, Typography, Paper, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { GitHub } from "@mui/icons-material";
import { Link as LinkR } from "react-router-dom";
const img = "1673184574720.jpeg";

interface IContactProps {
  children?: React.ReactNode;
}

export const Contact: React.FC<IContactProps> = () => {
  return (
    <Grid container width={250} height={"55vh"} direction={"row"} ml={2} mr={4}>
      <Paper
        elevation={24}
        sx={{
          background: "transparent",
          borderRadius: 6,
          padding: 1,
          color: "wheat",
        }}
      >
        <Grid item marginBottom={"16px"}>
          <Avatar
            src={img}
            sx={{ width: "100%", height: "100%", boxShadow: "none" }}
          />
        </Grid>
        <Grid container direction={"column"} gap={1}>
          <Grid item>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <LocationOnIcon
                color="primary"
                sx={{ width: 35, height: 35 }}
                titleAccess="Location"
              />
              <Typography>Spain</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <CallIcon
                sx={{ width: 35, height: 35 }}
                titleAccess="Location"
                color="primary"
              />
              <Typography>613 27 67 21</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <AlternateEmailIcon
                color="primary"
                sx={{ width: 35, height: 35 }}
                titleAccess="Location"
              />
              <Typography>wilfredoquiala@gmail.com</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <TelegramIcon
                color="primary"
                sx={{ width: 35, height: 35 }}
                titleAccess="Location"
              />
              <Typography>@iWilfredo</Typography>
            </Stack>
          </Grid>

          <Grid item>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <LinkedInIcon
                color="primary"
                sx={{ width: 35, height: 35 }}
                titleAccess="Location"
              />
              <Typography>
                <Link
                  component={LinkR}
                  to={"http://www.linkedin.com/in/wilfredo-quiala-fonseca"}
                  underline="none"
                  color={"wheat"}
                  target="_blank"
                >
                  www.linkedin.com/in/wilfredo-quiala-fonseca
                </Link>
              </Typography>
            </Stack>
          </Grid>

          <Grid item>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <GitHub
                color="primary"
                sx={{ width: 35, height: 35 }}
                titleAccess="Location"
              />
              <Link
                component={LinkR}
                to={"https://github.com/wquiala"}
                underline="none"
                color={"wheat"}
                target="_blank"
              >
                <Typography>https://github.com/wquiala</Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
