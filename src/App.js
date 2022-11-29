import "./App.css";
import Form from "./components/Form";
import Typography from "@mui/material/Typography";
import IdeaBoxCard from "./components/IdeaBoxCard";
import React from "react";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allIdeas: [],
    };
  }

  addElement = (newIdea) => {
    this.setState({ allIdeas: [...this.state.allIdeas, newIdea] });
  };

  deleteElement = (id) => {
    const filtered = this.state.allIdeas.filter((item) => {
      return item.id !== id;
    });
    this.setState({ allIdeas: filtered });
  };

  render() {
    return (
      <div className="App">
        <Typography variant="h2" gutterBottom>
          Idea Box
        </Typography>
        <Form addIdea={this.addElement} />
        <main>
          {this.state.allIdeas.map((item) => {
            return (
              <IdeaBoxCard
                removeIdea={this.deleteElement}
                key={item.id}
                {...item}
              />
            );
          })}
        </main>
      </div>
    );
  }
}

export default App;
