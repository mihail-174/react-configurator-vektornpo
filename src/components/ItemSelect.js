import React, { Component } from 'react';
import Select from 'react-select';

// https://codesandbox.io/s/hhgf4?module=/example.js

export default class itemSelect extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectedOption, idSelect) {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;

        console.log(selectedOption);
        console.log(idSelect);

        if ( selectedOption !== null )
        {
            context.methods.setAppState({
                selectedValue: {
                    ...state.selectedValue,
                    ['item_' + itemGroupId + '_' + idSelect + '_value']: selectedOption.value,
                    ['item_' + itemGroupId + '_' + idSelect + '_name']: selectedOption.label
                }
            });
        }
        else
        {
            context.methods.setAppState({
                selectedValue: {
                    ...state.selectedValue,
                    ['item_' + itemGroupId + '_' + idSelect + '_value']: null,
                    ['item_' + itemGroupId + '_' + idSelect + '_name']: null
                }
            });
        }
    }

    render() {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        const itemGroupName = this.props.itemGroupName;
        const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values.select;

        const list = field.map((sel, key) =>
            <Select
                key={key}
                // defaultValue={colourOptions[1]}
                isClearable={true}
                // hideSelectedOptions={false}
                placeholder={state.car['step_' + state.currentStep + '_field_' + itemGroupId].values.select[key].label}
                onChange={(e)=>this.handleChange(e, key)}
                options={[sel]}
            />
        );

        return (
            <div className='item__list'>
                {list}
            </div>
        )
    }

}
