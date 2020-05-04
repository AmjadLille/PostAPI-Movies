import React, { Component } from 'react';



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
  }
  render(){
    const {title, poster, comment} = this.state
    return (
      <div className="App">
        <form>
          <div>
            <input type='text' name='title' value={title}></input>
          </div>
          <div>
            <input type='text' name='poster' value={poster}></input>
          </div>
          <div>
            <input type='text' name='comment' value={comment}></input>
          </div>
        </form>
      </div>
    );
  }
  }
  

export default App;
