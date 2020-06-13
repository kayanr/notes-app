import React from "react";
import { NoteComponent } from "./NoteComponent";

export function NoteListView(props) {
  let body = [];

  props.notes.forEach((note) => {
    body.push(<NoteComponent note={note} />);
  });

  return <div>{body}</div>;
}
