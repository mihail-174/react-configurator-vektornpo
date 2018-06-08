import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

// import PloshchadkaObsluzhivaniia from '../components/PloshchadkaObsluzhivaniia.js';
// import Osveshchenie from '../components/Osveshchenie.js';
// import PodogrevOtVs from '../components/PodogrevOtVs.js';
// import Ispolnenie from '../components/Ispolnenie.js';
// import KreplenieOgnetushitelia from '../components/KreplenieOgnetushitelia.js';
// import Kalibrovka from '../components/Kalibrovka';

const Context = React.createContext()

export default class Step2 extends Component {
  render() {
    const { context } = this.props;
    return (
      <Context.Provider value={{context}}>
      <div className='step step_two'>
        <Header context={context} />
        <div className='content'>
          STEP2
        </div>
        <Footer context={context} />
      </div>
      {this.props.children}
      </Context.Provider>
    );

  }

}
