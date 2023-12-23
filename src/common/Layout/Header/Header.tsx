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
          <Typography variant="h4">Wilfredo Quiala Fonseca</Typography>
        </Grid>

        <Grid item sx={{ color: "#848D97" }}>
          <Typography variant="subtitle1" sx={{ font: "italic 20px cursive" }}>
            Computer science engineer || FullStack developer
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  );
};
