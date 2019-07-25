import React, { Component } from 'react';
import '../css/ploshchadkaObsluzhivaniia.css';

const arr = {
  'fields': [
    {"name": "Полноценная"},
    {"name": "Лестницы к горловинам"}
  ]
};

export default class PloshchadkaObsluzhivaniia extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      ploshchadkaObsluzhivaniia: {
        ...context.state.ploshchadkaObsluzhivaniia,
        selected: selected,
        value: value
      }
    });
  }

  render() {
    const { context } = this.props.context;

    let value = parseInt(context.state.ploshchadkaObsluzhivaniia.value, 0);
    const list = arr.fields.map((field, key) =>
    // const list = context.state.ploshchadkaObsluzhivaniia.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"ploshchadkaObsluzhivaniiaCheck-" + key} onChange={this.handleChange} type='radio' name='ploshchadkaObsluzhivaniiaFields' value={key} checked={value === key ? true: false} />
        <label htmlFor={"ploshchadkaObsluzhivaniiaCheck-" + key}>
          <div className="block__name">{field.name}</div>
        </label>
      </div>
    );
    return (
      <div className="block block_row ploshchadkaObsluzhivaniia">
        <div className="block__title">{context.state.ploshchadkaObsluzhivaniia.name}</div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
