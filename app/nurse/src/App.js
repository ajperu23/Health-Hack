import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientName: '',
      patientID: null,
      VitaminA: '',
      VitaminB: null,
      VitaminC: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    // Insert Push Request Here
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    // .then(res => {
    //   const persons = res.data;
    //   this.setState({ persons });
    // })
  }

  render() {
    return (
      <form>
      <h1>Nurse Blood Test Results </h1>
      <p>Patient Name:</p>
      <input
        type='text'
        name='patientName'
        onChange={this.myChangeHandler}
      />
      <p>Patient ID:</p>
      <input
        type='text'
        name='patientID'
        onChange={this.myChangeHandler}
      />
      <p>Vitamin A Level:</p>
      <input
        type='text'
        name='VitaminA'
        onChange={this.myChangeHandler}
      />
      <p>Vitamin B Level:</p>
      <input
        type='text'
        name='VitaminB'
        onChange={this.myChangeHandler}
      />
      <p>Vitamin C Level:</p>
      <input
        type='text'
        name='VitaminC'
        onChange={this.myChangeHandler}
      />

      <br />

      <button onClick={(e) => this.handleClick(e)}>
        Submit
      </button>

      </form>
    );
  }
}

export default App;