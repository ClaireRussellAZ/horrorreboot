import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Stories from './components/Stories';


class App extends Component {
  state = {
    stories:[]
  
  };
  
  
  // componentDidMount() {
  //   this.getStories()
  //     .then(dbStories => this.setState({ stories: dbStories }))
  //     .catch(err => console.log(err));
  //     console.log(this.state.stories);
  // }
  
  // getStories= async () => {
  //   const response = await fetch('/api/stories');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
    
  //   return body;
  // };


  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div  className="container"></div>
          <h2>Welcome to React</h2>
    {/* <p>{JSON.stringify(this.state.stories)}</p> */}
        </div>
        <p className="App-intro">
          An array of chilling tales
        </p>
        <Stories />
      </div>
    );
  }
}


export default App;
