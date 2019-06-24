import React, { Component } from 'react';
import '../css/osveshchenie.css';

const arr = {
  'fields': [
    {"name": "2 зоны"},
    {"name": "4 зоны"}
  ]
};

export default class Osveshchenie extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.changeCheckbox = this.changeCheckbox.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      osveshchenie: {
        ...context.state.osveshchenie,
        selected: selected,
        value: value,
      }
    });
  }

  changeCheckbox(event) {
    const { context } = this.props.context;
    let elems = event.target.parentNode.parentNode.parentNode.querySelectorAll('.block__input');
    if ( event.target.checked ) {
      for (let i=0; i < elems.length; i++) {
        elems[i].disabled = false;
        elems[i].setAttribute("checked", "checked");
        context.methods.setAppState({
          osveshchenie: {
            ...context.state.osveshchenie,
            checked: event.target.checked,
          }
        });
      }
    } else {
      for (let i=0; i < elems.length; i++) {
        elems[i].disabled = true;
        context.methods.setAppState({
          osveshchenie: {
            ...context.state.osveshchenie,
            selected: '',
            value: '',
            checked: event.target.checked
          }
        });
      }
    }
  }

  render() {
    const { context } = this.props.context;

    let value = parseInt(context.state.osveshchenie.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"osveshchenieCheck-" + key} onChange={this.handleChange} type='radio' name='osveshchenieFields' value={key} checked={value === key ? true: false} disabled={context.state.osveshchenie.checked ? false:true} />
        <label htmlFor={"osveshchenieCheck-" + key}>
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className={context.state.osveshchenie.checked ? 'block block_col osveshchenie': 'block block_col block_disabled osveshchenie'}>
        <div className="block__title">
          {context.state.osveshchenie.name}
          <div className="toggle">
            <input id="osveshchenieToggle" className="checkbox" onChange={this.changeCheckbox} type="checkbox" name="checkbox" checked={context.state.osveshchenie.checked ? true: false} />
            <label htmlFor="osveshchenieToggle">
              <span></span>
            </label>
          </div>
        </div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
