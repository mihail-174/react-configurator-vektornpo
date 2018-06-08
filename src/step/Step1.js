import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

import Item from '../components2/Item';

// import Footer from '../components2/Footer';

// import VacNasos from '../components/VacNasos';
// import PrivodNasosa from '../components/PrivodNasosa';
// import OtkrytieDna from '../components/OtkrytieDna';
// import DopGorlovina from '../components/DopGorlovina';
// import KreplenieCisterny from '../components/KreplenieCisterny';

// const Context = React.createContext()

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


  // {context.state['fields__' + context.state.currentAvto + '__' + field.id]}
  render() {
    // const { data } = this.state;
    const { context } = this.props;
    // let field_config = 'NONE';
    // const list = context.state.fields.map((field) =>
    //   <div>
    //     {context.state['fields__' + context.state.currentAvto + '__' + field.id]}
    //   </div>
    // )
    const list = context.state.fields.map((field, key) =>
      <div key={key} className={'b ' + field.system}>
        <div className='b__title'>{field.name}</div>
        <Item systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + field.id]} context={context} />
      </div>
    );
    // console.log( context.state['fields__' + context.state.currentAvto + '__' + field.id] );

    // const listField = field_config.map((field) =>
    //   <div>
    //     {field.name}
    //   </div>
    // )

    // console.log( context.state );

    // const resultat = this.props.appState.resultat;
    // console.log( resultat );

    // <VacNasos appState={resultat} />
    // <VacNasos updateParentState={this.updateState.bind(this)} />
    return (
      <div className='step step_one'>
        <Header context={context} />
        <div className='content'>
          <h4>STEP1</h4>
          {list}
        </div>
        <Footer context={context} />
      </div>
    );

  }

}

// <Item id={1} context={context} />

// <Footer appState={this.state} setStep={this.setStep} />

// <Context.Consumer>{context => ( <Header context={context} /> )}</Context.Consumer>

// <Context.Consumer>{context => ( <VacNasos context={context} /> )}</Context.Consumer>
// <Context.Consumer>{context => ( <PrivodNasosa context={context} /> )}</Context.Consumer>
// <Context.Consumer>{context => ( <OtkrytieDna context={context} /> )}</Context.Consumer>
// <Context.Consumer>{context => ( <DopGorlovina context={context} /> )}</Context.Consumer>
// <Context.Consumer>{context => ( <KreplenieCisterny context={context} /> )}</Context.Consumer>

// <button style={{
//   backgroundColor: `${context.state.bg}`,
//   color: `${context.state.color}`,
//   border: `${context.state.border}`
// }}>
// {context.state.border}
// </button>

// <VacNasos setAppState={this.props.setAppState} />
