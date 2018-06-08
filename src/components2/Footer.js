import React, { Component } from 'react';
import '../css/footer.css';

export default class Footer extends Component {
  constructor() {
    super();
    this.setStep = this.setStep.bind(this);
  }
  setStep(e) {
    e.preventDefault();
    const {context} = this.props;
    const step = e.target.getAttribute('data-step');
    context.methods.setAppState({
      currentStep: parseInt(step, 0)
    })
  }
  render() {
    const {context} = this.props;
    const step = context.state.currentStep;
    const prevStep = step - 1;
    const nextStep = step + 1;

    let first = <button type='button' className='footer__first' onClick={this.setStep} data-step={0}>Начать с начала</button>;
    let prev = <button type='button' className='footer__prev' onClick={this.setStep} data-step={prevStep}>Назад</button>;
    let next = <button type='button'className='footer__next'  onClick={this.setStep} data-step={nextStep}>Далее</button>;

    if ( step === 1 ) {
      prev = null;
    }
    if ( step >= 3 ) {
      next = null;
    }

    return (
      <div className="footer">

        {first}
        <div>
          {prev}
          {next}
        </div>

      </div>
    );
  }

}
