import React,{Component} from 'react';
import { Provider,connect } from "react-redux"
class CommentForm extends Component {
    
  handleSubmit = (event)=>{
       event.preventDefault()
       const name = this.getName.value; //  this นี้ อ้างอิงในตัว REF
       const message = this.getMessage.value;
       const data = {
           id: new Date(),
           name,
           message,
           editing:false
       }
       
       this.getName.value = "";
       this.getMessage.value = "";
       this.props.dispatch({
         type:'ADD_COMMENT',
         data
       })
  }
  state = {};
  render() {
    return (
      <div className="container">
          <div>
              <h1>Add Comment </h1>
              <form onSubmit={this.handleSubmit}>
                   
                    <input className="form-control" type="text" placeholder="ป้อนชื่อ" required  ref = { (input) => this.getName = input } /> <br/><br/>
                    <textarea className="form-control"  
                    
                              name="" 
                              id="" 
                              cols="28" 
                              rows="10" 
                              row="5" 
                              placehoder="ข้อความ" 
                              required
                              ref = { (message) =>  this.getMessage = message }
                              ></textarea><br/><br/>
                <button className="btn btn-primary">Comment</button>
              </form>
          </div>
      </div>
    );
  }
}

// export default CommentForm
export default connect()(CommentForm) //ได้จาก Provice


