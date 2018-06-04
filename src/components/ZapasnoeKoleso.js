import React, { Component } from 'react';
import '../css/zapasnoeKoleso.css';

const arr = {
  'fields': [
    {"name": "За кабиной"},
    {"name": "На заднем свесе"}
  ]
};

export default class ZapasnoeKoleso extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      zapasnoeKoleso: {
        ...context.state.zapasnoeKoleso,
        selected: selected,
        value: value
      }
    });
  }

  render() {
    const { context } = this.props.context;

    let value = parseInt(context.state.zapasnoeKoleso.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"zapasnoeKolesoCheck-" + key} onChange={this.handleChange} type='radio' name='zapasnoeKolesoFields' value={key} checked={value === key ? true: false} />
        <label htmlFor={"zapasnoeKolesoCheck-" + key}>
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className="block block_row zapasnoeKoleso">
        <div className="block__title">{context.state.zapasnoeKoleso.name}</div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
