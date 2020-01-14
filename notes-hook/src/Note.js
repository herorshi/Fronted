import React,{Component} from 'react';
class NoteComponent extends Component {
  state = {};
  handleChange = (event)=>{
       const {  onNoteChange,index } = this.props;

       onNoteChange(index,event.target.value);
  }
  render() {
      const { note } = this.props
    return (
        <div defa>
        <li>
          <input
            type="text"
            defaultValue={note}
            onChange={this.handleChange}
          />
        <p>{note}</p>
      </li>
        </div>
    );
  }
}

export default NoteComponent