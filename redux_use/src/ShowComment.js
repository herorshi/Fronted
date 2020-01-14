
import React,{Component} from 'react';
import { connect } from "react-redux"
import Comment from './comment'
import EditComponent from './EditComponent'
class ShowComment extends Component {
  state = {
      game:'game'
  };
  render() {
      const  { comments } =  this.props
      console.log(comments);
    return (
      <div>
          <h1> Show AllComment</h1>
            {
                comments.map((comment)=>{
                    console.log(comment,comment.id);
                  return  (
                  <div key={comment.id}> { 
                   comment.editing ? 
                    <EditComponent  comment={comment} key={comment.id} /> :
                    <Comment comment={comment} key={comment.id} />
                  }
                  </div>
                  )
                })
            }   
            
            
         
      </div>
    );
    
  }
}
 // เมื่อใส่ใน connect จะไปอยู่ใน props
const mapStateToProps = (state)=>{
     return {
         comments:state
     }
}
export default connect(mapStateToProps)(ShowComment)
// export default ShoeComment