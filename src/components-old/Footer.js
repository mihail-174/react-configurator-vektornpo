import React, { Component } from 'react';
import '../css/footer.css';

export default class Footer extends Component {

  render() {
    const step = this.props.appState.currentStep;
    const prevStep = step - 1;
    const nextStep = step + 1;

    let prev = <button type='button' onClick={this.props.setStep} data-step={prevStep}>Назад</button>;
    let next = <button type='button' onClick={this.props.setStep} data-step={nextStep}>Далее</button>;

    if ( step === 0 ) {
      prev = null;
    }
    if ( step >= 3 ) {
      next = null;
    }

    return (
      <div className="footer">

        { prev }
        { next }

      </div>
    );
  }

}
