import React, { Component } from 'react';
import '../css/instrumentIashchiki.css';

const arr = {
  'fields': [
    {"name": "1 ящик"},
    {"name": "2 ящика"}
  ]
};

export default class InstrumentIashchiki extends Component {

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
      instrumentIashchiki: {
        ...context.state.instrumentIashchiki,
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
          instrumentIashchiki: {
            ...context.state.instrumentIashchiki,
            checked: event.target.checked,
          }
        });
      }
    } else {
      for (let i=0; i < elems.length; i++) {
        elems[i].disabled = true;
        context.methods.setAppState({
          instrumentIashchiki: {
            ...context.state.instrumentIashchiki,
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

    let value = parseInt(context.state.instrumentIashchiki.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"instrumentIashchikiCheck-" + key} onChange={this.handleChange} type='radio' name='instrumentIashchikiFields' value={key} checked={value === key ? true: false} disabled={context.state.instrumentIashchiki.checked ? false:true} />
        <label htmlFor={"instrumentIashchikiCheck-" + key}>
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className={context.state.instrumentIashchiki.checked ? 'block block_col instrumentIashchiki': 'block block_col block_disabled instrumentIashchiki'}>
        <div className="block__title">
          {context.state.instrumentIashchiki.name}
          <div className="toggle">
            <input id="instrumentIashchikiToggle" className="checkbox" onChange={this.changeCheckbox} type="checkbox" name="checkbox" checked={context.state.instrumentIashchiki.checked ? true: false} />
            <label htmlFor="instrumentIashchikiToggle">
              <span></span>
            </label>
          </div>
        </div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
