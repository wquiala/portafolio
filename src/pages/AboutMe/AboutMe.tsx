import { Layout } from "@/common/Layout";
import { Grid, Typography } from "@mui/material";
import React from "react";

interface IAboutMeProps {
  children?: React.ReactNode;
}

export const AboutMe: React.FC<IAboutMeProps> = () => {
  return (
    <Layout title="About Me">
      <Grid item>
        <Typography fontSize={25}>
          I am a proactive professional, an excellent teammate, organized and
          responsible. I really enjoy learning new things, so my goal is a
          challenging and dynamic position where I can share my experience and
          at the same time gain new knowledge.
        </Typography>
      </Grid>
    </Layout>
  );
};
