import React, { Component } from 'react';

import Step1 from '../step/Step1';
import Step2 from '../step/Step2';
import Step3 from '../step/Step3';
import Step4 from '../step/Step4';

export default class Contents extends Component {
    render() {
        const {context} = this.props;
        return (
            <div className='content'>
                { context.state.currentStep === 1 && <Step1 context={context}/> }
                { context.state.currentStep === 2 && <Step2 context={context}/> }
                { context.state.currentStep === 3 && <Step3 context={context}/> }
                { context.state.currentStep === 4 && <Step4 context={context}/> }
            </div>
        );

    }
}
