import React, { Component } from 'react';
import '../css/kreplenieCisterny.css';

const arr = {
  'fields': [
    {"name": "Поясное"},
    {"name": "Статические опоры"}
  ]
};

export default class KreplenieCisterny extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      kreplenieСisterny: {
        ...context.state.kreplenieСisterny,
        selected: selected,
        value: value
      }
    });
  }

  render() {
    const { context } = this.props.context;
    let value = parseInt(context.state.kreplenieСisterny.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"kreplenieСisternyCheck-" + key} onChange={this.handleChange} type='radio' name='kreplenieСisternyFields' value={key} checked={value === key ? true: false} />
        <label htmlFor={"kreplenieСisternyCheck-" + key}>
          <div className="block__name">{field.name}</div>
        </label>
      </div>
    );
    return (
      <div className="block block_col kreplenieCisterny">
        <div className="block__title">{context.state.kreplenieСisterny.name}</div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
