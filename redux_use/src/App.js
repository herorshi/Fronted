
import React,{Component} from 'react';
import CommentForm from "./CommentForm"
import ShowComment from './ShowComment'
import { connect } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
   componentDidMount(){
      console.log(this.props);
   }
  state = {};
  render() {
    return (
      <div>
        <CommentForm></CommentForm>
        <ShowComment></ShowComment>
      </div>
    );
  }
}

export default connect()(App)
// export default App;
