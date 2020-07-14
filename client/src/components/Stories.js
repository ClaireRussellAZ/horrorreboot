import React, { Component } from 'react';
import Peachy from '../data/Peachy.json';
import Story from './Story';

export default class Stories extends Component {

    constructor(props){
        super(props);
        this.state = {
            stories: [],
            story: undefined
        }
    }


    componentDidMount() {
    //    console.log(Peachy.passages)
    //    this.setState({ stories: Peachy.passages  });
         const Peachy = fetch('../components')
         this.getStories()
          .then(dbStories => this.setState({ stories: dbStories }))
          .catch(err => console.log(err));
          console.log(this.state.stories);
      }
      
      getStories= async () => {
        const response = await fetch('/api/stories');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
      };

      loadStory =() => {this.setState({ story: this.state.stories[0] })}

    render() {
        return (
            <div>
             <h1>I'm in stories</h1> 
             <ul>
             {/* <Story stories ={this.state.stories.}></Story> */}
          {  this.state.stories.map((story) => { 
        return (<li key={story.pid}> <button onClick={this.loadStory}>{story.name} </button></li>)
    })}
             </ul>
              {this.state.story && <Story stories ={this.state.story}></Story>}
            </div>
        )
    }
}

