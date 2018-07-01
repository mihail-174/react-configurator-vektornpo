import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

import ItemRadio from '../components2/ItemRadio';
import SwitchWithName from '../components2/SwitchWithName';

// import VacNasos from '../components/VacNasos';
// import PrivodNasosa from '../components/PrivodNasosa';
// import OtkrytieDna from '../components/OtkrytieDna';
// import DopGorlovina from '../components/DopGorlovina';
// import KreplenieCisterny from '../components/KreplenieCisterny';

// const Context = React.createContext()

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

// {field.options.checkbox && <Checkbox checkbox={field.checkbox} systemName={field.system} context={context} />}
// {!isEmpty(field.options) && <Checkbox options={field.options} systemName={field.system} context={context} />}
// <Checkbox systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id + '__options']} context={context} />
export default class Step1 extends Component {

  render() {

    const { context } = this.props;
    // {!isEmpty(context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id + '__options']) && <Checkbox systemName={field.system} id={field.id} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id + '__options']} context={context} /> }
    // {!isEmpty(context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id + '__options']) &&  }
    // <SwitchWithName switchCheck={field.switchCheck} systemName={field.system} id={field.id} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id + '__options']} context={context} />

    const list = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep].map((field, key) =>
      <div key={key} className={'b ' + field.system} data-id={field.id}>
        <div className='b__title'>{field.name}</div>
        {field.switchCheck && <SwitchWithName switchCheck={field.switchCheck} switchCheckName1={field.switchCheckName1} switchCheckName2={field.switchCheckName2} systemName={field.system} id={field.id} context={context} />}
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
