import React, { Component } from 'react';
import '../css/privodnasosa.css';

const arr = {
  'fields': [
    {"name": "Шкиво-ременной"},
    {"name": "Карданный"}
  ]
};

export default class PrivodNasosa extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      privodNasosa: {
        ...context.state.privodNasosa,
        selected: selected,
        value: value
      }
    });
  }

  render() {
    const { context } = this.props.context;
    let value = parseInt(context.state.privodNasosa.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"privodNasosaCheck-" + key} onChange={this.handleChange} type='radio' name='privodNasosaFields' value={key} checked={value === key ? true: false} />
        <label htmlFor={"privodNasosaCheck-" + key}>
          <div className="block__name">{field.name}</div>
        </label>
      </div>
    );
    return (
      <div className="block block_col privodNasosa">
        <div className="block__title">{context.state.privodNasosa.name}</div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
