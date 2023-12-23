import { Layout } from "@/common/Layout";
import { Grid, List, ListItem } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import React from "react";
interface ISkillsProps {
  children?: React.ReactNode;
}

export const Skills: React.FC<ISkillsProps> = () => {
  return (
    <Layout title="Skills">
      <Grid item>
        <List sx={{ fontSize: 25 }}>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />{" "}
            Ability to develop mobile applications and information management
            software.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />{" "}
            Agile SCRUM methodology.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />{" "}
            Development frameworks: Node.js, NestJS, Express, React JS, Vue.js,
            Django.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />{" "}
            Docker.
          </ListItem>

          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />{" "}
            Javascript, Typescript, HTML, CSS, Sass, Java, Python. MySql,
            PostgreSql, Mongo DB.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />{" "}
            Clean Arquitecture.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />{" "}
            Linux, Windows, Mac OS.
          </ListItem>
          <ListItem>
            <DoneIcon
              color="primary"
              sx={{ mr: 1, fontSize: 20, alignSelf: "center" }}
            />{" "}
            Knowledge of advanced statistical methods to solve decision-making
            problems.
          </ListItem>
        </List>
      </Grid>
    </Layout>
  );
};
