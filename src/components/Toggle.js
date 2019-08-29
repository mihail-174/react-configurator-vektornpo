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
      const step_x = 'step_' + state.currentStep;
      const group_x = 'group_' + this.props.itemGroupId;
      const itemGroupId = this.props.itemGroupId;
      if ( e.target.parentNode.children[0].checked === false ) {
          keyExists('select', state.car[step_x + '_field_' + itemGroupId].values)
          &&
              state.car[step_x + '_field_' + itemGroupId].values.select.forEach((item, index)=>{
                  delete state.selectedValue3[step_x + '__' + group_x + '__select_' + index + '__value'];
              });
              context.methods.setAppState({
                  selectedValue3: {
                      ...state.selectedValue3,
                      [step_x + '__' + group_x + '__toggle']: e.target.parentNode.children[0].checked
                  }
              })
          keyExists('radio', state.car[step_x + '_field_' + itemGroupId].values)
          &&
              delete state.selectedValue3[step_x + '__' + group_x + '__radios__name'];
              delete state.selectedValue3[step_x + '__' + group_x + '__radios__value'];
              context.methods.setAppState({
                  selectedValue3: {
                      ...state.selectedValue3,
                      [step_x + '__' + group_x + '__toggle']: e.target.parentNode.children[0].checked,
                      // [step_x + '__' + group_x + '__radios__name']: null,
                      // [step_x + '__' + group_x + '__radios__value']: null
                      // ['item_' + itemGroupId + '_value']: null,
                      // ['item_' + itemGroupId + '_name']: null,
                      // ['item_' + itemGroupId + '_value_toggle']: e.target.parentNode.children[0].checked
                  }
              });
      } else {
          keyExists('select', state.car[step_x + '_field_' + itemGroupId].values)
          &&
          context.methods.setAppState({
              selectedValue3: {
                  ...state.selectedValue3,
                  [step_x + '__' + group_x + '__toggle']: e.target.parentNode.children[0].checked
                  // ['item_' + itemGroupId + '_value_toggle']: e.target.parentNode.children[0].checked
              }
          })
          keyExists('radio', state.car[step_x + '_field_' + itemGroupId].values)
          &&
          context.methods.setAppState({
              selectedValue3: {
                  ...state.selectedValue3,
                  [step_x + '__' + group_x + '__toggle']: e.target.parentNode.children[0].checked
                  // ['item_' + itemGroupId + '_value_toggle']: e.target.parentNode.children[0].checked,
                  // ['item_' + itemGroupId + '_value']: 0,
                  // ['item_' + itemGroupId + '_name']: state.car['step_' + state.currentStep + '_field_' + itemGroupId].values.radio[0].name
              }
          })
      }
  }

  render() {
      const { context } = this.props;
      const state = context.state;
      const step_x = 'step_' + state.currentStep;
      const group_x = 'group_' + this.props.itemGroupId;
      const itemGroupId = this.props.itemGroupId;
      const itemGroupSystemName = this.props.itemGroupSystemName;

    return (
        <div>
            <div className='toggle'>

                <input
                    className="toggle__input"
                    id={itemGroupSystemName + "-checkbox"}
                    type='checkbox'
                    onChange={this.change.bind(this)}
                    defaultChecked={
                        keyExists(step_x + '__' + group_x + '__toggle', state.selectedValue3)
                        ?
                        state.selectedValue3[step_x + '__' + group_x + '__toggle']
                        :
                        state.car[step_x + '_field_' + itemGroupId].switch.checked
                    }

                />

                <label className='toggle__label' htmlFor={itemGroupSystemName + "-checkbox"}>
                    {
                        state.selectedValue3[step_x + '__' + group_x + '__toggle']
                        ?
                            state.car[step_x + '_field_' + itemGroupId].switch.on
                        :
                            state.car[step_x + '_field_' + itemGroupId].switch.off
                    }
                </label>
            </div>
        </div>
    )
  }

}
