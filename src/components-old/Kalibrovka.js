import React, { Component } from 'react';
import '../css/kalibrovka.css';

const arr = {
  'fields': [
    {
      "name": "Калибровка",
      "subname": "цистерны с выдачей соответствующих документов"
    }
  ]
};

export default class Kalibrovka extends Component {

  constructor(props) {
    super(props);
    this.changeCheckbox = this.changeCheckbox.bind(this);
  }
  changeCheckbox(event) {
    const { context } = this.props.context;
    context.methods.setAppState({
      kalibrovka: {
        ...context.state.kalibrovka,
        checked: !context.state.kalibrovka.checked
      }
    });
  }
  render() {
    const { context } = this.props.context;

    const list = arr.fields.map((field, key) =>
      <div key={key} className={context.state.kalibrovka.checked ? 'block__item active': 'block__item'}>
        <input className="block__input" id="kalibrovkaCheck" onChange={this.changeCheckbox} defaultChecked={context.state.kalibrovka.checked} type='checkbox' />
        <div className="toggle">
          <label htmlFor="kalibrovkaCheck">
            <div><span></span></div>
          </label>
        </div>
        <label htmlFor="kalibrovkaCheck">
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className={context.state.kalibrovka.checked ? 'block block_col kalibrovka': 'block block_col block_off kalibrovka'}>
        <div className="block__list">
          {list}
        </div>
      </div>
    );

  }
}
