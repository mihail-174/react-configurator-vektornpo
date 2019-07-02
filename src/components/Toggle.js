import React, { Component } from 'react';

import '../scss/toggle.scss';

export default class SwitchWithName extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }

  change(e) {
      const { context } = this.props;
      const state = context.state;
      const itemGroupId = this.props.itemGroupId;
      // const itemGroupName = this.props.itemGroupName;

      context.methods.setAppState({
          selectedValue: {
              ...state.selectedValue,
              ['item_' + itemGroupId + '_value_toggle']: e.target.parentNode.children[0].checked
              // ['itemValue_' + itemGroupId]: e.target.parentNode.children[0].checked
          }
      });

    // const { context } = this.props,
    //       currentAvto = context.state.currentAvto,
    //       currentStep = context.state.currentStep,
    //       selectedVal = 'valBlock__' + idBlock,
    //       fields__x__x__x__options = "fields__" + currentAvto + "__" + currentStep + "__" + idBlock + "__options";
    // // console.log( this.props );
    // context.methods.setAppState({
    //   [selectedVal]: context.state[fields__x__x__x__options].switch_check===false? null: null,
    //   [fields__x__x__x__options]: {
    //     ...context.state[fields__x__x__x__options],
    //     switch_check: !context.state[fields__x__x__x__options].switch_check
    //   }
    // })
  }

  render() {
      const { context } = this.props;
      const state = context.state;
      const itemGroupId = this.props.itemGroupId;
      const itemGroupName = this.props.itemGroupName;
      // const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId];

    // const { context } = this.props,
    //   currentAvto = context.state.currentAvto,
    //   currentStep = context.state.currentStep,
    //   idBlock = this.props.idBlock,
    //   systemName = this.props.systemName,
    //   fields__x__x__x__options = context.state["fields__" + currentAvto + "__" + currentStep + "__" + idBlock + "__options"];

    // let a;
    // if ( fields__x__x__x__options ) {
    //   a = fields__x__x__x__options.switch_check;
    // }
    // step_1_field_2_options
    return (
        <div>
            <div className='toggle'>
                <input className="toggle__input" id={itemGroupName + "-checkbox"} type='checkbox' defaultChecked={
                    state.car['step_' + state.currentStep + '_field_' + itemGroupId].switch.checked
                } onChange={this.change.bind(this)} />
                <label className='toggle__label' htmlFor={itemGroupName + "-checkbox"}>
                    {
                        state.selectedValue['item_' + itemGroupId + '_value_toggle']
                        ?
                            state.car['step_' + state.currentStep + '_field_' + itemGroupId].switch.on
                        :
                            state.car['step_' + state.currentStep + '_field_' + itemGroupId].switch.off
                    }
                </label>
            </div>
        </div>
    )
  }

  // {
  //     keyExists('switch', state.selectedValue['item_' + itemGroupId + '_value_toggle'])
  //     ?
  //         state.car['step_' + state.currentStep + '_field_' + itemGroupId].switch.checked
  //         ?
  //             '1false'
  //         :
  //             '1true'
  //     :
  //         state.selectedValue['item_' + itemGroupId + '_value_toggle']
  //         ?
  //             '2false'
  //         :
  //             '2true'
  // }










  // state.car['step_' + state.currentStep + '_field_' + itemGroupId].switch.on
  // state.car['step_' + state.currentStep + '_field_' + itemGroupId].switch.off


    componentDidMount() {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        // const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId];
        // const itemGroupName = this.props.itemGroupName;

        context.methods.setAppState({
            selectedValue: {
                ...state.selectedValue,
                ['item_' + itemGroupId + '_value_toggle']: state.car['step_' + state.currentStep + '_field_' + itemGroupId].switch.checked
                // ['itemValue_' + itemGroupId]: e.target.parentNode.children[0].checked
            }
        });

        // if ( state['itemValue_' + itemGroupId] === null ) {
        //     context.methods.setAppState({
        //         ['itemValue_' + itemGroupId]: state.car['step_' + state.currentStep + '_field_' + itemGroupId][0].checked
        //     });
        // }
    }

}

// <input className='toggle__input' defaultChecked="" id={systemName + "-checkbox"} type='checkbox' name={systemName} value='' />

  // <div>
  //   <div className='toggle'>
  //     <input className='toggle__input' defaultChecked={a?true:false} id={systemName + "-checkbox"} type='checkbox' name={systemName} value='' />
  //     <label className='toggle__label' onClick={()=>this.change(idBlock)} htmlFor={systemName + "-checkbox"}>
  //       {a?fields__x__x__x__options.switch_name_on:fields__x__x__x__options.switch_name_off}
  //     </label>
  //   </div>
  // </div>
