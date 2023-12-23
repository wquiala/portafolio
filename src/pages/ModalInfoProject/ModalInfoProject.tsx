import {
  Modal,
  Box,
  Typography,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/styles";
import * as React from "react";

const Img = styled("img")({ width: "20%", height: "20%" });

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  minHeight: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

interface Props {
  open: boolean;
  handleClose: () => void;
  name: string;
  description: string;
  img: string;
}
export const ModalInfoProject: React.FC<Props> = ({
  handleClose,
  open,
  name,
  description,
  img,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex" }}
      >
        <Box sx={style}>
          <IconButton
            sx={{ position: "absolute", right: 0, top: 0 }}
            onClick={handleClose}
          >
            <CloseIcon color="primary" />
          </IconButton>

          <Typography id="modal-modal-title" variant="h4" component="h2" mb={2}>
            {name}
          </Typography>
          <Grid container spacing={1}>
            {/* <Grid item mr={2}>
              <Img src={img} />
            </Grid> */}
            <Grid item>
              <Typography paragraph width={"100%"} fontSize={20} overflow={""}>
                {description}
              </Typography>{" "}
            </Grid>
          </Grid>
          <Button
            variant="text"
            sx={{ position: "absolute", right: 0, bottom: 0 }}
          >
            Go to project
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
