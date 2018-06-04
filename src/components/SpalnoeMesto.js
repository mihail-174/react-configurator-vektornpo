import React, { Component } from 'react';
import '../css/spalnoeMesto.css';

const arr = {
  'fields': [
    {
      "name": "Спальное место",
      "subname": "в кабине водителя"
    }
  ]
};

export default class SpalnoeMesto extends Component {

  constructor(props) {
    super(props);
    this.changeCheckbox = this.changeCheckbox.bind(this);
  }
  changeCheckbox(event) {
    const { context } = this.props.context;
    context.methods.setAppState({
      spalnoeMesto: {
        ...context.state.spalnoeMesto,
        checked: !context.state.spalnoeMesto.checked
      }
    });
  }
  render() {
    const { context } = this.props.context;

    const list = arr.fields.map((field, key) =>
      <div key={key} className={context.state.spalnoeMesto.checked ? 'block__item active': 'block__item'}>
        <input className="block__input" id="spalnoeMestoCheck" onChange={this.changeCheckbox} defaultChecked={context.state.spalnoeMesto.checked} type='checkbox' />
        <div className="toggle">
          <label htmlFor="spalnoeMestoCheck">
            <div><span></span></div>
          </label>
        </div>
        <label htmlFor="spalnoeMestoCheck">
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className={context.state.spalnoeMesto.checked ? 'block block_col spalnoeMesto': 'block block_col block_off spalnoeMesto'}>
        <div className="block__list">
          {list}
        </div>
      </div>
    );

  }
}
