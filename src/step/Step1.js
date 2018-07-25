import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

import ItemRadio from '../components3/ItemRadio';
import Switch from '../components3/Switch';

import '../css/B.css';
import '../css/checkbox.css';

function keyExists(key, search) {
    if (!search || (search.constructor !== Array && search.constructor !== Object)) {
        return false;
    }
    for (var i = 0; i < search.length; i++) {
        if (search[i] === key) {
            return true;
        }
    }
    return key in search;
}

export default class Step1 extends Component {

  render() {
    const { context } = this.props,
      currentAvto = context.state.currentAvto,
      currentStep = context.state.currentStep,
      fields__x__x = context.state['fields__' + currentAvto + '__' + currentStep];

    const list = fields__x__x.map((field, key) =>
      <div key={key} className={'b ' + field.systemName}>
        <div className='b__hd'>
          <div className='b__title'>{field.name}</div>
          {keyExists('switch_check', context.state["fields__" + currentAvto + "__" + currentStep + "__" + parseInt(key+1,0) + "__options"]) && <Switch context={context} systemName={field.systemName} idBlock={field.id} />}
        </div>
        <ItemRadio context={context} systemName={field.systemName} idBlock={field.id} />
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
