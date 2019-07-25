import React, { Component } from 'react';

export default class List1 extends Component {

  render() {

    const numbers = this.props.numbers;
    const listItems = numbers.map((number, index) =>
      <li key={index}>{number}</li>
    );
    return (
      <ul>32{listItems}</ul>
    );

  }
}
