import React, { Component } from 'react';
import '../css/header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.setStep = this.setStep.bind(this);
  }
  setStep(e) {
    e.preventDefault();
    let step = parseInt( e.currentTarget.getAttribute('data-step') , 0 );
    const { context } = this.props;
    context.methods.setAppState( { currentStep: step } );
  }
  render() {
    const { context } = this.props;
    return (

      <div className="header">
        <div className={context.state.currentStep === 1 ? "header__item active" : "header__item" } onClick={this.setStep} data-step={1}>
          <span>1 ШАГ</span>
        </div>
        <div className={context.state.currentStep === 2 ? "header__item active" : "header__item" } onClick={this.setStep} data-step={2}>
          <span>2 ШАГ</span>
        </div>
        <div className={context.state.currentStep === 3 ? "header__item active" : "header__item" } onClick={this.setStep} data-step={3}>
          <span>3 ШАГ</span>
        </div>
      </div>

    );

  }

}
 // ref={(input) => { this.textInput = input; }}

/*
 <div className="header">
 <div onClick={this.handleChange} data-step={1} className={context.state.currentStep === 1 ? "header__item active" : "header__item"}>
 <span>1 ШАГ</span>
 </div>
 <div onClick={this.handleChange} data-step={2} className={context.state.currentStep === 2 ? "header__item active" : "header__item"}>
 <span>2 ШАГ</span>
 </div>
 <div onClick={this.handleChange} data-step={3} className={context.state.currentStep === 3 ? "header__item active" : "header__item"}>
 <span>3 ШАГ</span>
 </div>
 </div>
*/

/*
 <div className="header">
   <div className={this.state.currentStep === 1 ? "header__item active" : "header__item" } onClick={this.setStep} data-step={1}>
     <span>1 ШАГ</span>
   </div>
   <div className={this.state.currentStep === 2 ? "header__item active" : "header__item" } onClick={this.setStep} data-step={2}>
     <span>2 ШАГ</span>
   </div>
   <div className={this.state.currentStep === 3 ? "header__item active" : "header__item" } onClick={this.setStep} data-step={3}>
     <span>3 ШАГ</span>
   </div>
 </div>
*/

/*
<div className="header">
  <div className={currentStep === 1 ? "header__item active" : "header__item" } onClick={this.props.setStep} data-step={1}>
    <span>1 ШАГ</span>
  </div>
  <div className={currentStep === 2 ? "header__item active" : "header__item" } ref={(input) => { this.textInput = input; }} >
    <span>2 ШАГ</span>
  </div>
  <div className={currentStep === 3 ? "header__item active" : "header__item" } onClick={this.props.setStep} data-step={3}>
    <span>3 ШАГ</span>
  </div>
</div>
*/
