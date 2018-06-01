import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Вы ввели: ' + this.state.value);
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder="Hello!"
          value={this.state.value}
          onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
