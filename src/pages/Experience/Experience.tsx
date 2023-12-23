import { Layout } from "@/common/Layout";
import { Grid } from "@mui/material";
import React from "react";
import { ExperienceCard } from ".";

interface IExperienceProps {
  children?: React.ReactNode;
}

const ExperienceItems = [
  {
    place: "Autonomous",
    periodo: "Sep 2014 - today",
    namew: "Computer equipment programmer",
    work: {
      typew: "Design and programming of computer systems",
      functions: [
        "Web development",
        "Database design and management",
        "Project management",
      ],
    },
  },
  {
    place: "Autonomous",
    periodo: "Sep 2014 - today",
    namew: "Electronics repairer",
    work: {
      typew: "Electronic solutions to mobile devices and computer equipment",
      functions: [],
    },
  },
  {
    place: "Szkłoland, Poland",
    periodo: "Oct 2022 - today",
    namew: "Glass industrial equipment operator",
    work: {
      typew: "Operate glass processing equipment",
      functions: [],
    },
  },
  {
    place: "Universidad de Oriente, Department of Computer Engineering (Cuba)",
    periodo: "Jan 2017- Oct 2022",
    namew: "University professor",
    work: {
      typew: "Teaching the Computational Intelligence Discipline",
      functions: [
        "Database",
        "Artificial intelligence",
        "Probabilities and statistics",
        "Operations research",
        "Leader of the student scientific group of Industrial Informatics",
      ],
    },
  },
  {
    place: "Pre-university institute (Cuba)",
    periodo: "Sep 2014- Dec 2016",
    namew: "high school teacher",
    work: {
      typew: "Mathematics teacher",
      functions: [],
    },
  },
];

export const Experience: React.FC<IExperienceProps> = () => {
  return (
    <Layout title="Experience">
      <Grid container gap={2}>
        {ExperienceItems.map((e) => (
          <Grid item key={e.namew}>
            <ExperienceCard
              periodo={e.periodo}
              place={e.place}
              typew={e.namew}
              work={e.work}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};
