import React, { Component } from "react";
import Note from "./Note";

class NotesComponent extends Component {
  state = {};
  shouldComponentUpdate(nextProps,nextState) {
      console.clear();
      console.log(nextState);
      console.log(this.props.name,nextProps.name);
    // console.log(this.props.notes, nextProps.notes, "Parent");
    return true;
    // return this.props.notes !== nextProps.notes;
  }
  render() {
    const { onNoteChange, notes,ch,name } = this.props;
    return (
      <div>
          <input onChange = {ch}  />
        <ul>
          {
          notes.map((note, index) => (
             <Note
              key={index}
              index={index}
              note={note}
              onNoteChange={onNoteChange}
              ch={ch}
            />
          ))}
        </ul>
        {name}
      </div>
    );
  }
}
export default NotesComponent;
