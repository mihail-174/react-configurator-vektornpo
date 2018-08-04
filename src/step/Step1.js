import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

import ItemRadio from '../components3/ItemRadio';
import Toggle from '../components3/Toggle';

import '../scss/B.scss';

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
      state = context.state,
      currentAvto = state.currentAvto,
      currentStep = state.currentStep,
      fields__x__x = state['fields__' + currentAvto + '__' + currentStep];

    const list = fields__x__x.map((field, key) =>
      <div key={key} className={'b ' + field.systemName}>
        <div className='b__hd'>
          <div className='b__title'>{field.name}</div>
          {keyExists('switch_check', context.state["fields__" + currentAvto + "__" + currentStep + "__" + parseInt(key+1,0) + "__options"]) && <Toggle context={context} systemName={field.systemName} idBlock={field.id} />}
        </div>
        <div className={
          keyExists('switch_check', context.state["fields__" + currentAvto + "__" + currentStep + "__" + field.id + "__options"])
          ?
            context.state["fields__" + currentAvto + "__" + currentStep + "__" + field.id + "__options"].switch_check
            ?
            'b__cont'
            :
            'b__cont disabled'
          :
          'b__cont'
        }>
          <ItemRadio context={context} systemName={field.systemName} idBlock={field.id} />
        </div>
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
