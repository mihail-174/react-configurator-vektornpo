import React, { Component } from 'react';
import '../css/B.css';

export default class ItemRadio extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }
  change(e) {
    const { context } = this.props;
    let autoVal = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__val';
    let autoName = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__name';
    context.methods.setAppState({
      [autoVal]: e.target.getAttribute('value'),
      [autoName]: e.target.parentNode.querySelector('.b__name').textContent
    })
  }
  render() {
    const {context} = this.props;
    let list='';
    const selected = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__val';
    if ( this.props.options !== undefined ) {
      list = this.props.options.map((field, key) => {
        return (
          <div className='b__item' key={key}>
            <input id={this.props.systemName + "-" + key} checked={ parseInt(context.state[selected], 0) === key ? true : false } onClick={this.change} onChange={this.handleChange} className="b__input" type='radio' name={this.props.systemName} value={key} />
            <label className="b__label" htmlFor={this.props.systemName + "-" + key}>
              <div className='b__name'>{field.name}</div>
              <div className='b__subname'>{field.subname}</div>
            </label>
          </div>
        )
      });
    }

    return (
      <div className='b__list'>
        {list}
      </div>
    )

  }
}
