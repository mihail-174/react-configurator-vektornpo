import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

import ItemRadio from '../components2/ItemRadio';
import SwitchWithName from '../components2/SwitchWithName';

import '../css/b.css';
import '../css/checkbox.css';

export default class Step1 extends Component {

  render() {
    const { context } = this.props;
    const list = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep].map((field, key) =>
      <div key={key} className={'b ' + field.system} data-id={field.id}>
        <div className='b__title'>{field.name}</div>
        {field.switchCheck === true && <SwitchWithName switchCheck={field.switchCheck} switchCheckName1={field.switchCheckName1} switchCheckName2={field.switchCheckName2} systemName={field.system} id={field.id} context={context} />}
        {field.switchCheck === false && <SwitchWithName switchCheck={field.switchCheck} switchCheckName1={field.switchCheckName1} switchCheckName2={field.switchCheckName2} systemName={field.system} id={field.id} context={context} />}
        <ItemRadio type={field.type} id={field.id} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />
      </div>
    );

    return (
      <div className='step step_one'>
        <Header context={context} />
        <div className='content'>
          {list}
        </div>
        <Footer context={context} />
      </div>
    );

  }

}
