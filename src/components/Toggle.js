import React, { Component } from 'react';

import '../scss/toggle.scss';

function keyExists(key, search) {
    if (!search || (search.constructor !== Array && search.constructor !== Object)) {
        return false;
    }
    for (var i = 0; i < search.length; i++) {
        if (search[i] === key) {
            return true;
        }
    }
    return key in search;
}

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
      if ( e.target.parentNode.children[0].checked === false ) {
          context.methods.setAppState({
              selectedValue: {
                  ...state.selectedValue,
                  ['itemValue_' + itemGroupId]: null,
                  ['itemName_' + itemGroupId]: null,
                  ['item_' + itemGroupId + '_value_toggle']: e.target.parentNode.children[0].checked
              }
          });
      } else {
          context.methods.setAppState({
              selectedValue: {
                  ...state.selectedValue,
                  ['item_' + itemGroupId + '_value_toggle']: e.target.parentNode.children[0].checked
              }
          });
      }
  }

  // componentWillMount() {
  //     const itemGroupId = this.props.itemGroupId;
  //     const itemGroupName = this.props.itemGroupName;
  //     console.log( 'componentWillMount: ' + itemGroupId + ' | ' + itemGroupName );
  //     const { context } = this.props;
  //     const state = context.state;
  //     const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values;
  //     if ( keyExists('item_' + itemGroupId + '_value_toggle', state.selectedValue) ) {
  //         console.group( 'state' );
  //         // console.log( 'state: true' );
  //         console.log( 'в state: ' + itemGroupName +  ' = есть' );
  //         console.log( 'в state: ' + itemGroupName + ' = ' + state.selectedValue['item_' + itemGroupId + '_value_toggle'].checked );
  //         console.groupEnd();
  //     } else {
  //         console.group( 'state' );
  //         // console.log( 'state: false' );
  //         console.log( 'в state: ' + itemGroupName +  ' = нету' );
  //         console.log( 'defaul: ' + itemGroupName + ' = ' + state.car['step_' + state.currentStep + '_field_' + itemGroupId].switch.checked );
  //         console.groupEnd();
  //     }
  // }


  render() {
      const { context } = this.props;
      const state = context.state;
      const itemGroupId = this.props.itemGroupId;
      const itemGroupName = this.props.itemGroupName;

    return (
        <div>
            <div className='toggle'>

                <input
                    className="toggle__input"
                    id={itemGroupName + "-checkbox"}
                    type='checkbox'onChange={this.change.bind(this)}
                    defaultChecked={
                        keyExists('item_' + itemGroupId + '_value_toggle', state.selectedValue)
                        ?
                        state.selectedValue['item_' + itemGroupId + '_value_toggle']
                        :
                        state.car['step_' + state.currentStep + '_field_' + itemGroupId].switch.checked
                    }

                />

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

}
