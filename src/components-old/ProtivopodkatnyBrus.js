import React, { Component } from 'react';
import '../css/protivopodkatnyBrus.css';

const arr = {
  'fields': [
    {"name": "Классический (1 положение)"},
    {"name": "Регулируемый (2 положения)"}
  ]
};

export default class ProtivopodkatnyBrus extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      protivopodkatnyBrus: {
        ...context.state.protivopodkatnyBrus,
        selected: selected,
        value: value
      }
    });
  }

  render() {
    const { context } = this.props.context;

    let value = parseInt(context.state.protivopodkatnyBrus.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"protivopodkatnyBrusCheck-" + key} onChange={this.handleChange} type='radio' name='protivopodkatnyBrusFields' value={key} checked={value === key ? true: false} />
        <label htmlFor={"protivopodkatnyBrusCheck-" + key}>
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className="block block_col protivopodkatnyBrus">
        <div className="block__title">{context.state.protivopodkatnyBrus.name}</div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
