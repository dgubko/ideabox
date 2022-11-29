import React from "react";
import { TextField, Button } from "@mui/material";

class Form extends React.Component {
  constructor(props) {
    super(props);
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
    const newIdea = {
      title: this.state.title,
      description: this.state.description,
      id: Date.now(),
    };
    this.props.addIdea(newIdea);
    this.cleanForm();
    console.log(newIdea);
  };

  cleanForm = () => {
    this.setState({ title: "", description: "" });
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
