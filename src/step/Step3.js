import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

import ItemRadio from '../components2/ItemRadio';
import ItemCheckbox from '../components2/ItemCheckbox';
import ItemCheckboxMulti from '../components2/ItemCheckboxMulti';

// import Dvigatel from '../components/Dvigatel.js';
// import SpalnoeMesto from '../components/SpalnoeMesto.js';
// import ZapasnoeKoleso from '../components/ZapasnoeKoleso.js';
// import InstrumentIashchiki from '../components/InstrumentIashchiki.js';
// import ProtivopodkatnyBrus from '../components/ProtivopodkatnyBrus.js';
// import ZimniiPaket from '../components/ZimniiPaket.js';

// const Context = React.createContext()

export default class Step3 extends Component {
  render() {
    const { context } = this.props;
    const list = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep].map((field, key) =>
      <div key={key} className={'b ' + field.system}>
        <div className='b__title'>{field.name}</div>
        {field.type === 'radio' && <ItemRadio id={field.id} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />}
        {field.type === 'checkbox' && <ItemCheckbox id={field.id} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />}
        {field.type === 'checkboxmulti' && <ItemCheckboxMulti id={field.id} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />}
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
