import React, { Component } from 'react';

import logo from './logo.svg';
import './css/App.css';
import './css/block.css';
import './css/toggle.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';

import ShooseAvto from './components2/ShooseAvto';

import Welcome from './components/Welcome';

const Context = React.createContext()


// fields__ + selectedAvto + currentStep + idтачки

let initialState = {
  currentStep: 1,
  currentAvto: 0,
  // selectedAvto: 'АКН',

  machine_names: [
    { id: 1, name: 'АКН', image: 'https://vektornpo.ru/sites/all/themes/vektor/images/config-icon.png' },
    { id: 2, name: 'MB', image: 'https://vektornpo.ru/sites/all/themes/vektor/images/config-icon-mb.png' },
    { id: 3, name: 'АЦН', image: 'https://vektornpo.ru/sites/all/themes/vektor/images/config-icon-acn.png' },
  ],
  // steps__1: 3,
  // fields: [
  //   { id: 1, name: 'Вакуумный насос', type: 'radios' },
  //   { id: 2, name: 'Привод насоса', type: 'radios' },
  //   { id: 3, name: 'Открытие дна', type: 'radios' },
  //   { id: 4, name: 'Доп. горловина', type: 'radios' },
  //   { id: 5, name: 'Крепление цистерны', type: 'radios' },
  // ],
  // fields__1__1__1: { name: 'KO-505A', descr: 'коммунальный тип 310 куб./час' }


}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
    // this.state = {}
    this.setStep = this.setStep.bind(this);
    this.setAppState = this.setAppState.bind(this);
  }
  setAppState(newState) {
    this.setState(newState);
  }
  setStep(e) {
    e.preventDefault();
    let step = parseInt( e.currentTarget.getAttribute('data-step') , 0 );
    this.setState({ currentStep: step});
  }
  render() {
    // const { context } = this.props;

    let step;
    if(this.state.currentStep === 1) {
      step = <Context.Consumer>{context => ( <Step1 context={context}/> )}</Context.Consumer>;
      // step = <Step1 setAppState={this.setAppState} appState={this.state}/>;
    }
    if(this.state.currentStep === 2) {
      step = <Context.Consumer>{context => ( <Step2 context={context}/> )}</Context.Consumer>;
      // step = <Step2/>;
    }
    if(this.state.currentStep === 3) {
      step = <Context.Consumer>{context => ( <Step3 context={context}/> )}</Context.Consumer>;
      // step = <Step3/>;
    }

    return (
       <Context.Provider value={{
         state: this.state,
         methods: {
           setAppState: (value) => this.setState(value)
         }
       }}>

       <header>
         <img src={logo} className="App-logo" alt="logo" />
         <Welcome name="Уася" />
       </header>

       <main>

          <div className="App">
            <Context.Consumer>{context => ( <ShooseAvto context={context} /> )}</Context.Consumer>
            <Context.Consumer>{context => ( <Header context={context} /> )}</Context.Consumer>
            <div className="main">
              {step}
            </div>
            <Footer appState={this.state} setStep={this.setStep} />
          </div>

          <div className="result">
            <h2>Результат:</h2>
            <pre>
              {JSON.stringify(this.state, "", 4)}
            </pre>
          </div>

       </main>

      {this.props.children}
      </Context.Provider>
    );
  }
  componentDidMount() {
    this.setState({ ...initialState })
  }
}
