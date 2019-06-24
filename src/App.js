import React, { Component } from 'react';
import './scss/App.scss';

import Step0 from './step/Step0';
import Contents from './components/Contents';
import Loading from './components/Loading.js';

const Context = React.createContext()

// АВТО__ШАГ__ОПЦИЯ

let initialState = {
    // ajaxStatus: null,
    // ajaxLoaded: false,
    // ajaxError: false,
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
    selectedValue: [
    ],

    // itemValue_0: null,
    // itemName_0: null,
    //
    // itemValue_1: null,
    // itemName_1: null,
    //
    // itemValue_2: null,
    // itemName_2: null,
    //
    // itemValue_3: null,
    // itemName_3: null,
    //
    // itemValue_4: null,
    // itemName_4: null,
    //
    // itemValue_5: null,
    // itemName_5: null,
    //
    // itemValue_6: null,
    // itemName_6: null,
    //
    // itemValue_7: null,
    // itemName_7: null,
    //
    // itemValue_8: null,
    // // itemName_8: null,
    //
    // itemValue_9: null,
    // itemName_9: null,
    //
    // itemValue_10: null,
    // // itemName_10: null,
    //
    // itemValue_11: null,
    // itemName_11: null,
    //
    // itemValue_12: null,
    // itemName_12: null,
    //
    // itemValue_13: null,
    // itemName_13: null,
    //
    // itemValue_14: null,
    // itemName_14: null,
    //
    // itemValue_15: null,
    // itemName_15: null,
    //
    // itemName_16: null,
    //
    // itemValue_16_0: null,
    // itemValue_16_1: null,
    // itemValue_16_2: null,
    // itemValue_16_3: null,
    // itemValue_16_4: null,

    car: {},

    // result: [
    //     { valBlock__0: null },
    //     { valBlock__1: null },
    //     { valBlock__2: null },
    //     { valBlock__3: null },
    //     { valBlock__4: null }
    // ],





  // fields__1__1: [
  //   { id: 1, name: 'Вакуумный насос', systemName: 'vacuum-pump', type: 'radio' },
  //   { id: 2, name: 'Привод насоса', systemName: 'pump-drive', type: 'radio' },
  //   { id: 3, name: 'Открытие дна', systemName: 'opening-bottom', type: 'radio' },
  //   { id: 4, name: 'Доп. горловина', systemName: 'extras-neck', type: 'radio' },
  //   { id: 5, name: 'Крепление цистерны', systemName: 'securing-tank', type: 'radio' }
  // ],
  // fields__1__1__1: [
  //   {
  //     name: 'KO-505A',
  //     subName: 'коммунальный тип 310 куб./час',
  //     tooltip: 'Дешевый и неприхотливый в обслуживании, легкодоступный в регионах. Наличие запчастей. Относительно невысокая надежность. Не безопасен при работе с ЛВЖ.'
  //   },
  //   {
  //     name: 'BP-8/3',
  //     subName: 'взрывозащищенный компрессор 480 куб./час',
  //     tooltip: 'Более надежный чем КО-505А и более производительный. Более дорогой и дороже в обслуживании. Относительно безопасен при работе с ЛВЖ.'
  //   },
  //   {
  //     name: 'BK-6М2',
  //     subName: 'взрывозащищенный компрессор 240 куб./час',
  //     tooltip: 'Взрывозащищенный компрессор. Менее производительный. Очень безопасный с ЛВЖ. Дорогой, дорогие запчасти и обслуживание. Низкая доступность в регионах.'
  //   },
  //   {
  //     name: 'PNR.122',
  //     subName: 'взрывозащищенный компрессор 730 куб./час',
  //     tooltip: 'Взрывозащищенный компрессор. Самый производительный и надежный. Практически не требует техобслуживания на весь срок эксплуатации. Закрытая система смазки. Абсолютно безопасен с ЛВЖ.'
  //    }
  // ],
  // fields__1__1__2: [
  //   {
  //     name: 'Шкиво-ременной',
  //     tooltip: `<strong>Достоинства:</strong>
  //               <ul>
  //                 <li>безопасен для коробки отбора мощности и КП;</li>
  //                 <li>удобное верхнее расположение насоса над рамой для сервисного обслуживания и ремонта.</li>
  //               </ul>
  //               <strong>Недостатки:</strong>
  //               <ul>
  //                 <li>в холодное время из-за недостаточной натяжки ремня возможна задержка при выходе на рабочий режим насоса;</li>
  //                 <li>требуется периодическая натяжка и замена ремней.</li>
  //               </ul>`
  //   },
  //   {
  //     name: 'Карданный',
  //     tooltip: `<strong>Достоинства:</strong>
  //               <ul>
  //                 <li>моментальный выход на рабочий режим;</li>
  //                 <li>более надежный и не требующий обслуживания.</li>
  //               </ul>
  //               <strong>Недостатки:</strong>
  //               <ul>
  //                 <li>опасен при заклинивании насоса (возможен разрыв КОМ и повреждение КПП);</li>
  //                 <li>нижнее расположение насоса под рамой шасси (не очень удобно для сервисного обслуживания и ремонта).</li>
  //               </ul>`
  //   }
  // ],
  // fields__1__1__3: [
  //   {
  //     name: 'Механическое',
  //     subName: 'отделяемое дно, крепится на болты к бочке.',
  //     ico: true,
  //     url: '05.png',
  //     tooltip: `<strong>Достоинства:</strong>
  //               <ul>
  //               <li>полноценная возможность проведения сервисных и ремонтных работ, очистки цистерны;</li>
  //               <li>возможность проведения дополнительной антикоррозийной обработки цистерны;</li>
  //               <li>сохранение торосферической формы цистерны;</li>
  //               <li>цистерна остается стабильной к вакуумным нагрузкам;</li>
  //               <li>срок эксплуатации не снижае</li>
  //               </ul>`
  //   },
  //   {
  //     name: 'Сливной люк',
  //     subName: 'на дне бочки диаметром до 500 мм.',
  //     ico: true,
  //     url: '04.png',
  //     tooltip: `<strong>Достоинства:</strong>
  //               <ul>
  //               <li>дает возможность очистки цистерны от донных отложений и контроля состояния внутри емкости;</li>
  //               <li>этот вариант дешевле, чем открывающееся дно;</li>
  //               </ul>
  //               <strong>Недостатки:</strong>
  //               <ul>
  //               <li>не очень удобен для обслуживающего оператора;</li>
  //               <li>эта доработка нарушает торосферическую форму заднего дна;</li>
  //               <li>бочка выдерживает меньшие вакуумные нагрузки;</li>
  //               <li>срок эксплуатации цистерны сни</li>
  //               </ul>`
  //   }
  // ],
  // fields__1__1__3__options: {
  //   switch_check: true,
  //   switch_name_on: 'открытие дна',
  //   switch_name_off: 'глухая цистерна'
  // },
  // fields__1__1__4: [
  //   {
  //     name: 'Нужна',
  //     ico: true,
  //     url: '01.png',
  //     tooltip: 'Даёт возможность заполнять цистерну сверху, что позволит использовать вакуумный агрегат как простую автоцистерну.'
  //   },
  //   {
  //     name: 'Не нужна',
  //     ico: true,
  //     url: '02.png'
  //   }
  // ],
  // fields__1__1__5: [
  //   {
  //     name: 'Поясное',
  //     ico: true,
  //     url: '03.png',
  //     tooltip: `<ul>
  //               <li>выдерживает более сильные нагрузки на кручение из-за плавающего эффекта;</li>
  //               <li>возможны протирание и коррозия под лентой, что ускоряет износ;</li>
  //               <li>необходимо регулярно контролировать и настраивать натяжение ле</li>
  //               </ul>`
  //   },
  //   {
  //     name: 'Статические опоры',
  //     ico: true,
  //     url: '06.png',
  //     tooltip: `<ul>
  //               <li>меньшая выносливость на кручение (может лопнуть цистерна);</li>
  //               <li>стоимость дешевле на 50 т. р.;</li>
  //               <li>более легкий монтаж/демонтаж;</li>
  //               <li>менее трудоемкий ремонт цисте</li>
  //               </ul>`
  //   }
  // ],
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // fields__1__2: [
  //   {id: 6, name: 'Площадка обслуживания', systemName: 'service-area', type: 'radio'},
  //   {id: 7, name: 'Освещение', systemName: 'lighting', type: 'radio'},
  //   {id: 8, name: 'Подогрев от ВС', systemName: 'heating-from-sun', type: 'radio'},
  //   {id: 9, name: 'Исполнение', systemName: 'execution', type: 'checkbox'},
  //   {id: 10, name: 'Крепление огнетушителя', systemName: 'fire-extinguisher-mounting', type: 'radio'},
  //   {id: 11, name: 'Калибровка', systemName: 'calibration', type: 'checkbox'}
  // ],
  // fields__1__2__6: [
  //   {
  //     name: 'Полноценная',
  //     ico: true,
  //     url: '13.png',
  //     tooltip: 'Полноценная металлическая площадка с перилами - более удобное и безопасное обслуживание заливных горловин.'
  //   },
  //   {
  //     name: 'Лестницы к горловинам',
  //     ico: true,
  //     url: '12.png',
  //     tooltip: 'Эконом-вариант, дает минимальные возможности обслуживания заливных горловин.'
  //   }
  // ],
  // fields__1__2__7: [
  //   {
  //     name: '2 зоны',
  //     ico: true,
  //     url: '14.png'
  //   },
  //   {
  //     name: '4 зоны',
  //     ico: true,
  //     url: '15.png'
  //   }
  // ],
  // fields__1__2__7__options: {
  //   switch_check: false
  // },
  // fields__1__2__8: [
  //   {
  //     name: 'Внутри цистерны',
  //     tooltip: 'Система подогрева от выхлопной системы проходит внутри цистерны и выходит на шиберную задвижку.'
  //   },
  //   {
  //     name: 'Сбоку цистерны',
  //     tooltip: 'Система подогрева от выхлопной системы проходит сбоку цистерны и выходит на шиберную задвижку.'
  //   }
  // ],
  // fields__1__2__8__options: {
  //   switch_check: true
  // },
  // fields__1__2__9: [
  //   {
  //     name: 'Огнеопасное',
  //     subName: 'доработки установки и шасси под перевозку ЛВЖ',
  //     ico: true,
  //     url: '20.png',
  //     tooltip: '',
  //     val: false
  //   }
  // ],
  // fields__1__2__10: [
  //   {
  //     name: 'Пластиковые короба'
  //   },
  //   {
  //     name: 'Кольца на цистерне'
  //   }
  // ],
  // fields__1__2__11: [
  //   {
  //     name: 'Калибровка',
  //     subName: 'цистерны с выдачей соответствующих документов',
  //     ico: true,
  //     url: '19.png',
  //     tooltip: '',
  //     val: true
  //   }
  // ],













  // fields__1__3: [],
  //
  //
  // valBlock__6: null,
  // valBlock__7: null,
  // valBlock__8: null,
  // // valBlock__9: null,
  // valBlock__10: null,
  // valBlock__11: null,



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


// function keyExists(key, search) {
//     if (!search || (search.constructor !== Array && search.constructor !== Object)) {
//         return false;
//     }
//     for (var i = 0; i < search.length; i++) {
//         if (search[i] === key) {
//             return true;
//         }
//     }
//     return key in search;
// }

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
    isLoaded: false,
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

    // const listResultStep1 = this.state.result.map((field, key) => {
    // const listResultStep1 = this.state.car.step_1.map((field, key) => {
    //     return (
    //         <div key={key} className=''>
    //             {field.name}: &nbsp;
    //         </div>
    //     )
    // });

    // keyExists( 'step_1', this.state.car )
    // ?
    // console.log('да')
    // :
    // console.log('нет')
    // if ( this.state.car.step_1 ) {
    //     console.log('да')
    //     const listResultStep1 = this.state.car.step_1.map((field, key) => {
    //         return (
    //             <div key={key} className=''>
    //             {field.name}: &nbsp;
    //             </div>
    //         )
    //     });
    // } else {
    //     console.log('нет')
    // }


// { this.state['valBlock__'+field.id] !==null ? this.state['fields__1__1__'+field.id][this.state['valBlock__'+field.id]].name : '—' }

    // const listResultStep2 = this.state.fields__1__2.map((field, key) => {
    //   return (
    //     <div key={key} className=''>
    //         {field.name}: &nbsp;
    //         {
    //             field.type==='radio'
    //             ?
    //                 this.state['valBlock__'+field.id] !==null
    //                 ?
    //                 this.state['fields__1__2__'+field.id][this.state['valBlock__'+field.id]].name
    //                 :
    //                 '—'
    //             :
    //                 this.state['fields__1__2__'+field.id][0].val
    //                 ?
    //                 'да'
    //                 :
    //                 'нет'
    //         }
    //     </div>
    //     )
    //   }
    // );
    // <Context.Consumer>{context => ( <Loading context={context} /> )}</Context.Consumer>

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

          <div className="result">
            <h2>Результат:</h2>
            <pre>
              {JSON.stringify(this.state, "", 4)}
            </pre>
          </div>

          <div className="resultSelected">
              <h2>Итоговые данные:</h2>
              <h5>Шаг 1:</h5>
              <pre>
                    {
                        this.state.car.step_1
                        ?
                            this.state.car.step_1.map((field, key) =>
                              <div key={key} className=''>
                                  #{field.id} : {field.name} :
                                  {
                                      this.state.selectedValue['itemName_' + field.id]
                                          ?
                                              ' ' + this.state.selectedValue['itemName_' + field.id]
                                          :
                                              ' -'
                                          }
                              </div>
                            )
                        :
                          'данных нет'
                    }
              </pre>
              <h5>Шаг 2:</h5>
              <pre>
                  {
                      this.state.car.step_2
                      ?
                          this.state.car.step_2.map((field, key) =>
                                <div key={key} className=''>
                                    #{field.id} : {field.name} :
                                    {
                                        this.state.selectedValue['itemName_' + field.id]
                                            ?
                                                ' ' +this.state.selectedValue['itemName_' + field.id]
                                            :
                                                ' -'
                                    }
                                    { this.state.selectedValue['itemValue_' + field.id] === true && ' да' }
                                    { this.state.selectedValue['itemValue_' + field.id] === false && ' нет' }
                                </div>
                          )
                      :
                          'данных нет'
                  }
              </pre>
              <h5>Шаг 3:</h5>
              <pre>
                  {
                      this.state.car.step_3
                      ?
                          this.state.car.step_3.map((field, key) =>
                                <div key={key} className=''>
                                    #{field.id} : {field.name} :
                                    {
                                        this.state.selectedValue['itemName_' + field.id]
                                            ?
                                                ' ' +this.state.selectedValue['itemName_' + field.id]
                                            :
                                                ' -'
                                    }
                                    { this.state.selectedValue['itemValue_' + field.id] === true && ' да' }
                                    { this.state.selectedValue['itemValue_' + field.id] === false && ' нет' }
                                </div>
                          )
                      :
                          'данных нет'
                  }
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
