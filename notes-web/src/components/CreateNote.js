import React, { Component } from "react";
import "./CreateNote.css";

export class CreateNote extends Component {
  submitExpense(event) {
    event.preventDefault();

    let note = {
      id: this.refs.id.value,
      text: this.refs.text.value,
      color: this.refs.color.value,
    };

    fetch("http://localhost:8080/note", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(note),
    }).then((response) => response.json());

    window.location.reload();
  }

  render() {
    return (
      // <div className="row">
      <>
        <h2>Add Notes form test</h2>
        <div className="container">
          {/* <form onSubmit={this.submitNote.bind(this)}> */}
          <form>
            <br />
            <label
              htmlFor="description"
              style={{
                display: "inline-block;",
                width: "140px;",
                textAlign: "right;",
              }}
            >
              Description:{" "}
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Write something..."
              style={{ height: "170px" }}
            ></textarea>
            <br />
            <label
              htmlFor="category"
              style={{
                display: "inline-block;",
                width: "140px;",
                textAlign: "right;",
              }}
            >
              Category:{" "}
            </label>
            <select id="category" name="category">
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Transportation">Transportation</option>
              <option value="Travel">Travel</option>
            </select>{" "}
            <input
              type="submit"
              value="Submit"
              // style={{ backgroundColor: "#dae8f9" }}
            />
          </form>
        </div>
      </>
    );
  }
}
