import React, { Component } from 'react';
import '../css/kreplenieOgnetushitelia.css';

const arr = {
  'fields': [
    {"name": "Пластиковые короба"},
    {"name": "Кольца на цистерне"}
  ]
};

export default class KreplenieOgnetushitelia extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      kreplenieOgnetushitelia: {
        ...context.state.kreplenieOgnetushitelia,
        selected: selected,
        value: value
      }
    });
  }

  render() {
    const { context } = this.props.context;
    let value = parseInt(context.state.kreplenieOgnetushitelia.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"kreplenieOgnetushiteliaCheck-" + key} onChange={this.handleChange} type='radio' name='kreplenieOgnetushiteliaFields' value={key} checked={value === key ? true: false} />
        <label htmlFor={"kreplenieOgnetushiteliaCheck-" + key}>
          <div className="block__name">{field.name}</div>
        </label>
      </div>
    );
    return (
      <div className="block block_col kreplenieOgnetushitelia">
        <div className="block__title">{context.state.kreplenieOgnetushitelia.name}</div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
