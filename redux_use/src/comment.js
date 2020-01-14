import React, { Component } from "react";
import { connect } from "react-redux"
class Comment extends Component {
  state = {};
   componentDidMount(){
      console.log(this.props,'comment');
   }
  render() {
    return (
      <div>
        <h2>{this.props.comment.name}</h2>
        <p>{this.props.comment.message}</p>
        <p>{this.props.comment.editing}</p>
        <button 
          className="btn btn-primary"
          onClick={ ()=> this.props.dispatch({
            type:'EDIT_COMMENT',
            id:this.props.comment.id
        })}
          >Edit</button>
        <button 
        className="btn btn-danger"
        onClick={ ()=> this.props.dispatch({
            type:'DELETE_COMMENT',
            id:this.props.comment.id
        })}
        >Delete</button>
      </div>
    );
  }
}
export default connect()(Comment)
// export default Comment;
