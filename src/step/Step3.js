import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

// import Dvigatel from '../components/Dvigatel.js';
// import SpalnoeMesto from '../components/SpalnoeMesto.js';
// import ZapasnoeKoleso from '../components/ZapasnoeKoleso.js';
// import InstrumentIashchiki from '../components/InstrumentIashchiki.js';
// import ProtivopodkatnyBrus from '../components/ProtivopodkatnyBrus.js';
// import ZimniiPaket from '../components/ZimniiPaket.js';

const Context = React.createContext()

export default class Step3 extends Component {
  render() {
    const { context } = this.props;

    return (
      <Context.Provider value={{context}}>
      <div className='step step_three'>
        <Header context={context} />
        <div className='content'>
          STEP3
        </div>
        <Footer context={context} />
      </div>
      {this.props.children}
      </Context.Provider>
    );

  }

}
