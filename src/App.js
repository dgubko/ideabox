import "./App.css";
import Form from "./components/Form";
import Typography from "@mui/material/Typography";
import IdeaBoxCard from "./components/IdeaBoxCard";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" gutterBottom>
        Idea Box
      </Typography>
      <Form />
      <main>
        <IdeaBoxCard />
      </main>
    </div>
  );
}

export default App;
