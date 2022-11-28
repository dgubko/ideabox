import React from "react";
import { TextField, Button } from "@mui/material";

class Form extends React.Component {
  constructor() {
    super();
    this.state = { title: "", description: "" };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <TextField
          label="Title"
          variant="outlined"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <Button
          onClick={this.handleSubmit}
          variant="contained"
          size="large"
          disabled={!this.state.title || !this.state.description}
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default Form;
