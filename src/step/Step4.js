import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WF from '../components/WF';

export default class Step4 extends Component {
  render() {
    const { context } = this.props;
    return (
      <div className='step step_last'>
        <Header context={context} />
        <div className='content'>
          <WF context={context} />
        </div>
        <Footer context={context} />
      </div>
    );

  }

}
