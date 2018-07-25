import React, { Component } from 'react';

export default class SwitchWithName extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }

  change(idBlock) {
    const { context } = this.props,
          currentAvto = context.state.currentAvto,
          currentStep = context.state.currentStep,
          selectedVal = 'val__' + idBlock,
          fields__x__x__x__options = "fields__" + currentAvto + "__" + currentStep + "__" + idBlock + "__options";
    // console.log( this.props );
    context.methods.setAppState({
      [selectedVal]: context.state[fields__x__x__x__options].switch_check===false? null: null,
      [fields__x__x__x__options]: {
        ...context.state[fields__x__x__x__options],
        switch_check: !context.state[fields__x__x__x__options].switch_check
      }
    })
  }

  render() {
    const { context } = this.props,
      currentAvto = context.state.currentAvto,
      currentStep = context.state.currentStep,
      idBlock = this.props.idBlock,
      systemName = this.props.systemName,
      fields__x__x__x__options = context.state["fields__" + currentAvto + "__" + currentStep + "__" + idBlock + "__options"];

    let a;
    if ( fields__x__x__x__options ) {
      a = fields__x__x__x__options.switch_check;
    }

    return (
      <div>
        <div className='toggle'>
          <input className='toggle__input' defaultChecked={a?true:false} id={systemName + "-checkbox"} type='checkbox' name={systemName} value='' />
          <label className='toggle__label' onClick={()=>this.change(idBlock)} htmlFor={systemName + "-checkbox"}>
            {a?fields__x__x__x__options.switch_name_on:fields__x__x__x__options.switch_name_off}
          </label>
        </div>
      </div>
    )
  }
}
