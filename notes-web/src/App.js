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

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    this.setState({ mode: this.state.mode === "VIEW" ? "EDIT" : "VIEW" });
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
        {/* <div hidden={this.setState.mode === "VIEW"}>
          <ExpenseListView
            expenses={this.state.expenses}
            toggle={this.toggleMode}
          />
        </div> */}
        {/* <div hidden={this.state.mode === "VIEW"}> */}
        {/* <ExpenseEdit toggle={this.toggleMode} /> */}
        {/* <AddExpense toggle={this.toggleMode} /> */}
        {/* <CreateNote /> */}
        {/* </div> */}
        <NoteListView notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
