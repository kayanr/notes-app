import React from "react";

let textToColor = "";
export function NoteComponent(props) {
  if (props.note.color === "red") {
    textToColor = (
      <div
        style={{
          border: "1px solid #a77a75",
          backgroundColor: "#f7cecc",
          width: "200px",
          height: "200px",
          float: "left",
          marginLeft: "10px",
          marginBottom: "10px",
        }}
      >
        {props.note.text}
      </div>
    );
  } else if (props.note.color === "yellow") {
    textToColor = (
      <div
        style={{
          border: "1px solid #d1c095",
          backgroundColor: "#fff2cd",
          width: "200px",
          height: "200px",
          float: "left",
          marginLeft: "10px",
          marginBottom: "10px",
        }}
      >
        {props.note.text}
      </div>
    );
  } else if (props.note.color === "green") {
    textToColor = (
      <div
        style={{
          border: "1px solid #a1b390",
          backgroundColor: "#d5e8d4",
          width: "200px",
          height: "200px",
          float: "left",
          marginLeft: "10px",
          marginBottom: "10px",
        }}
      >
        {props.note.text}
      </div>
    );
  } else if (props.note.color === "purple") {
    textToColor = (
      <div
        style={{
          border: "1px solid #9b8da1",
          backgroundColor: "#e2d5e7",
          width: "200px",
          height: "200px",
          float: "left",
          marginLeft: "10px",
          marginBottom: "10px",
        }}
      >
        {props.note.text}
      </div>
    );
  }

  //else
  else {
    textToColor = (
      <div
        style={{
          border: "1px solid red",
          backgroundColor: "#33E8FF",
          width: "200px",
          height: "200px",
          float: "left",
          marginLeft: "10px",
          marginBottom: "10px",
        }}
      >
        {props.note.text}
      </div>
    );
  }

  return <div>{textToColor}</div>;
}
