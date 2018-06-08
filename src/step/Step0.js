import React, { Component } from 'react';
import ShooseAvto from '../components2/ShooseAvto';

export default class Step0 extends Component {
  render() {
    const { context } = this.props;
    return (
      <div className='step step_main'>
        <ShooseAvto context={context} />
      </div>
    );

  }

}
