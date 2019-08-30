import React, { Component } from 'react';
import './scss/App.scss';
import './scss/item.scss';

import Step0 from './step/Step0';
import Contents from './components/Contents';

const Context = React.createContext()

// АВТО__ШАГ__ОПЦИЯ

let initialState = {

    selectedValue3: {
        // step_3__group_5__checkbox_0__value: false,
        // step_3__group_5__checkbox_1__value: true,
        // step_3__group_5__checkbox_2__value: false,
        // step_3__group_5__checkbox_3__value: true,
        // step_3__group_5__checkbox_4__value: false,
        // step_3__group_5__checkbox_multi: [
        //     "Фильтр SEPAR2000",
        //     "Утепление кабины и моторного отсека"
        // ]
        // step_1__group_0__radios__name: null,
        // step_1__group_0__radios__value: null,
        // step_1__group_1__counter: null,
        // step_1__group_1__select_0__name: null,
        // step_1__group_1__select_0__value: null,
        // step_1__group_2__radios__name: null,
        // step_1__group_2__radios__value: null,
        // step_1__group_3__select_0__name: null,
        // step_1__group_3__select_0__value: null,
        // step_1__group_4__checkbox__value: false,
        // step_1__group_5__select_0__name: null,
        // step_1__group_5__select_0__value: null,
        // step_1__group_5__select_1__name: null,
        // step_1__group_5__select_1__value: null,
        // step_1__group_5__select_2__name: null,
        // step_1__group_5__select_2__value: null,
        // step_1__group_6__select_0__name: null,
        // step_1__group_6__select_0__value: null,
        // step_1__group_6__select_1__name: null,
        // step_1__group_6__select_1__value: null,
        // step_1__group_7__radios__name: null,
        // step_1__group_7__radios__value: null,
        // step_1__group_8__radios__name: null,
        // step_1__group_8__radios__value: null
    },

    currentStep: 0,
    currentStepPrev: 0,
    currentAvto: 0,
    steps: [
        { id: 1, name: 'Цистерна и оборудование' },
        { id: 2, name: 'Комплектация установки' },
        { id: 3, name: 'Комплектация шасси' },
        { id: 4, name: 'Готово' }
    ],
    listCar: [],
    car: {},
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
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
            {this.state.currentStep > 0 &&
                <Context.Consumer>{context => ( <Contents context={context}/> )}</Context.Consumer>
            }
          </div>

          {/*
          <div className="result">
              <h2>Результат:</h2>
              <pre>
                  {JSON.stringify(this.state, "", 4)}
              </pre>
          </div>
          */}

        </div>
      {this.props.children}
      </Context.Provider>
    );
  }
  componentDidMount() {
    this.setState({ ...initialState });
  }

}
