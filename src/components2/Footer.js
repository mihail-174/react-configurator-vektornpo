import React, { Component } from 'react';
import '../css/footer.css';

export default class Footer extends Component {
  constructor() {
    super();
    this.setStep = this.setStep.bind(this);
    // this.setStep2 = this.setStep2.bind(this);
  }
  setStep(e) {
    e.preventDefault();
    const {context} = this.props;
    const step = e.target.getAttribute('data-step');
    context.methods.setAppState({
      currentStep: parseInt(step, 0)
    })
  }
  // setStep2(step) {
  //   const {context} = this.props;
  //   var aaa='';
  //   switch(step) {
  //     case 'prev':
  //       aaa = parseInt(context.state.currentStep-1, 0);
  //       console.log( aaa );
  //       break;
  //     case 'next':
  //       aaa = parseInt(context.state.currentStep+1, 0);
  //       console.log( aaa );
  //       break;
  //     default:
  //   }
  //   context.methods.setAppState({
  //     currentStep: aaa
  //   })
  // }
  render() {
    const {context} = this.props;
    // const step = context.state.currentStep;
    // console.log( step );

    const step = context.state.currentStep;
    const prevStep = step - 1;
    const nextStep = step + 1;

    let first = <button type='button' className='footer__first' onClick={this.setStep} data-step={0}>Начать с начала</button>;

    let prev = <button type='button' className='footer__prev' onClick={this.setStep} data-step={prevStep}>Назад</button>;

    let next = <button type='button'className='footer__next'  onClick={this.setStep} data-step={nextStep}>Далее</button>;

    let finish = <button type='button'className='footer__finish'>Получить коммерческое предложение</button>;

    if ( step === 1 ) {
      prev = null;
    }
    if ( step >= 4 ) {
      next = null;
    }
    if ( step <= 3 ) {
      finish = null;
    }

    // const list = context.state.buttons.map((field, key) =>
    //   <button key={key} className={'footer__' + field.systemName} onClick={()=>this.setStep2(field.systemName)}>{field.id} {field.name} {field.systemName}</button>
    // );

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



// <div>{list}</div>
