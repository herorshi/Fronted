import React,{Component} from 'react';
import Notes from "./Notes";
class App extends Component {
  state = {
    notes:[
      'Note#1',
      'Note#2',
      'Note#3'
    ],
    name:'name'
  };
  onNoteChange = (index,note)=>{
       this.setState(prevState =>{ // prevState เป็นค่าของ state ทั้งหมด
         console.log(prevState);
        const { notes } = prevState
        console.clear();
        console.log(index);
        console.log(note);
        console.log(notes.slice(index+1));
        console.log("=================================");
        return {
          notes:[
            ...notes.slice(0,index),
            note,
            ...notes.slice(index+1)
          ]
        }
       });
  }
  ch = (event)=>{
     this.setState({name:event.target.value});
     const { name } = this.props;
    return  name
    // return event.target.value;
  }
  render() {
    return (
      <div>
        <input   />
        <br/>
        <Notes {...this.state}  ch = {this.ch}   onNoteChange = {this.onNoteChange} />
      </div>
    );
  }
}
export default App;
