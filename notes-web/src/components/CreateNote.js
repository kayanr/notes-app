import React, { Component } from "react";
import "./CreateNote.css";
import axios from "axios";

export class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      text: "",
      color: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
    //this.setState({ text: event.target.text });
    //this.setState({ color: event.target.color });
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);

    axios

      .post("http://localhost:8080/note", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { id, text, color } = this.state;
    return (
      <div style={{ clear: "both", marginTop: "100px" }}>
        <form onSubmit={this.submitHandler}>
          <div style={{ float: "left", padding: "10px" }}>
            <label
              htmlFor="text"
              style={{
                display: "inline-block",
                width: "280px",
                textAlign: "left",
              }}
            >
              Text:{" "}
            </label>
            <textarea
              id="text"
              name="text"
              value={text}
              onChange={this.changeHandler}
              placeholder="Write your note here..."
              style={{ height: "200px" }}
            ></textarea>
          </div>
          <div style={{ float: "left", padding: "10px" }}>
            <div>
              <label
                htmlFor="color"
                style={{
                  display: "inline-block",
                  width: "200px",
                  textAlign: "right",
                }}
              >
                <br />
                Color:{" "}
              </label>
              <select
                id="color"
                name="color"
                value={color}
                onChange={this.changeHandler}
              >
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="purple">Purple</option>
              </select>{" "}
            </div>
            <div style={{ clear: "both" }}>
              <input
                type="submit"
                value="Submit"
                style={{ backgroundColor: "blue" }}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
