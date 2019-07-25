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
    this.changeCheckbox = this.changeCheckbox.bind(this);
  }
  changeCheckbox(event) {
    const { context } = this.props.context;
    context.methods.setAppState({
      ispolnenie: {
        ...context.state.ispolnenie,
        checked: !context.state.ispolnenie.checked
      }
    });
  }
  render() {
    const { context } = this.props.context;

    const list = arr.fields.map((field, key) =>
      <div key={key} className={context.state.ispolnenie.checked ? 'block__item active': 'block__item'}>
        <input className="block__input" id="ispolnenieCheck" onChange={this.changeCheckbox} defaultChecked={context.state.ispolnenie.checked} type='checkbox' />
        <div className="toggle">
          <label htmlFor="ispolnenieCheck">
            <div><span></span></div>
          </label>
        </div>
        <label htmlFor="ispolnenieCheck">
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className={context.state.ispolnenie.checked ? 'block block_col ispolnenie': 'block block_col block_off ispolnenie'}>
        <div className="block__title">{context.state.ispolnenie.name}</div>
        <div className="block__list">
          {list}
        </div>
      </div>
    );

  }
}
