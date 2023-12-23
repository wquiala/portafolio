import { Layout } from "@/common/Layout";
import { Grid } from "@mui/material";
import React from "react";
import { ProjectCard } from "..";

interface IProjectsProps {
  children?: React.ReactNode;
}

const ProjectsI = [
  {
    name: "Google Driver Copy",
    description:
      "This application is a clone of Google Drive, developed with React, TypeScript and Material UI",
    img: "/Projects/Screenshot_20231223_211952.png",
  },
  {
    name: "Journal App",
    description:
      "This application is a task scheduler, where each person has an account and can plan their tasks, it is developed in React, Typescript and Material UI",
    img: "/Projects/Screenshot_20231223_211541.png",
  },
  {
    name: "Gif Expert App",
    description:
      "This application connects to the Giphy API and allows you to search for the GIF that each person wants",
    img: "/Projects/Screenshot_20231223_210652.png",
  },
  {
    name: "Heroes App",
    description:
      "This application allows each person to search for the heroes that they like, it is developed in React, Typescript",
    img: "/Projects/Screenshot_20231223_210811.png",
  },
  {
    name: "Calendar App",
    description: "",
    img: "",
  },
];
export const Projects: React.FC<IProjectsProps> = () => {
  return (
    <Layout title="Projects">
      <Grid container gap={1}>
        {ProjectsI.map((p) => (
          <ProjectCard
            key={p.name}
            name={p.name}
            description={p.description}
            img={p.img}
          />
        ))}
      </Grid>
    </Layout>
  );
};
