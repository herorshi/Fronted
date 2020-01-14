import React, { Component } from "react";
import hoistNonReactStatic from "hoist-non-react-statics"; //  จะส่ง property static ของ class ที่ประกาศ ใส่ลงมาเรื่อยๆจนถึงตัวสุดท้าย
function fetchApi(endpoint) {
  return new Promise(function(resolve, reject) {
    if (!endpoint) return reject(new Error("Error Promise"));
    return resolve({
      articles: [
        { id: 1, title: "Article#1" },
        { id: 2, title: "Aritcle#2" },
        { id: 3, title: "Aritcle#3" }
      ]
    });
  });
}

function getDisplayName(WarppedComponent){
  return WarppedComponent.displayName || WarppedComponent.name ||  'Component'
}


function forAuth(WarppedComponent) {
  console.log("Auth");
  class Enhance extends Component {
    static displayname = `ForAuth = ${getDisplayName(WarppedComponent)}`
    // constructor(props) {
    //    super(props);
    //    console.log(this);
    //    for (const [key,value] of Object.entries(props)) {
    //      this[key] = value
    //   }
    // }

    render() {
      const props = this.props; // ตัว props isLogin จะมีค่าอยุ่ใน class นี้
      const { isLogin, credential, ...rest } = props; //...ตัวสุดท้ายค่า variable ที่เหลือ
      const auth = { isLogin, credential };

      return (
        <div>
          {props.isLogin ? <WarppedComponent {...props} auth={auth} /> : null //ตัว props ที่ได้ จาก  EnhancedComponent isLogin ต้องส่งกลับไปด้วย
          }
          <div>{!props.isLogin ? "AAA" : "BBB"}</div>
        </div>
      );
    }
  }
  return hoistNonReactStatic(Enhance, WarppedComponent);
  // return (props) => { console.log(props); return props.isLogin ?  <WarppedComponent {...props} state={state}    /> : null } // stateless เลยรับค่า propsมาได้
}
function logProps(WarppedComponent) {
  // console.log('logProps');
  // WarppedComponent.prototype.componentWillReceiveProps = function (nextProps){
  //   console.log('Prev Pros',this.props);
  //   console.log('Next Props',nextProps);
  // }
  // return WarppedComponent;
  
  return class extends Component {
    static displayname = `LogAuth = ${getDisplayName(WarppedComponent)}`
    state = {};
    componentWillReceiveProps(nextProps) {
      console.log("Prev Pros", this.props);
      console.log("Next Props", nextProps);
    }
    render() {
      return <WarppedComponent {...this.props}></WarppedComponent>;
    }
  };
}

function fetchData(WarppedComponent, endpoint) {
  return class extends Component {
    static displayname = `FetchAuth = ${getDisplayName(WarppedComponent)}`
    state = {
      fetchData: {}
    };
    componentDidMount() {
      console.log("MOUNT");
      //  fetchApi(ProtectedComponent.API_ENDPOINT)
      fetchApi(ProtectedComponent, endpoint)
        .then(fetchData => this.setState({ fetchData }))
        .catch(error => console.error(error.message));
    }
    render() {
      return (
        <WarppedComponent {...this.props} {...this.state}></WarppedComponent>
      );
    }
  };
}

class ProtectedComponent extends Component {
  // static API_ENDPOINT = '/articles'
  // state = {
  //   fetchData:{}
  // }
  render() {
    const {
      fetchData: { articles }
    } = this.props;
    return (
      <ul>
        {articles &&
          articles.map((id, title) => {
            return <li key={id}>{title}</li>;
          })}
      </ul>
    );
  }
}

// const ProtectedComponent = ({auth}) => {
//   return <h2> protected Content : {auth.isLogin.toString()} </h2>;
// };


// const EnhancedComponent = forAuth(ProtectedComponent);

class App extends Component {
  state = {
    isLogin: false,
    game: false,
    credential: {},
    three: 3
  };
  toggleLogin = prevState => {
    const { isLogin } = this.state;
    if (isLogin) return this.setState({ isLogin: false, credetial: {} });
    else
      return this.setState({
        isLogin: true,
        credential: { email: "abc1920@windowslive.com", accessToken: "token" }
      });

    // this.setState((prevState => ({isLogin : !prevState.isLogin})) );
  };
  render() {
    const EnhancedComponent = fetchData(
      logProps(forAuth(ProtectedComponent)),
      "/articles"
    );
    return (
      <div>
        <button onClick={this.toggleLogin}>Toggle</button>
        <EnhancedComponent {...this.state}></EnhancedComponent>
      </div>
    );
  }
}
export default App;
