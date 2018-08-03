import React, { Component } from 'react';
import '../scss/header.scss';

export default class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.setStep = this.setStep.bind(this);
  // }
  setStep(step) {
    const { context } = this.props;
    context.methods.setAppState( { currentStep: step } );
  }
  render() {
    const { context } = this.props;
    const list = context.state.steps.map((field, key) =>
      <div key={key} className={context.state.currentStep === field.id ? 'header__item header__item_' + field.id + ' active' : 'header__item header__item_' + field.id} onClick={()=>this.setStep(field.id)}>
        {field.name}
      </div>
    );
    return (
      <div className="header">
        <div className='header__title'>
          <div className='header__ico'><img src={context.state.machine_names[context.state.currentAvto-1].image} alt=''/></div>
          <div className='header__name'>{context.state.machine_names[context.state.currentAvto-1].name}</div>
        </div>
        {list}
      </div>
    );

  }

}
