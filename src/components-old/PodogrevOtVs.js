import React, { Component } from 'react';
import '../css/podogrevOtVs.css';

const arr = {
  'fields': [
    {"name": "Внутри цистерны"},
    {"name": "Сбоку цистерны"}
  ]
};

export default class PodogrevOtVs extends Component {

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
      podogrevOtVs: {
        ...context.state.podogrevOtVs,
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
          podogrevOtVs: {
            ...context.state.podogrevOtVs,
            checked: event.target.checked,
          }
        });
      }
    } else {
      for (let i=0; i < elems.length; i++) {
        elems[i].disabled = true;
        context.methods.setAppState({
          podogrevOtVs: {
            ...context.state.podogrevOtVs,
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

    let value = parseInt(context.state.podogrevOtVs.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"podogrevOtVsCheck-" + key} onChange={this.handleChange} type='radio' name='podogrevOtVsFields' value={key} checked={value === key ? true: false} disabled={context.state.podogrevOtVs.checked ? false:true} />
        <label htmlFor={"podogrevOtVsCheck-" + key}>
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className={context.state.podogrevOtVs.checked ? 'block block_col podogrevOtVs': 'block block_col block_disabled podogrevOtVs'}>
        <div className="block__title">
          {context.state.podogrevOtVs.name}
          <div className="toggle">
            <input id="podogrevOtVsToggle" className="checkbox" onChange={this.changeCheckbox} type="checkbox" name="checkbox" checked={context.state.podogrevOtVs.checked ? true: false} />
            <label htmlFor="podogrevOtVsToggle">
              <span></span>
            </label>
          </div>
        </div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
