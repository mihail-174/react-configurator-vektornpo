import React, { Component } from 'react';

export default class ItemCheckboxMulti extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }
  change(e) {
    const { context } = this.props;
    let autoVal = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__' + e.target.getAttribute('value') + '__checked';
    context.methods.setAppState({
      [autoVal]: !context.state[autoVal]
    })
  }
  render() {
    const {context} = this.props;
    let list='';
    if ( this.props.options !== undefined ) {
      list = this.props.options.map((field, key) => {
        return (
          <div className='b__item' key={key}>
            <input id={this.props.systemName + "-" + key} checked={context.state['auto__' + context.state.currentAvto + '__' + this.props.id + '__' + key + '__checked']} onClick={this.change} onChange={this.handleChange} className="b__input" type='checkbox' name={this.props.systemName} value={key} />
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
