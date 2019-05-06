import React, { Component } from 'react';
import Header from '../components3/Header';
import Footer from '../components2/Footer';
import WF from '../components2/WF';

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
