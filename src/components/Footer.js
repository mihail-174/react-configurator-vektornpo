import React, { Component } from 'react';
import '../scss/footer.scss';

export default class Footer extends Component {
  constructor() {
    super();
    this.setStep = this.setStep.bind(this);
    this.startAgain = this.startAgain.bind(this);
  }
  setStep(e) {
    e.preventDefault();
    const {context} = this.props;
    const step = e.target.getAttribute('data-step');
    context.methods.setAppState({
      currentStep: parseInt(step, 0),
      currentStepPrev: parseInt(step, 0) - 1
    });
  }
  startAgain(e) {
    e.preventDefault();
    const {context} = this.props;
    context.methods.setAppState({
        currentStep: 0,
        currentStepPrev: 0,
        car: [],
        selectedValue3: {},
    })
  }
  render() {
    const {context} = this.props;
    const step = context.state.currentStep;
    const prevStep = step - 1;
    const nextStep = step + 1;
    let first = <button type='button' className='footer__first' onClick={this.startAgain} data-step={0}>Начать с начала</button>;
    let prev = <button type='button' className='footer__prev' onClick={this.setStep} data-step={prevStep}>Назад</button>;
    let next = <button type='button'className='footer__next' onClick={this.setStep} data-step={nextStep}>Далее</button>;
    let finish = <button type='submit'className='footer__finish'>Получить коммерческое предложение</button>;
    if ( step === 1 ) {
      prev = null;
    }
    if ( step >= 4 ) {
      next = null;
    }
    if ( step <= 3 ) {
      finish = null;
    }
    return (
      <div className="footer">
        {first}
        <div>
          {prev}
          {next}
          {finish}
        </div>
      </div>
    );
  }

}
