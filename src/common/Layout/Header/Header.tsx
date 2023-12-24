import { Toolbar, Grid, Typography } from "@mui/material";
import React from "react";

interface IHeaderProps {
  children?: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = () => {
  return (
    <Toolbar>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Grid item>
          <Typography variant="h4" textAlign={"center"}>
            Wilfredo Quiala Fonseca
          </Typography>
        </Grid>
        <Grid item sx={{ color: "wheat" }}>
          <Typography variant="subtitle1" sx={{ font: "italic 20px cursive" }}>
            Computer science engineer || FullStack developer
          </Typography>
        </Grid>{" "}
        <Grid
          item
          sx={{
            color: "wheat",
            display: { xs: "initial", sm: "initial", xl: "none" },
          }}
        >
          <Typography variant="subtitle1">wilfredoquiala@gmail.com</Typography>
        </Grid>
      </Grid>
    </Toolbar>
  );
};
