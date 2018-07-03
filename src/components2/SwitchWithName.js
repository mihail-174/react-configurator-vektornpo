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

  // componentDidMount() {
  //   const { context } = this.props;
  //   const checked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
  //   let aaa = false;
  //   switch (context.state[checked]) {
  //     case '':
  //       console.log( 'пусто' );
  //       aaa = this.props.switchCheck;
  //       break;
  //     case true:
  //       console.log( 'да' );
  //       aaa = true;
  //       break;
  //     case false:
  //       console.log( 'нет' );
  //       aaa = false;
  //       break;
  //     default:
  //   }
  //   context.methods.setAppState({
  //     [checked]: this.props.switchCheck
  //   })
  // }
  //   const { context } = this.props;
  //   const checked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
  //   // console.log( context.state[checked] );
  //   // console.log( this.props.switchCheck );
  //   // if ( context.state[checked] ) {
  //     context.methods.setAppState({
  //       [checked]: this.props.switchCheck
  //     })
  //   // }

  // componentWillUnmount() {}
  // shouldComponentUpdate() {
  // componentDidUpdate() {
  // componentDidCatch() {
  //   const { context } = this.props;
  //   const checked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
  //   console.log( context.state[checked] );
  //   console.log( this.props.switchCheck );
  // }

  render() {
    // checked={this.props.options.checkbox}
    // <span>{context.state[objectjson].checkbox ? context.state[objectjson].names[1].name : context.state[objectjson].names[0].name}</span>
    const { context } = this.props;
    // const objectjson = ['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id + '__options'];
    // {context.state[checked] && this.props.switchCheck ? this.props.switchName1 : this.props.switchName2}
    // const objectjson = ['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id];
    // checked={context.state[checked]}
    const checked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';

    let aaa = false;

    // console.log( context.state[checked] + ' === ' + this.props.switchCheck );
    switch (context.state[checked]) {
      case '':
        console.log( 'пусто' );
        aaa = this.props.switchCheck;
        break;
      case true:
        console.log( 'да' );
        aaa = true;
        break;
      case false:
        console.log( 'нет' );
        aaa = false;
        break;
      default:
    }
    // if ( context.state[checked]=='' ) {
    //   console.log( 1 );
    // } else {
    //   console.log( 0 );
    // }

    // if ( context.state[checked] !== this.props.switchCheck ) {
    //   aaa = this.props.switchCheck;
    // } else {
    //   aaa = this.props.switchCheck;
    // }
    // console.log( aaa );

    return (
      <div className='toggle'>
        <input className='toggle__input' defaultChecked={this.props.switchCheck} onChange={this.change} id={this.props.systemName + "-checkbox"} type='checkbox' name={this.props.systemName} value='' />
        <label className='toggle__label' onClick={this.change} htmlFor={this.props.systemName + "-checkbox"}>
          {this.props.switchCheck || context.state[checked] ? this.props.switchCheckName1 : this.props.switchCheckName2}
        </label>
      </div>
    )

  }
}
