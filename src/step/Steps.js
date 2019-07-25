import React, { Component } from 'react';
import Step1 from '../step/Step1';
import Step2 from '../step/Step2';
import Step3 from '../step/Step3';

export default class Steps extends Component {
  render() {
    const { context } = this.props;
    console.log( context.state.currentStep );
    return (
      <div>
        {context.state.currentStep === 1 &&
          <Step1 context={context}/>
        }
        {context.state.currentStep === 2 &&
          <Step2 context={context}/>
        }
        {context.state.currentStep === 3 &&
          <Step3 context={context}/>
        }
      </div>
    );

  }

}
