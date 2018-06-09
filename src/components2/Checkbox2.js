import React, { Component } from 'react';
import '../css/checkbox2.css';

export default class Checkbox2 extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }
  change(e) {
    const { context } = this.props;
    const objectjson = ['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id + '__options'];
    context.methods.setAppState({
      [objectjson]: {
        ...context.state[objectjson],
        checkbox: !context.state[objectjson].checkbox
      }
    })
  }
  render() {
    const { context } = this.props;
    const objectjson = ['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id + '__options'];
    return (
      <div className='toggle'>
        <input className='toggle__input' checked={this.props.options.checkbox} id={this.props.systemName + "-checkbox"} type='checkbox' name={this.props.systemName} value='' />
        <label className='toggle__label' onClick={this.change} htmlFor={this.props.systemName + "-checkbox"}></label>
      </div>
    )

  }
}
