import React, { Component } from 'react';
// import VacNasos from '../components/VacNasos';
// import PrivodNasosa from '../components/PrivodNasosa';
// import OtkrytieDna from '../components/OtkrytieDna';
// import DopGorlovina from '../components/DopGorlovina';
// import KreplenieCisterny from '../components/KreplenieCisterny';

const Context = React.createContext()

export default class Step1 extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     listDataFromChild: null
  //   };
  // }

  // updateState (data) {
  //   this.setState(data);
  // }


  render() {
    // const { data } = this.state;
    const { context } = this.props;
    // console.log( context.state );

    // const resultat = this.props.appState.resultat;
    // console.log( resultat );

    // <VacNasos appState={resultat} />
    // <VacNasos updateParentState={this.updateState.bind(this)} />
    return (
      <Context.Provider value={{context}}>
      <div className='main__content main__content_one'>

        {()=> ({/*
          <Context.Consumer>{context => ( <VacNasos context={context} /> )}</Context.Consumer>
          <Context.Consumer>{context => ( <PrivodNasosa context={context} /> )}</Context.Consumer>
          <Context.Consumer>{context => ( <OtkrytieDna context={context} /> )}</Context.Consumer>
          <Context.Consumer>{context => ( <DopGorlovina context={context} /> )}</Context.Consumer>
          <Context.Consumer>{context => ( <KreplenieCisterny context={context} /> )}</Context.Consumer>
        */})}

      </div>
      {this.props.children}
      </Context.Provider>
    );

  }

}

// <button style={{
//   backgroundColor: `${context.state.bg}`,
//   color: `${context.state.color}`,
//   border: `${context.state.border}`
// }}>
// {context.state.border}
// </button>

// <VacNasos setAppState={this.props.setAppState} />
