const commentReducer = (state = [], action) => {
    console.log(action,'xxx');
  switch (action.type) {
    case "ADD_COMMENT":
      return state.concat([action.data]);
      break;
    case "DELETE_COMMENT":
        return state.filter(comment =>  comment.id !==action.id )
        break;
        case "EDIT_COMMENT":
        return  state.map((comment)=>  comment.id === action.id ? { ...comment,editing:!comment.editing }:comment )
        break;
        case "UPDATE_COMMENT":
            console.log("GGGGG=>",action);
            console.log("state=>",state);
            console.log(action.data.id === state[0]['id']);
            return  state.map((comment)=> { 
                // console.log(comment.id,'id');
                // console.log(action.id,'id');
                // console.log(comment.id === action.data.id,'TTT');
                 if(comment.id === action.data.id)  { 
                    
                    return {
                        ...comment
                        ,editing:false
                        ,name:action.data.new_name
                        ,message :action.data.new_message
                    }
             } else return comment; 
            }) 
        break;
    default:
        return state;
      break;
  }
  
};

export default commentReducer;
