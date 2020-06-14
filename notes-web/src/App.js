import React from "react";
import "./App.css";
import { NoteListView } from "./components/NoteListView";
import { CreateNote } from "./components/CreateNote";
import PostForm from "./components/PostForm";
import { PostRequest } from "./components/PostRequest";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
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
      <div>
        <h1 align="center">Notes</h1>
        <div>
          <NoteListView notes={this.state.notes} />
        </div>

        <br />
        <div>
          <CreateNote />
        </div>
      </div>
    );
  }
}

export default App;
