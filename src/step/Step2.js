import React, { Component } from 'react';
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
      <div className='main__content main__content_two'>

      {()=> ({/*
        <Context.Consumer>{context => ( <PloshchadkaObsluzhivaniia context={context} /> )}</Context.Consumer>
        <Context.Consumer>{context => ( <Osveshchenie context={context} /> )}</Context.Consumer>
        <Context.Consumer>{context => ( <PodogrevOtVs context={context} /> )}</Context.Consumer>
        <Context.Consumer>{context => ( <Ispolnenie context={context} /> )}</Context.Consumer>
        <Context.Consumer>{context => ( <KreplenieOgnetushitelia context={context} /> )}</Context.Consumer>
        <Context.Consumer>{context => ( <Kalibrovka context={context} /> )}</Context.Consumer>
      */})}

      </div>
      {this.props.children}
      </Context.Provider>
    );

  }

}
