import React, { Component } from 'react';
import '../css/checkbox.css';

export default class SwitchWithName extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }
  change(e) {
    const { context } = this.props;
    const itemChecked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
    // console.log('по умолчанию: ' + this.props.switchCheck);
    // console.log('в стейте: ' + context.state[itemChecked]);
    const checkedName = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checkedName';
    let valChecked=this.props.switchCheck;
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
    // console.log('итого: ' + valChecked);
    context.methods.setAppState({
      [itemChecked]: valChecked,
      [checkedName]: valChecked ? this.props.switchCheckName1 : this.props.switchCheckName2
    })
  }

  // componentDidUpdate() {
  // // componentDidMount() {
  // // componentWillMount() {
  //   const { context } = this.props;
  //   let itemChecked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
  //   let checkedName = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checkedName';
  //   console.log('по умолчанию: ' + this.props.switchCheck);
  //   context.methods.setAppState({
  //     [checkedName]: '000000000000'
  //   })
  // }

  render() {
    const { context } = this.props;
    let itemChecked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
    const checkedName = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checkedName';
    // console.log('по умолчанию: ' + this.props.switchCheck);
    // console.log('в стейте: ' + context.state[itemChecked]);
    return (
      <div className='toggle'>
        <input className='toggle__input' defaultChecked={context.state[itemChecked] === '' ? this.props.switchCheck : context.state[itemChecked] } id={this.props.systemName + "-checkbox"} type='checkbox' name={this.props.systemName} value='' />
        <label className='toggle__label' onClick={this.change} htmlFor={this.props.systemName + "-checkbox"}>
          {context.state[checkedName] === '' ? 'пусто млять' : context.state[checkedName]}
        </label>
      </div>
    )

  }
}

// {this.props.switchCheck ? this.props.switchCheckName1 : this.props.switchCheckName2}
