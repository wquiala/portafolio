import { Box, Grid, Typography } from "@mui/material";

import React from "react";
import { Contact, NavBar, Tecnologies } from ".";
import { Header } from "./Header";

interface Props {
  children?: React.ReactNode;
  title: string;
}

const dividerText = "<>";

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <Box
      sx={{
        color: "#ECF3F9",
        background: "rgb(1, 4, 49, 0.9)",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <NavBar />
      <Header />

      <Grid container sx={{ padding: "30px" }} minHeight={"70vh"}>
        <Grid
          item
          sx={{
            minWidth: "170px",
            fontSize: 25,
            color: "#848D97",
            fontWeight: "bold",
            display: { xs: "none", md: "initial" },
          }}
        >
          {title}
        </Grid>
        <Grid
          container
          mr={2}
          ml={2}
          width={"10px"}
          maxHeight={"60vh"}
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{ display: { xs: "none", sm: "none", md: "inherit" } }}
        >
          <Grid
            item
            sx={{
              background: "linear-gradient(transparent, #7C72FF 30%)",
              width: 6,
              height: "30vh",
              borderRadius: 6,
            }}
          ></Grid>
          <Grid item>
            <Typography sx={{ color: "#7C72FF", fontSize: 15 }}>
              {dividerText}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              background: "linear-gradient(#7C72FF, #2DA44E 80%, #3FB950)",
              borderRadius: 6,
              width: 6,
              height: "25vh",
            }}
          ></Grid>
        </Grid>
        <Grid item flexGrow={1} width={"50%"}>
          <Typography
            textAlign={"center"}
            sx={{
              color: "#848D97",
              fontWeight: "bold",
              fontSize: 25,
              display: { md: "none" },
            }}
          >
            {title}
          </Typography>
          {children}
        </Grid>
        <Grid item sx={{ display: { xs: "none", sm: "none", xl: "initial" } }}>
          <Contact />
        </Grid>
      </Grid>
      <Grid
        container
        direction={"row"}
        gap={2}
        justifyContent={"center"}
        mt={8}
      >
        <Grid
          item
          width={"90%"}
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        >
          <Tecnologies />
        </Grid>
        {/*  <Grid item width={250}>
          <Card
            sx={{
              maxWidth: 345,
              height: 100,
              background: "transparent",
              border: "1px solid rgb(2, 9, 105)",
            }}
          ></Card>
        </Grid>
        <Grid item width={250}>
          <Card
            sx={{
              maxWidth: 345,
              height: 100,
              background: "transparent",
              border: "1px solid rgb(2, 9, 105)",
            }}
          ></Card>
        </Grid>
        <Grid item width={250}>
          <Card
            sx={{
              maxWidth: 345,
              height: 100,
              background: "transparent",
              border: "1px solid rgb(2, 9, 105)",
            }}
          ></Card>
        </Grid>
        <Grid item width={250}>
          <Card
            sx={{
              maxWidth: 345,
              height: 100,
              background: "transparent",
              border: "1px solid rgb(2, 9, 105)",
            }}
          ></Card>
        </Grid> */}
      </Grid>
    </Box>
  );
};
