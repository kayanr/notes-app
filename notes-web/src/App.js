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
        <div style={{ position: "relative;", top: "420px;" }}>
          <NoteListView notes={this.state.notes} />
        </div>

        <br />
        <div style={{ position: "relative;" }}>
          <CreateNote />
          {/* <PostForm /> */}
          {/* <PostRequest /> */}
        </div>
      </div>
    );
  }
}

export default App;
