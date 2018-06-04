import React, { Component } from 'react';
import '../css/dvigatel.css';

const arr = {
  'fields': [
    {
      "name": "300 л. с.",
      "subname": "КАМАЗ-740.662-300"
    },
    {
      "name": "280 л. с.",
      "subname": "КАМАЗ-740.622-280"
    }
  ]
};

export default class Dvigatel extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      dvigatel: {
        ...context.state.dvigatel,
        selected: selected,
        value: value
      }
    });
  }

  render() {
    const { context } = this.props.context;

    let value = parseInt(context.state.dvigatel.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"dvigatelCheck-" + key} onChange={this.handleChange} type='radio' name='dvigatelFields' value={key} checked={value === key ? true: false} />
        <label htmlFor={"dvigatelCheck-" + key}>
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className="block block_col dvigatel">
        <div className="block__title">{context.state.dvigatel.name}</div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
