import React,{Component} from 'react';
import { connect } from "react-redux"
class EditComponent extends Component {
  state = {};
  handleSubmit = (event)=>{
    event.preventDefault()
    const new_name = this.getName.value; //  this นี้ อ้างอิงในตัว REF
    const new_message = this.getMessage.value;
    // const id = this.props.comment.id;
    const data = {
        id:this.props.comment.id,
        new_name,
        new_message
    }
    console.log(data,'data');
    this.props.dispatch({
      type:"UPDATE_COMMENT",
      data
    })
    // this.props.dispatch({
    //   type:'ADD_COMMENT',
    //   data
    // })
}
  render() {
    return (
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                  <input className="form-control"
                         type="text"
                         placeholder="ป้อนชื่อ"
                         required  
                         ref = { (input) => this.getName = input}
                         defaultValue={this.props.comment.name}
                         /> <br/><br/>
                  <textarea className="form-control"  
                            name="" 
                            id="" 
                            cols="28" 
                            rows="10" 
                            row="5" 
                            placehoder="ข้อความ" 
                            required
                            ref = { (message) =>  this.getMessage = message }
                            defaultValue={this.props.comment.message}
                            ></textarea><br/><br/>
              <button className="btn btn-primary" onClick={this.handleSubmit}>Update</button>
            </form>
    </div>
    );
  }
}
export default connect()(EditComponent)
// export default EditComponent