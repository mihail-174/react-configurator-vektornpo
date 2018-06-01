import React, { Component } from 'react';
import '../css/vacNasos.css';

const arr = {
  'fields': [
    {
      "name": "KO-505A",
      "subname": "коммунальный тип 310 куб./час",
      'popup': 'Коммунальный тип: Дешевый и неприхотливый в обслуживании, легкодоступный в регионах. Наличие запчастей. Относительно невысокая надежность. Не безопасен при работе с ЛВЖ.'
    },
    {
      "name": "BP-8/3",
      "subname": "взрывозащищенный компрессор 480 куб./час",
      'popup': 'Более надежный чем КО-505А и более производительный. Более дорогой и дороже в обслуживании. Относительно безопасен при работе с ЛВЖ.'
    },
    {
      "name": "BK-6М2",
      "subname": "взрывозащищенный компрессор 240 куб./час",
      'popup': 'Взрывозащищенный компрессор. Менее производительный. Очень безопасный с ЛВЖ. Дорогой, дорогие запчасти и обслуживание. Низкая доступность в регионах.'
    },
    {
      "name": "PNR.122",
      "subname": "взрывозащищенный компрессор 730 куб./час",
      'popup': 'Взрывозащищенный компрессор. Самый производительный и надежный. Практически не требует техобслуживания на весь срок эксплуатации. Закрытая система смазки. Абсолютно безопасен с ЛВЖ.'
    }
  ]
};

export default class VacNasos extends Component {

  // updateParentState(data) {
  //   this.props.updateParentState(data);
  // }
  //
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  //   this.state = {
  //     // checked: false,
  //     // selected:''
  //   };
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    // let descr = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      vacNasos: {
        ...context.state.vacNasos,
        selected: selected,
        value: value
      }
    });
    // console.log( arr );
    // this.setState({ checked: event.target.checked });
    // this.setState({ selected: event.target.parentNode.querySelector('label').innerText });
    // this.props.setAppState({ resultat: event.target.parentNode.querySelector('label').innerText });
    // this.setState({ resultat: event.target.parentNode.querySelector('label').innerText });
    // let selectedItemName = event.target.parentNode.querySelector('label').innerText;
    // methods.setAppState(type, event.target.parentNode.querySelector('label').innerText )

    // console.log( event.target.getAttribute('value') );
    // console.log( this.updateParentState({resultat: 'testtest'}) );
    // this.updateParentState({this.state.resultat: 'test'});
    // this.setState({ resultat: "бугага" });
    // this.setState({ resultat: event.target.parentNode.querySelector('label').innerText });
    // console.log( event.target.parentNode.querySelector('label').innerText );
  }

  render() {
    // let selectedItem = event.target.getAttribute('value');
    // const { context } = this.props.context;
    // const { context } = this.props.context;
    // const { methods } = this.props.context
    // console.log( context.methods );
    // const resultat2 = this.props.appState;
    // const resultat2 = this.props.appState.resultat;
    // console.log( resultat2 );
    const { context } = this.props.context;
    let value = parseInt(context.state.vacNasos.value, 0);
    // console.log( context.state.vacNasosItem );

    // context.methods.setAppState( {
    //   vacNasosArr: arr
    // } );

    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"vacNasosCheck-" + key} onChange={this.handleChange} type='radio' name='vacNasosFields' value={key} checked={value === key ? true: false} />
          <label htmlFor={"vacNasosCheck-" + key}>
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );

    return (
      <div className="block block_row vacNasos">
        <div className="block__title">{arr.name}</div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
