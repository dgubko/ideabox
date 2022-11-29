import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ideaImg from "../assets/idea.webp";

const IdeaBoxCard = (props) => {
  const handleClick = (event) => {
    props.removeIdea(props.id);
  };
  return (
    <Card>
      <CardMedia component="img" height="160" image={ideaImg} alt="new idea" />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button onClick={handleClick} size="large" variant="contained">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default IdeaBoxCard;
