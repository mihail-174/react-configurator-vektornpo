import React, { Component } from 'react';

export default class SwitchWithName extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }
  change(e) {
    const { context } = this.props;
    let itemChecked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
    let valChecked = this.props.switchCheck;
    switch (context.state[itemChecked]) {
      case '':
        // console.log( 'в стейте: пусто' );
        valChecked = !this.props.switchCheck;
        break;
      case true:
      // console.log( 'в стейте: да true' );
        valChecked = false;
        break;
      case false:
        // console.log( 'в стейте: нет false' );
        valChecked = true;
        break;
      default:
    }
    context.methods.setAppState({
      [itemChecked]: valChecked
    })
  }


  render() {
    const { context } = this.props;
    let itemChecked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
    return (
      <div className='toggle'>
        <input className='toggle__input' defaultChecked={context.state[itemChecked] === '' ? this.props.switchCheck : context.state[itemChecked] } id={this.props.systemName + "-checkbox"} type='checkbox' name={this.props.systemName} value='' />
        <label className='toggle__label' onClick={this.change} htmlFor={this.props.systemName + "-checkbox"}></label>
      </div>
    )
  }
}
