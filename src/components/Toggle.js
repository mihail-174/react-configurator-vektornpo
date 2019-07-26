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
      if ( e.target.parentNode.children[0].checked === false ) {
          context.methods.setAppState({
              selectedValue: {
                  ...state.selectedValue,
                  ['item_' + itemGroupId + '_value']: null,
                  ['item_' + itemGroupId + '_name']: null,
                  ['item_' + itemGroupId + '_value_toggle']: e.target.parentNode.children[0].checked
              }
          });
      } else {
          context.methods.setAppState({
              selectedValue: {
                  ...state.selectedValue,
                  ['item_' + itemGroupId + '_value_toggle']: e.target.parentNode.children[0].checked,
                  ['item_' + itemGroupId + '_value']: 0,
                  ['item_' + itemGroupId + '_name']: state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].name
              }
          });
      }
  }

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
                    type='checkbox'
                    onChange={this.change.bind(this)}
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
