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

// АВТО__ШАГ__ОПЦИЯ

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
  fields__1__1: [
    { id: 1, name: 'Вакуумный насос', system: 'vacuum_pump', type: 'radio' },
    { id: 2, name: 'Привод насоса', system: 'pump_drive', type: 'radio' },
    { id: 3, name: 'Открытие дна', system: 'opening_bottom', type: 'radio' },
    { id: 4, name: 'Доп. горловина', system: 'additional_neck', type: 'radio' },
    { id: 5, name: 'Крепление цистерны', system: 'mount_tank', type: 'radio' }
  ],
  fields__1__2: [
    { id: 6, name: 'Площадка обслуживания', system: 'service_platform', type: 'radio' },
    { id: 7, name: 'Освещение', system: 'lighting', type: 'radio' },
    { id: 8, name: 'Подогрев от ВС', system: 'heating_from_sun', type: 'radio' },
    { id: 9, name: 'Исполнение', system: 'execution', type: 'checkbox' },
    { id: 10, name: 'Крепление огнетушителя', system: 'fire_extinguisher_mounting', type: 'radio' },
    { id: 11, name: 'Калибровка', system: 'calibration', type: 'checkbox' }
  ],
  fields__1__3: [
    { id: 12, name: 'Двигатель', system: 'engine', type: 'radio' },
    { id: 13, name: 'Спальное место', system: 'berth', type: 'checkbox' },
    { id: 14, name: 'Запасное колесо', system: 'spare_wheel', type: 'radio' },
    { id: 15, name: 'Инстр. ящики', system: 'tool_box', type: 'radio' },
    { id: 16, name: 'Противоподк. брус', system: 'anti_roll_bar', type: 'radio' },
    { id: 17, name: 'Зимний пакет', system: 'winter_package', type: 'checkbox' }
  ],

  fields__2__1: [],
  fields__2__2: [],
  fields__2__3: [],

  fields__3__1: [],
  fields__3__2: [],
  fields__3__3: [],


  fields__1__1__1: [
    { name: 'KO-505A', subname: 'коммунальный тип 310 куб./час' },
    { name: 'BP-8/3', subname: 'взрывозащищенный компрессор 480 куб./час' },
    { name: 'BK-6М2', subname: 'взрывозащищенный компрессор 240 куб./час' },
    { name: 'PNR.122', subname: 'взрывозащищенный компрессор 730 куб./час' }
  ],
  fields__1__1__2: [
    { name: 'Шкиво-ременной' },
    { name: 'Карданный' }
  ],
  fields__1__1__3: [
    { name: 'Механическое', subname: 'отделяемое дно, крепится на болты к бочке.' },
    { name: 'Сливной люк', subname: 'на дне бочки диаметром до 500 мм.' }
  ],
  fields__1__1__4: [
    { name: 'Нужна' },
    { name: 'Не нужна' }
  ],
  fields__1__1__5: [
    { name: 'Поясное' },
    { name: 'Статические опоры' }
  ],
  fields__1__2__6: [
    { name: 'Полноценная' },
    { name: 'Лестницы к горловинам' }
  ],
  fields__1__2__7: [
    { name: '2 зоны' },
    { name: '4 зоны' }
  ],
  fields__1__2__8: [
    { name: 'Внутри цистерны' },
    { name: 'Сбоку цистерны' }
  ],
  fields__1__2__9: [
    { name: 'Огнеопасное', subname: 'доработки установки и шасси под перевозку ЛВЖ' }
  ],
  fields__1__2__10: [
    { name: 'Пластиковые короба' },
    { name: 'Кольца на цистерне' }
  ],
  fields__1__2__11: [
    { name: 'Калибровка', subname: 'цистерны с выдачей соответствующих документов' }
  ],
  fields__1__3__12: [
    { name: '300 л. с.', subname: 'КАМАЗ-740.662-300' },
    { name: '280 л. с.', subname: 'КАМАЗ-740.622-280' }
  ],
  fields__1__3__13: [
    { name: 'Спальное место', subname: 'в кабине водителя' }
  ],
  fields__1__3__14: [
    { name: 'За кабиной' },
    { name: 'На заднем свесе' }
  ],
  fields__1__3__15: [
    { name: '1 ящик' },
    { name: '2 ящика' }
  ],
  fields__1__3__16: [
    { name: 'Классический (1 положение)' },
    { name: 'Регулируемый (2 положения)' }
  ],
  fields__1__3__17: [
    { name: 'Автономн. отопитель' },
    { name: 'Фильтр SEPAR2000' },
    { name: 'Сумка - ADR' },
    { name: 'Утепление кабины и моторного отсека' },
    { name: 'Утепление аккумуляторного отсека' }
  ],


  fields__2__1__1: [
    { name: 'KO-505A', subname: 'коммунальный тип 310 куб./час' },
    { name: 'BP-8/3', subname: 'взрывозащищенный компрессор 480 куб./час' },
    { name: 'PNR.122', subname: 'взрывозащищенный компрессор 730 куб./час' }
  ],
  fields__2__1__2: [
    { name: 'Шкиво-ременной' },
    { name: 'Карданный' }
  ],
  fields__2__1__3: [
    { name: 'Механическое', subname: 'отделяемое дно, крепится на болты к бочке.' },
    { name: 'Сливной люк', subname: 'на дне бочки диаметром до 500 мм.' }
  ],
  fields__2__1__4: [
    { name: 'Нужна' },
    { name: 'Не нужна' }
  ],
  fields__2__1__5: [
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
