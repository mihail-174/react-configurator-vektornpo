import React, { Component } from 'react';

export default class itemSelect extends Component {

    constructor() {
        super();
        this.change = this.change.bind(this);
    }

    change(val, name) {
        // const { context } = this.props;
        // const state = context.state;
        // const itemGroupId = this.props.itemGroupId;
        // const itemGroupName = this.props.itemGroupName;
        //
        // context.methods.setAppState({
        //     selectedValue: {
        //         ...state.selectedValue,
        //         ['item_' + itemGroupId + '_value']: val,
        //         ['item_' + itemGroupId + '_name']: name
        //     }
        // });
        //
        // document.querySelectorAll('.' + itemGroupName + ' .item__item').forEach(function(item, i) {
        //     item.classList.remove('active')
        // });
        // document.querySelectorAll('.' + itemGroupName + ' .item__item')[val].classList.add('active');
    }

  render() {
    const { context } = this.props;
    const state = context.state;
    const itemGroupId = this.props.itemGroupId;
    const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values;
    const itemGroupName = this.props.itemGroupName;

    console.log( itemGroupId );

    return (
        <div className='item__list'>
            {
                // state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0]
                // state.car.step_1_field_3.values[0]
                field.forEach((item, i, field) =>
                    <div>{item}</div>
                )
                // console.log( i + ": " + item + " (массив:" + field + ")" );
                // field.forEach( (item, key) => {
                // })
                    // <div key={key} className={
                    //     state.selectedValue['item_'+ itemGroupId + '_value'] === key
                    //     ?
                    //     'item__item active'
                    //     :
                    //     'item__item'
                    // }>
                    //     <option value={key}>{field.name}</option>
                    // </div>
                // )
            }
        </div>
    )

  }
}
