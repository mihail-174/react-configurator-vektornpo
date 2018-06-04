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

import ShooseAvto from './components/ShooseAvto';

import Welcome from './components/Welcome';
import List1 from './components/List1';
import List2 from './components/List2';
import Comments from './components/Comments';
import List4 from './components/List4';
import List3 from './components/List3';
import Form from './components/Form';
import Form2 from './components/Form2';

const Context = React.createContext()

let initialState = {
  currentStep: 1,
  selectedAvto: 0,
  vacNasos: {
    name: '',
    selected: '',
    value: ''
  },
  privodNasosa: {
    name: 'Привод насоса',
    selected: '',
    value: ''
  },
  otkrytieDna: {
    name: 'Открытие дна',
    selected: '',
    value: '',
    checked: true
  },
  dopGorlovina: {
    name: 'Доп. горловина',
    selected: '',
    value: ''
  },
  kreplenieСisterny: {
    name: 'Крепление цистерны',
    selected: '',
    value: ''
  },
  ploshchadkaObsluzhivaniia: {
    name: 'Площадка обслуживания',
    selected: '',
    value: ''
  },
  osveshchenie: {
    name: 'Освещение',
    selected: '',
    value: '',
    checked: false
  },
  podogrevOtVs: {
    name: 'Подогрев от ВС',
    selected: '',
    value: '',
    checked: false
  },
  ispolnenie: {
    name: 'Исполнение',
    checked: true
  },
  kreplenieOgnetushitelia: {
    name: 'Крепление огнетушителя',
    selected: '',
    value: ''
  },
  kalibrovka: {
    name: 'Калибровка',
    checked: false
  },
  dvigatel: {
    name: 'Двигатель',
    selected: '',
    value: ''
  },
  spalnoeMesto: {
    name: 'Спальное место',
    checked: false
  },
  zapasnoeKoleso: {
    name: 'Запасное колесо',
    selected: '',
    value: ''
  },
  instrumentIashchiki: {
    name: 'Инстр. ящики',
    selected: '',
    value: '',
    checked: true
  },
  protivopodkatnyBrus: {
    name: 'Противоподк. брус',
    selected: '',
    value: ''
  },



  zimniiPaket: {
    name: 'Зимний пакет'
  },
  avtonomnOtopitel: {
    name: 'Автономн. отопитель',
    checked: true
  },
  filtrSEPAR2000: {
    name: 'Фильтр SEPAR2000',
    checked: true
  },
  sumkaADR: {
    name: 'Сумка - ADR',
    checked: false
  },
  uteplenieKabinyMotornogoOtseka: {
    name: 'Утепление кабины и моторного отсека',
    checked: false
  },
  uteplenieAkkumuliatornogoOtseka: {
    name: 'Утепление аккумуляторного отсека',
    checked: false
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    // this.state = initialState;
    this.state = {}
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
    const numbers = ['элемент 1', 'элемент 2', 'элемент 3', 'элемент 4', 'элемент 5'];
    // console.log( 'ТЕКУЩИЙ ШАГ ' + this.state.currentStep );


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

       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <Welcome name="Уася" />
       </header>
       <div className="none">
         <List1 numbers={numbers} />
         <hr/>
         <List2 />
         <hr/>
         <Comments />
         <hr/>
         <Form2 />
         <hr/>
         <Form />
         <List3 />
         <List4 />
       </div>


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

      {this.props.children}
      </Context.Provider>
    );
  }
  componentDidMount() {
    this.setState({ ...initialState })
  }
}
