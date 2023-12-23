import React from "react";

import { Grid, Typography } from "@mui/material";
interface IContentProps {
  children?: React.ReactNode;
}

export const Content = () => {
  return (
    <Grid container sx={{ padding: "40px" }}>
      <Grid item sx={{ width: "5vw", fontSize: 30 }}>
        Skills
      </Grid>
      <Grid
        container
        mr={2}
        ml={2}
        width={"10px"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ display: { xs: "none", sm: "none", md: "inherit" } }}
      >
        <Grid
          item
          sx={{
            background: "linear-gradient(transparent, #7C72FF 30%)",
            width: 6,
            height: 250,
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
            height: 250,
          }}
        ></Grid>
      </Grid>
    </Grid>
  );
};
