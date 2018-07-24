import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

export default class Step2 extends Component {

  render() {
    const { context } = this.props;

    return (
      <div className='step step_one'>
        <Header context={context} />
        <div className='content'>
          list
        </div>
        <Footer context={context} />
      </div>
    );

  }

}
