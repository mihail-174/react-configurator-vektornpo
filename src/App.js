import React, { Component } from 'react';
import './css/App.css';

import Step0 from './step/Step0';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';
import Step4 from './step/Step4';

const Context = React.createContext()

// АВТО__ШАГ__ОПЦИЯ

let initialState = {
  currentStep: 1,
  currentAvto: 1,

  machine_names: [
    { id: 1, name: 'АКН', image: 'https://vektornpo.ru/sites/all/themes/vektor/images/config-icon.png' },
    { id: 2, name: 'MB', image: 'https://vektornpo.ru/sites/all/themes/vektor/images/config-icon-mb.png' },
    { id: 3, name: 'АЦН', image: 'https://vektornpo.ru/sites/all/themes/vektor/images/config-icon-acn.png' }
  ],
  steps: [
    { id: 1, name: 'Цистерна и оборудование' },
    // { id: 2, name: 'Комплектация установки' },
    // { id: 3, name: 'Комплектация шасси' },
    // { id: 4, name: 'Готово' }
  ],
  fields__1__1: [
    { id: 1, name: 'Вакуумный насос', system: 'vacuum_pump', type: 'radio' },
    { id: 2, name: 'Открытие дна', system: 'opening_bottom', type: 'radio' },
    { id: 3, name: 'Освещение', system: 'lighting', type: 'radio' },
    { id: 4, name: 'Подогрев от ВС', system: 'heating_from_sun', type: 'radio' }
  ],
  fields__1__1__1: [
    { name: 'KO-505A', subname: 'коммунальный тип 310 куб./час' },
    { name: 'BP-8/3', subname: 'взрывозащищенный компрессор 480 куб./час' },
    { name: 'BK-6М2', subname: 'взрывозащищенный компрессор 240 куб./час' },
    { name: 'PNR.122', subname: 'взрывозащищенный компрессор 730 куб./час' }
  ],
  fields__1__1__2: [
    { name: 'Механическое', subname: 'отделяемое дно, крепится на болты к бочке.' },
    { name: 'Сливной люк', subname: 'на дне бочки диаметром до 500 мм.' }
  ],
  // fields__1__1__2__options: [
  //   {switch_check: true},
  //   {switch_name_on: 'открытие дна'},
  //   {switch_name_off: 'глухая цистерна'}
  // ],
  fields__1__1__2__options: {
    switch_check: true,
    switch_name_on: 'открытие дна',
    switch_name_off: 'глухая цистерна'
  },
  fields__1__1__3: [
    { name: '2 зоны' },
    { name: '4 зоны' }
  ],
  fields__1__1__3__options: {
    switch_check: false,
  },
  fields__1__1__4: [
    { name: 'Внутри цистерны' },
    { name: 'Сбоку цистерны' }
  ],
  fields__1__1__4__options: {
    switch_check: true
  },

  fields__1__2: [],
  fields__1__3: [],

  auto__1__1__val: '',


















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

    // let step;
    // if(this.state.currentStep === 0) {
    //   step = <Context.Consumer>{context => ( <Step0 context={context}/> )}</Context.Consumer>;
    // }
    // if(this.state.currentStep === 1) {
    //   step = <Context.Consumer>{context => ( <Step1 context={context}/> )}</Context.Consumer>;
    // }
    // if(this.state.currentStep === 2) {
    //   step = <Context.Consumer>{context => ( <Step2 context={context}/> )}</Context.Consumer>;
    // }
    // if(this.state.currentStep === 3) {
    //   step = <Context.Consumer>{context => ( <Step3 context={context}/> )}</Context.Consumer>;
    // }

    return (
       <Context.Provider value={{
         state: this.state,
         methods: {
           setAppState: (value) => this.setState(value)
         }
       }}>

        <div className="App">

          <div className="steps">
            {this.state.currentStep === 0 &&
              <Context.Consumer>{context => ( <Step0 context={context}/> )}</Context.Consumer>
            }
            {this.state.currentStep === 1 &&
              <Context.Consumer>{context => ( <Step1 context={context}/> )}</Context.Consumer>
            }
            {this.state.currentStep === 2 &&
              <Context.Consumer>{context => ( <Step2 context={context}/> )}</Context.Consumer>
            }
            {this.state.currentStep === 3 &&
              <Context.Consumer>{context => ( <Step3 context={context}/> )}</Context.Consumer>
            }
            {this.state.currentStep === 4 &&
              <Context.Consumer>{context => ( <Step4 context={context}/> )}</Context.Consumer>
            }
          </div>

          <div className="result">
            <h2>Результат:</h2>
            <pre>
              {JSON.stringify(this.state, "", 4)}
            </pre>
          </div>

        </div>
      {this.props.children}
      </Context.Provider>
    );
  }
  componentDidMount() {
    this.setState({ ...initialState })
  }
}
