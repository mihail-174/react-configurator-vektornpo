import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    // return <h1>{this.state.welcome}</h1>;
    // return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    return (
      <h1>Здарова, {this.props.name}, ты че тут забыл?</h1>
    );
  }
}
