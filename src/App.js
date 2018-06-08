import React, { Component } from 'react';

import './css/App.css';
import './css/block.css';
import './css/toggle.css';

import Step0 from './step/Step0';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';

const Context = React.createContext()


// fields__ + selectedAvto + currentStep + idтачки

// АВТО__ОПЦИЯ

let initialState = {
  currentStep: 0,
  currentAvto: 0,
  // selectedAvto: 'АКН',

  machine_names: [
    { id: 1, name: 'АКН', image: 'https://vektornpo.ru/sites/all/themes/vektor/images/config-icon.png' },
    { id: 2, name: 'MB', image: 'https://vektornpo.ru/sites/all/themes/vektor/images/config-icon-mb.png' },
    { id: 3, name: 'АЦН', image: 'https://vektornpo.ru/sites/all/themes/vektor/images/config-icon-acn.png' }
  ],
  // steps__1: 3,
  fields: [
    { id: 1, name: 'Вакуумный насос', system: 'vacuum_pump', type: 'radios' },
    { id: 2, name: 'Привод насоса', system: 'системное_имя2', type: 'radios' },
    { id: 3, name: 'Открытие дна', system: 'системное_имя3', type: 'radios' },
    { id: 4, name: 'Доп. горловина', system: 'системное_имя4', type: 'radios' },
    { id: 5, name: 'Крепление цистерны', system: 'системное_имя5', type: 'radios' },
    { id: 6, name: 'Площадка обслуживания', system: 'системное_имя5', type: 'radios' },
    { id: 7, name: 'Освещение', system: 'системное_имя5', type: 'radios' },
    { id: 8, name: 'Подогрев от ВС', system: 'системное_имя5', type: 'radios' },
    { id: 9, name: 'Исполнение', system: 'системное_имя5', type: 'radios' },
    { id: 10, name: 'Крепление огнетушителя', system: 'системное_имя5', type: 'radios' },
    { id: 11, name: 'Калибровка', system: 'системное_имя5', type: 'radios' },
    { id: 12, name: 'Двигатель', system: 'системное_имя5', type: 'radios' },
    { id: 13, name: 'Спальное место', system: 'системное_имя5', type: 'radios' },
    { id: 14, name: 'Запасное колесо', system: 'системное_имя5', type: 'radios' },
    { id: 15, name: 'Инстр. ящики', system: 'системное_имя5', type: 'radios' },
    { id: 16, name: 'Противоподк. брус', system: 'системное_имя5', type: 'radios' },
    { id: 17, name: 'Зимний пакет', system: 'системное_имя5', type: 'radios' },
  ],


  fields__1__1: [
    { name: 'KO-505A', subname: 'коммунальный тип 310 куб./час' },
    { name: 'BP-8/3', subname: 'взрывозащищенный компрессор 480 куб./час' },
    { name: 'BK-6М2', subname: 'взрывозащищенный компрессор 240 куб./час' },
    { name: 'PNR.122', subname: 'взрывозащищенный компрессор 730 куб./час' }
  ],
  fields__1__2: [
    { name: 'Шкиво-ременной' },
    { name: 'Карданный' }
  ],
  fields__1__3: [
    { name: 'Механическое', subname: 'отделяемое дно, крепится на болты к бочке.' },
    { name: 'Сливной люк', subname: 'на дне бочки диаметром до 500 мм.' }
  ],
  fields__1__4: [
    { name: 'Нужна' },
    { name: 'Не нужна' }
  ],
  fields__1__5: [
    { name: 'Поясное' },
    { name: 'Статические опоры' }
  ],


  fields__2__1: [
    { name: 'KO-505A', subname: 'коммунальный тип 310 куб./час' },
    { name: 'BP-8/3', subname: 'взрывозащищенный компрессор 480 куб./час' },
    { name: 'PNR.122', subname: 'взрывозащищенный компрессор 730 куб./час' }
  ],
  fields__2__2: [
    { name: 'Шкиво-ременной' },
    { name: 'Карданный' }
  ],
  fields__2__3: [
    { name: 'Механическое', subname: 'отделяемое дно, крепится на болты к бочке.' },
    { name: 'Сливной люк', subname: 'на дне бочки диаметром до 500 мм.' }
  ],
  fields__2__4: [
    { name: 'Нужна' },
    { name: 'Не нужна' }
  ],
  fields__2__5: [
    { name: 'Поясное' },
    { name: 'Статические опоры' }
  ]


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
