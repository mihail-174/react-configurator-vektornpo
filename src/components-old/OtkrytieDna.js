import React, { Component } from 'react';
import '../css/otkrytieDna.css';

const arr = {
  'fields': [
    {
      "name": "Механическое",
      "subname": "отделяемое дно, крепится на болты к бочке."
    },
    {
      "name": "Сливной люк",
      "subname": "на дне бочки диаметром до 500 мм."
    }
  ]
};

export default class OtkrytieDna extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.changeCheckbox = this.changeCheckbox.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      otkrytieDna: {
        ...context.state.otkrytieDna,
        selected: selected,
        value: value,
      }
    });
  }

  changeCheckbox(event) {
    const { context } = this.props.context;
    // console.log( context.state.otkrytieDna );
    // context.methods.setAppState({
    //   otkrytieDna: {
    //     ...context.state.otkrytieDna,
    //     checked: event.target.checked,
    //   }
    // });

    let elems = event.target.parentNode.parentNode.parentNode.querySelectorAll('.block__input');

    if ( event.target.checked ) {
      // console.log( event.target.checked );
      for (let i=0; i < elems.length; i++) {
        elems[i].disabled = false;
        // elems[i].checked = true;
        elems[i].setAttribute("checked", "checked");
        context.methods.setAppState({
          otkrytieDna: {
            ...context.state.otkrytieDna,
            selected: '',
            checked: event.target.checked,
          }
        });
      }
    } else {
      for (let i=0; i < elems.length; i++) {
        elems[i].disabled = true;
        // elems[i].checked = false;
        context.methods.setAppState({
          otkrytieDna: {
            ...context.state.otkrytieDna,
            selected: 'Глухая цистерна',
            value: '',
            checked: event.target.checked
          }
        });
      }
    }
    // let elems = event.target.parentNode.querySelector('.block__input');
    // console.log( event.target );
    // console.log( event.target.parentNode );
    // console.log( event.target.parentNode.parentNode );
    // console.log( event.target.parentNode.parentNode.querySelectorAll('.block__input') );

    // document.querySelector('.block__input').setAttribute("disabled", "disabled");
    // console.log( elems.length );

  }

  render() {
    const { context } = this.props.context;

    // for(let i = 0; i >= elems.length; i++) {
    //   elems[i].disabled = true;
    // }
    // let elems = document.querySelectorAll('.block__input');
    // console.log( elems );
    // if ( !`${context.state.otkrytieDna.checked}` ) {
    //   for (let i=0; i < elems.length; i++) {
    //     elems[i].disabled = true;
    //   }
    // } else {
    //   for (let i=0; i < elems.length; i++) {
    //     elems[i].disabled = false;
    //   }
    // }



    let value = parseInt(context.state.otkrytieDna.value, 0);
    // checked={arr.checked ? true: false}
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"otkrytieDnaCheck-" + key} onChange={this.handleChange} type='radio' name='otkrytieDnaFields' value={key} checked={value === key ? true: false} disabled={context.state.otkrytieDna.checked ? false:true} />
        <label htmlFor={"otkrytieDnaCheck-" + key}>
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className={context.state.otkrytieDna.checked ? 'block block_row otkrytieDna': 'block block_row block_disabled otkrytieDna'}>
        <div className="block__title">
          {context.state.otkrytieDna.name}
          <div className="toggle">
            <input id="otkrytieDnaToggle" className="checkbox" onChange={this.changeCheckbox} type="checkbox" name="checkbox" checked={context.state.otkrytieDna.checked ? true: false} />
            <label htmlFor="otkrytieDnaToggle">
              <span>{context.state.otkrytieDna.checked ? 'открытие дна': 'глухая цистерна'}</span>
            </label>
          </div>
        </div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}

// defaultChecked={true}
