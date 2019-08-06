import React, { Component } from 'react';

export default class itemCounter extends Component {

    constructor() {
        super();
        // this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        // const itemGroupName = this.props.itemGroupName;
        const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values.counter;

        // const list = field.map((sel, key) =>
        //     console.log( sel );
        // );

        return (
            <div className='item__list'>
                {field.label}
            </div>
        )
    }

}
