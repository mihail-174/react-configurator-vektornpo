import React, { Component } from 'react';
import '../css/dopGorlovina.css';

const arr = {
  'fields': [
    {"name": "Нужна"},
    {"name": "Не нужна"}
  ]
};

export default class DopGorlovina extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      dopGorlovina: {
        ...context.state.dopGorlovina,
        selected: selected,
        value: value
      }
    });
  }

  render() {
    const { context } = this.props.context;
    let value = parseInt(context.state.dopGorlovina.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"dopGorlovinaCheck-" + key} onChange={this.handleChange} type='radio' name='dopGorlovinaFields' value={key} checked={value === key ? true: false} />
        <label htmlFor={"dopGorlovinaCheck-" + key}>
          <div className="block__name">{field.name}</div>
        </label>
      </div>
    );
    return (
      <div className="block block_col dopGorlovina">
        <div className="block__title">{context.state.dopGorlovina.name}</div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
