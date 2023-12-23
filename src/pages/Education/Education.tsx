import { Layout } from "@/common/Layout";
import { Grid, List, Typography } from "@mui/material";
import React from "react";
import ListItem from "@mui/material/ListItem";
import SchoolIcon from "@mui/icons-material/School";

interface IEducationProps {
  children?: React.ReactNode;
}

export const Education: React.FC<IEducationProps> = () => {
  return (
    <Layout title="Education">
      <Grid item>
        <List sx={{ fontSize: 25 }}>
          <ListItem>
            <SchoolIcon sx={{ fontSize: 50, mr: 2 }} />
            <Typography fontSize={25}>
              <strong>Computer Science Engineer</strong>, 2014. University of
              Granma, Cuba
            </Typography>
          </ListItem>
          {/* <ListItem>
            <SchoolIcon sx={{ fontSize: 50, mr: 2 }} />
            <Typography fontWeight={"bold"} fontSize={25}>
              
            </Typography>
            
          </ListItem> */}
          <ListItem>
            <SchoolIcon sx={{ fontSize: 50, mr: 2 }} />
            <Typography fontSize={25}>
              <strong>Computer Technician </strong>, 2008. Polytechnic Institute
              of Informatics "Pepito Tey", Cuba.
            </Typography>
          </ListItem>
        </List>
      </Grid>
    </Layout>
  );
};
