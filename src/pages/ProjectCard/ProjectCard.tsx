import { Grid, ListItemButton, Typography } from "@mui/material";
import { ModalInfoProject } from "../ModalInfoProject";
import { useState } from "react";
interface Props {
  name: string;
  description: string;
  img: string;
}

export const ProjectCard: React.FC<Props> = ({ name, description, img }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item width={250} justifyContent={"center"} alignItems={"center"}>
      <ListItemButton
        onClick={handleOpen}
        sx={{
          background: "rgb(93, 100, 209)",
          ":hover": { background: "rgb(93, 100, 209)" },
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            textAlign: "center",
            width: "100%",
          }}
        >
          {name}
        </Typography>
      </ListItemButton>
      <ModalInfoProject
        open={open}
        handleClose={handleClose}
        name={name}
        description={description}
        img={img}
      />
    </Grid>
  );
};
