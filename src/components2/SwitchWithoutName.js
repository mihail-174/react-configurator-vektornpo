import React, { Component } from 'react';

export default class SwitchWithName extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }
  change(e) {
    const { context } = this.props;
    const checked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
    const checkedName = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checkedName';
    context.methods.setAppState({
      [checked]: !context.state[checked]
    });
  }

  render() {
    const { context } = this.props;
    const checked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
    return (
      <div className='toggle'>
        <input className='toggle__input' defaultChecked={this.props.switchCheck} id={this.props.systemName + "-checkbox"} type='checkbox' name={this.props.systemName} value='' />
        <label className='toggle__label' onClick={this.change} htmlFor={this.props.systemName + "-checkbox"}></label>
      </div>
    )
  }
}
