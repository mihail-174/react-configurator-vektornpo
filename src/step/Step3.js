import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

import Item from '../components2/Item';

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
        <Item type={field.type} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />
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
