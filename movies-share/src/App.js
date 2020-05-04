import React, { Component } from 'react';
import axios from 'axios'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    const { title, poster, comment } = this.state
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <div>
            <input type='text' name='title' value={title} onChange={this.changeHandler}></input>
          </div>
          <div>
            <input type='text' name='poster' value={poster} onChange={this.changeHandler}></input>
          </div>
          <div>
            <input type='text' name='comment' value={comment} onChange={this.changeHandler}></input>
          </div>
          <button type="submit">Share</button>
        </form>
      </div>
    );
  }
}


export default App;
