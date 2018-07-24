import React, { Component } from 'react';

export default class SwitchWithName extends Component {
  // constructor() {
  //   super();
  //   this.change = this.change.bind(this);
  // }
  change(idBlock) {
    const { context } = this.props,
          currentAvto = context.state.currentAvto,
          currentStep = context.state.currentStep,
          switch_check = 'fields__' + currentAvto + '__' + currentStep + '__' + idBlock + '__switch_check';

    console.log( idBlock );

    // context.methods.setAppState({
    //   [switch_check]: !switch_check
    // })
  }


  handlerClick(e) {
      //Не забудь сбиндить, или привязать контекст стрелочно, иначе потеряешь контекст
      console.log(e.target);
  }

  render() {
    const { context } = this.props,
          currentAvto = context.state.currentAvto,
          currentStep = context.state.currentStep,
          idBlock = this.props.idBlock,
          systemName = this.props.systemName,
          switch_check = context.state['fields__' + currentAvto + '__' + currentStep + '__' + idBlock + '__switch_check'];

    return (
      <div className='toggle'>
        <input className='toggle__input' defaultChecked={switch_check?true:false} id={systemName + "-checkbox"} type='checkbox' name={systemName} value='' />
        <label className='toggle__label' onClick={()=>this.change(idBlock)} htmlFor={systemName + "-checkbox"}></label>
      </div>
    )
  }
}
