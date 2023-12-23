import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItem } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";
import * as React from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props {
  place: string;
  periodo: string;
  typew: string;
  work: {
    typew: string;
    functions: string[];
  };
}

export const ExperienceCard: React.FC<Props> = ({
  periodo,
  place,
  typew,
  work,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 310, background: "rgb(93, 100, 209)", color: "white" }}>
      <CardHeader
        sx={{ height: 75, padding: 1, alignItems: "start" }}
        title={typew}
        subheader={
          <Typography color={"rgb(1, 4, 49)"} textAlign={"start"}>
            {place}, {periodo}
          </Typography>
        }
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          content
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: "white" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph sx={{ fontSize: 20 }}>
            {work.typew}
          </Typography>
          <List>
            {work.functions.map((e) => (
              <ListItem key={e}>
                <DoneIcon
                  color="action"
                  sx={{ mr: 1, fontSize: 20, alignSelf: "start" }}
                />
                <Typography fontSize={20}>{e}</Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};
