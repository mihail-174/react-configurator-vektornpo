import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

import Item from '../components2/Item';

// import VacNasos from '../components/VacNasos';
// import PrivodNasosa from '../components/PrivodNasosa';
// import OtkrytieDna from '../components/OtkrytieDna';
// import DopGorlovina from '../components/DopGorlovina';
// import KreplenieCisterny from '../components/KreplenieCisterny';

// const Context = React.createContext()

export default class Step1 extends Component {

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
