import React, { Component } from 'react';
import '../css/checkbox.css';

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
      [checked]: !context.state[checked],
      [checkedName]: context.state[checked] ? this.props.switchCheckName2 : this.props.switchCheckName1
    })
  }
  // change(e) {
  //   const { context } = this.props;
  //   const objectjson = ['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id + '__options'];
  //   context.methods.setAppState({
  //     [objectjson]: {
  //       ...context.state[objectjson],
  //       checkbox: !context.state[objectjson].checkbox
  //     }
  //   })
  // }
  render() {
    // checked={this.props.options.checkbox}
    // <span>{context.state[objectjson].checkbox ? context.state[objectjson].names[1].name : context.state[objectjson].names[0].name}</span>
    const { context } = this.props;
    // const objectjson = ['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id + '__options'];
    // {context.state[checked] && this.props.switchCheck ? this.props.switchName1 : this.props.switchName2}
    const objectjson = ['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id];
    const checked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
    return (
      <div className='toggle'>
        <input className='toggle__input' checked={context.state[checked]} id={this.props.systemName + "-checkbox"} type='checkbox' name={this.props.systemName} value='' />
        <label className='toggle__label' onClick={this.change} htmlFor={this.props.systemName + "-checkbox"}>
          {context.state[checked] ? this.props.switchCheckName1 : this.props.switchCheckName2}
        </label>
      </div>
    )

  }
}
