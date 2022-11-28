import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ideaImg from "../assets/idea.webp";

export default function MediaCard() {
  return (
    <Card>
      <CardMedia component="img" height="160" image={ideaImg} alt="new idea" />
      <CardContent>
        <Typography gutterBottom variant="h5">
          New Idea
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description for the new idea
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" variant="contained">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
