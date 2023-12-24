import { Layout } from "@/common/Layout";
import { Divider, Grid, Paper, Typography, styled } from "@mui/material";

import React from "react";
interface ISkillsProps {
  children?: React.ReactNode;
}
const Img = styled("img")({ width: 40, height: 40 });

export const Skills: React.FC<ISkillsProps> = () => {
  return (
    <Layout title="Skills">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={8} md={5} xl={3}>
          <Divider textAlign="center">
            <Typography>FRAMEWORKS</Typography>
          </Divider>
          <Paper
            sx={{
              background: "rgb(93, 100, 209, 0.1)",
              color: "white",
              padding: 5,
            }}
          >
            <Typography mb={1}>BACKEND</Typography>
            <Grid container spacing={3} mb={2}>
              <Grid item>
                <Img src="./tecnologies/nodejs.svg" loading="lazy" />
              </Grid>
              <Grid item>
                <Img src="./tecnologies/Express.js.dark.svg" loading="lazy" />
              </Grid>
              <Grid item>
                <Img src="./tecnologies/nestjs.svg" />
              </Grid>
            </Grid>

            <Typography mb={1}>FRONTEND</Typography>
            <Grid container spacing={3}>
              <Grid item>
                <Img src="./tecnologies/bootstrap.svg" loading="lazy" />
              </Grid>
              <Grid item>
                <Img src="./tecnologies/tailwindcss.svg" loading="lazy" />
              </Grid>
              <Grid item>
                <Img src="./tecnologies/react.svg" loading="lazy" />
              </Grid>
              <Grid item>
                <Img src="./tecnologies/materialui.svg" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={5} xl={3}>
          <Divider textAlign="center">
            <Typography>LANGUAGES</Typography>
          </Divider>

          <Paper sx={{ background: "rgb(93, 100, 209, 0.1)", padding: 5 }}>
            <Grid container spacing={3}>
              <Grid item>
                <Img src="./tecnologies/css.svg" loading="lazy" />
              </Grid>

              <Grid item>
                <Img src="./tecnologies/javascript.svg" loading="lazy" />
              </Grid>
              <Grid item>
                <Img src="./tecnologies/typescript.svg" loading="lazy" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={8} md={5} xl={3}>
          <Divider textAlign="center">
            <Typography>DATA BASE</Typography>
          </Divider>

          <Paper sx={{ background: "rgb(93, 100, 209, 0.1)", padding: 5 }}>
            <Grid container spacing={3}>
              <Grid item>
                <Img src="./tecnologies/postgresql.svg" />
              </Grid>
              <Grid item>
                <Img src="./tecnologies/mysql.svg" />
              </Grid>
              <Grid item>
                <Img src="./tecnologies/mongodb.svg" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={8} md={5} xl={3}>
          <Divider textAlign="center">
            <Typography>OTHERS</Typography>
          </Divider>
          <Paper sx={{ background: "rgb(93, 100, 209, 0.1)", padding: 5 }}>
            <Grid container spacing={3}>
              <Grid item>
                <Img src="./tecnologies/docker.svg" />
              </Grid>
              <Grid item>
                <Img src="./tecnologies/linux.svg" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/*  <List sx={{ fontSize: 25 }}>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />
            Ability to develop mobile applications and information management
            software.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />
            Agile SCRUM methodology.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />
            Development frameworks: Node.js, NestJS, Express, React JS, Next.JS,
            Django.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />
            Docker.
          </ListItem>

          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />
            Javascript, Typescript, HTML, CSS, Sass, Java, Python. MySql,
            PostgreSql, Mongo DB.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />
            Clean Arquitecture.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />
            Linux, Windows, Mac OS.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />
            Knowledge of advanced statistical methods to solve decision-making
            problems.
          </ListItem>
        </List> */}
      </Grid>
    </Layout>
  );
};
