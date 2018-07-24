import React, { Component } from 'react';

export default class SwitchWithName extends Component {
  // constructor() {
  //   super();
  //   this.change = this.change.bind(this);
  // }
  // change(e) {
  //   const { context } = this.props;
  //   let itemChecked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
  //   let valChecked = this.props.switchCheck;
  //   switch (context.state[itemChecked]) {
  //     case '':
  //       // console.log( 'в стейте: пусто' );
  //       valChecked = !this.props.switchCheck;
  //       break;
  //     case true:
  //     // console.log( 'в стейте: да true' );
  //       valChecked = false;
  //       break;
  //     case false:
  //       // console.log( 'в стейте: нет false' );
  //       valChecked = true;
  //       break;
  //     default:
  //   }
  //   context.methods.setAppState({
  //     [itemChecked]: valChecked
  //   })
  // }


  render() {
    const { context } = this.props;
    const currentAvto = context.state.currentAvto;
    const currentStep = context.state.currentStep;
    const idBlock = parseInt(this.props.idBlock, 0);
    // const systemName = this.props.systemName;
          // fields__x__x__x__options = context.state['fields__' + currentAvto + '__' + currentStep + '__' + idBlock + '__options'];
          // switch_check = context.state['fields__' + currentAvto + '__' + currentStep + '__' + idBlock + '__options'];
    let bbb = context.state['fields__' + currentAvto + '__' + currentStep + '__' + idBlock + '__options3'][0].aaa;

    console.log( bbb );
    // console.log( context.state['fields__'+ currentAvto +'__'+ currentStep +'__2__options2'].aaa );
    // console.log( context.state['fields__'+ currentAvto +'__'+ currentStep +'__'+ idBlock +'__options2'].aaa );
    // context.state['fields__'+ currentAvto +'__'+ currentStep + '__' + idBlock +'__options2'].aaa


    const list = Object.keys(bbb).map((field, key) => {
      return (
        <div key={key}>
          {field.aaa}
        </div>
        )
      }
    );

    return (
      <div className='toggle'>
        {list}
      </div>
    )
  }
}

// <input className='toggle__input'  id={systemName + "-checkbox"} type='checkbox' name={systemName} value='' />
// <label className='toggle__label' htmlFor={systemName + "-checkbox"}></label>
