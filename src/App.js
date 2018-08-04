import React, { Component } from 'react';
import './scss/App.scss';

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
    { id: 1, name: 'АКН', image: 'akn.jpg', ico: 'akn.png' },
    { id: 2, name: 'MB', image: 'mb.jpg', ico: 'mb.png' },
    { id: 3, name: 'АЦН', image: 'acn.jpg', ico: 'acn.png' }
  ],
  steps: [
    { id: 1, name: 'Цистерна и оборудование' },
    { id: 2, name: 'Комплектация установки' },
    { id: 3, name: 'Комплектация шасси' },
    { id: 4, name: 'Готово' }
  ],
  fields__1__1: [
    { id: 1, name: 'Вакуумный насос', systemName: 'vacuum_pump', type: 'radio' },
    { id: 2, name: 'Открытие дна', systemName: 'opening_bottom', type: 'radio' },
    { id: 3, name: 'Освещение', systemName: 'lighting', type: 'radio' },
    { id: 4, name: 'Подогрев от ВС', systemName: 'heating_from_sun', type: 'radio' }
  ],
  fields__1__1__1: [
    { name: 'KO-505A', subName: 'коммунальный тип 310 куб./час' },
    { name: 'BP-8/3', subName: 'взрывозащищенный компрессор 480 куб./час' },
    { name: 'BK-6М2', subName: 'взрывозащищенный компрессор 240 куб./час' },
    { name: 'PNR.122', subName: 'взрывозащищенный компрессор 730 куб./час' }
  ],
  fields__1__1__2: [
    { name: 'Механическое', subName: 'отделяемое дно, крепится на болты к бочке.', ico: true, url: '05.png' },
    { name: 'Сливной люк', subName: 'на дне бочки диаметром до 500 мм.', ico: true, url: '04.png' }
  ],
  fields__1__1__2__options: {
    switch_check: true,
    switch_name_on: 'открытие дна',
    switch_name_off: 'глухая цистерна'
  },
  fields__1__1__3: [
    { name: '2 зоны', ico: true, url: '14.png' },
    { name: '4 зоны', ico: true, url: '15.png' }
  ],
  fields__1__1__3__options: {
    switch_check: false
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

  val__1: null,
  val__2: null,
  val__3: null,
  val__4: null,



  // fields__1__1__2__options: [
  //   {switch_check: true},
  //   {switch_name_on: 'открытие дна'},
  //   {switch_name_off: 'глухая цистерна'}
  // ],
  // fields__1__1__3__options: [
  //   {switch_check: true}
  // ],
  // fields__1__1__4__options: [
  //   {switch_check: false}
  // ],

















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
