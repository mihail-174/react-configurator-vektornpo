import React, { Component } from 'react';
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
      <div className='main__content main__content_two'>

      {()=> ({/*
        <Context.Consumer>{context => ( <Dvigatel context={context} /> )}</Context.Consumer>
        <Context.Consumer>{context => ( <SpalnoeMesto context={context} /> )}</Context.Consumer>
        <Context.Consumer>{context => ( <ZapasnoeKoleso context={context} /> )}</Context.Consumer>
        <Context.Consumer>{context => ( <InstrumentIashchiki context={context} /> )}</Context.Consumer>
        <Context.Consumer>{context => ( <ProtivopodkatnyBrus context={context} /> )}</Context.Consumer>
        <Context.Consumer>{context => ( <ZimniiPaket context={context} /> )}</Context.Consumer>
      */})}

      </div>
      {this.props.children}
      </Context.Provider>
    );

  }

}
