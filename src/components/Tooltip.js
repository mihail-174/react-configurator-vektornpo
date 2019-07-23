import React, { Component } from 'react';

import '../scss/tooltip.scss';

export default class Tooltip extends Component {

    render() {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        const itemGroupName = this.props.itemGroupName;
        const itemId = this.props.itemId;
        console.log(itemGroupId);
        console.log(itemGroupName);
        console.log(itemId);
        return (
            <div className={'tooltip tooltip_' + state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[itemId].tooltip_position}>
                { state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[itemId].tooltip }
            </div>
        )
    }

}

    // <div className={'tooltip ' + state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[itemId].tooltip_position}>
    //     { state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[itemId].tooltip }
    // </div>
