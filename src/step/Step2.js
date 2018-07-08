import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

import ItemRadio from '../components2/ItemRadio';
import ItemCheckbox from '../components2/ItemCheckbox';
import SwitchWithoutName from '../components2/SwitchWithoutName';

export default class Step2 extends Component {

  render() {

    const { context } = this.props;

    const list = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep].map((field, key) =>
      <div key={key} className={'b ' + field.system} data-id={field.id}>
        <div className='b__title'>{field.name}</div>
        {field.switchCheck === true && <SwitchWithoutName switchCheck={field.switchCheck} systemName={field.system} id={field.id} context={context} />}
        {field.switchCheck === false && <SwitchWithoutName switchCheck={field.switchCheck} systemName={field.system} id={field.id} context={context} />}
        {field.type === 'radio' && <ItemRadio id={field.id} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />}
        {field.type === 'checkbox' && <ItemCheckbox checked={field.checked} id={field.id} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />}
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
