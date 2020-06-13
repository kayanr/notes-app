import React from "react";
import "./App.css";
import { NoteListView } from "./components/NoteListView";
import { CreateNote } from "./components/CreateNote";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      mode: "VIEW",
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/notes")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          notes: data,
        })
      );
  }

  render() {
    return (
      <div className="App">
        <h1>Notes</h1>

        <NoteListView notes={this.state.notes} />
        <br />
        <CreateNote />
      </div>
    );
  }
}

export default App;
