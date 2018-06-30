import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

import ItemRadio from '../components2/ItemRadio';
import ItemCheckbox from '../components2/ItemCheckbox';
import Checkbox2 from '../components2/Checkbox2';

// import PloshchadkaObsluzhivaniia from '../components/PloshchadkaObsluzhivaniia.js';
// import Osveshchenie from '../components/Osveshchenie.js';
// import PodogrevOtVs from '../components/PodogrevOtVs.js';
// import Ispolnenie from '../components/Ispolnenie.js';
// import KreplenieOgnetushitelia from '../components/KreplenieOgnetushitelia.js';
// import Kalibrovka from '../components/Kalibrovka';

// const Context = React.createContext()

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

export default class Step2 extends Component {

  render() {

    const { context } = this.props;
    // {!isEmpty(context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id + '__options']) && <Checkbox2 systemName={field.system} id={field.id} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id + '__options']} context={context} /> }

    const list = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep].map((field, key) =>
      <div key={key} className={'b ' + field.system} data-id={field.id}>
        <div className='b__title'>{field.name}</div>
        {field.type === 'radio' && <ItemRadio id={field.id} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />}
        {field.type === 'checkbox' && <ItemCheckbox id={field.id} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />}
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
