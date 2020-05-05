import React, { Component } from 'react';
import axios from 'axios'
import './App.css'



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
    axios.post('https://post-a-form.herokuapp.com/api/movies', this.state)
      .then(res => res.data)
      .then(res => {
        alert('Your Favorite Movie is added !');
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { title, poster, comment } = this.state
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <div>
            <label for="fname">Movie Title :</label>
            <input type='text' name='title' value={title} onChange={this.changeHandler} />
          </div>
          <div>
            <label for="fname">Movie Poster :</label>
            <input type='text' name='poster' value={poster} onChange={this.changeHandler} />
          </div>
          <div>
            <label for="fname">Add a Comment :</label>
            <input type='text' name='comment' value={comment} onChange={this.changeHandler} />
          </div>
          <button type="submit">Share</button>
        </form>
      </div>
    );
  }
}


export default App;
