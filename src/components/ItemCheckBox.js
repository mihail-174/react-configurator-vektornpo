import React, { Component } from 'react';

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

export default class ItemCheckBox extends Component {

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        const itemGroupName = this.props.itemGroupName;

        context.methods.setAppState({
            selectedValue: {
                ...state.selectedValue,
                ['item_' + itemGroupId + '_value']: e.currentTarget.checked
            }
        });

        if ( e.target.parentNode.children[0].checked ) {
            document.querySelector('.' + itemGroupName + ' .item__item').classList.add('active');
        } else {
            document.querySelector('.' + itemGroupName + ' .item__item').classList.remove('active');
        }

    }

  render() {
      const itemGroupId = this.props.itemGroupId;
      const itemGroupName = this.props.itemGroupName;
      const { context } = this.props;
      const state = context.state;
      const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values;

      return (
          <div className='item__list'>
              {
                  field.map( (field, key) =>
                      <div key={key} className={
                          keyExists('item_' + itemGroupId + '_value', state.selectedValue)
                          ?
                              state.selectedValue['item_' + itemGroupId + '_value']
                              ?
                                  'item__item active'
                              :
                                  'item__item'
                          :
                              state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked
                              ?
                                  'item__item active'
                              :
                                  'item__item'
                      }>
                          <input defaultChecked={
                              keyExists('item_' + itemGroupId + '_value', state.selectedValue)
                              ?
                              state.selectedValue['item_' + itemGroupId + '_value']
                              :
                              state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked
                          } className="item__input" id={itemGroupName + "-" + key} type='checkbox' name={itemGroupName} onChange={this.handleInputChange.bind(this)} />

                          <label className="item__label" htmlFor={itemGroupName + "-" + key}>
                              {field.ico && <div className='item__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
                              <div className='item__text'>
                                  <div className='item__name'>{field.name}</div>
                                  {field.subName && <div className='item__subname'>{field.subName}</div> }
                              </div>
                          </label>
                      </div>
                  )
              }
          </div>
      )

  }

}
