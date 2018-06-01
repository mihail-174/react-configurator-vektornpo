import React, { Component } from 'react';
import '../css/ispolnenie.css';

const arr = {
  'fields': [
    {
      "name": "Огнеопасное",
      "subname": "доработки установки и шасси под перевозку ЛВЖ"
    }
  ]
};

export default class Ispolnenie extends Component {

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
      ispolnenie: {
        ...context.state.ispolnenie,
        selected: selected,
        value: value,
      }
    });
  }

  changeCheckbox(event) {
    const { context } = this.props.context;
    let elems = event.target.parentNode.parentNode.parentNode.querySelectorAll('.block__input');
    if ( event.target.checked ) {
      for (let i=0; i < elems.length; i++) {
        elems[i].disabled = false;
        elems[i].setAttribute("checked", "checked");
        context.methods.setAppState({
          ispolnenie: {
            ...context.state.ispolnenie,
            checked: event.target.checked,
          }
        });
      }
    } else {
      for (let i=0; i < elems.length; i++) {
        elems[i].disabled = true;
        context.methods.setAppState({
          ispolnenie: {
            ...context.state.ispolnenie,
            selected: '',
            value: '',
            checked: event.target.checked
          }
        });
      }
    }
  }

  render() {
    const { context } = this.props.context;

    let value = parseInt(context.state.ispolnenie.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"ispolnenieCheck-" + key} onChange={this.handleChange} type='radio' name='ispolnenieFields' value={key} checked={value === key ? true: false} disabled={context.state.ispolnenie.checked ? false:true} />
        <label htmlFor={"ispolnenieCheck-" + key}>
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className={context.state.ispolnenie.checked ? 'block block_col ispolnenie': 'block block_col block_disabled ispolnenie'}>
        <div className="block__title">
          {context.state.ispolnenie.name}
        </div>
        <div className="block__list">
          <div className="toggle">
            <input id="ispolnenieToggle" className="checkbox" onChange={this.changeCheckbox} type="checkbox" name="checkbox" checked={context.state.ispolnenie.checked ? true: false} />
            <label htmlFor="ispolnenieToggle">
              <div><span></span></div>
            </label>
          </div>
          {list}
        </div>
      </div>
    );

  }
}
