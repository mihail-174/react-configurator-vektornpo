import React, { Component } from 'react';

function keyExists(key, search) {
    if (!search || (search.constructor !== Array && search.constructor !== Object)) {
        return false;
    }
    for (var i = 0; i < search.length; i++) {
        if (search[i] === key) {
            return true;
        }
    }
    return key in search;
}

export default class ItemCheckBox extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const { context } = this.props,
          state = context.state,
          idBlock = this.props.idBlock,
          selectedVal = 'val__' + idBlock;

    console.log( event.target.parentNode.querySelector('input').checked );

    context.methods.setAppState({
      [selectedVal]: event.target.parentNode.querySelector('input').checked
    });
  }
  change(val) {
    // const { context } = this.props,
    //       state = context.state,
    //       currentAvto = state.currentAvto,
    //       currentStep = state.currentStep,
    //       idBlock = this.props.idBlock,
    //       systemName = this.props.systemName,
    //       selectedVal = 'val__' + idBlock,
    //       fields__x__x__x__options = state["fields__" + currentAvto + "__" + currentStep + "__" + idBlock + "__options"];

    // if ( (keyExists('switch_check', fields__x__x__x__options)===true && fields__x__x__x__options.switch_check) || keyExists('switch_check', fields__x__x__x__options)===false ) {
      // document.querySelectorAll('.' + systemName + ' .b__item').forEach(function(item, i) {
      //   item.classList.remove('active')
      // });
      // document.querySelector('.' + systemName + ' .b__item_' + val).classList.add('active');
    // }

    // console.log( document.querySelector('.' + systemName + ' input').change );
    //
    // context.methods.setAppState({
    //   [selectedVal]: !selectedVal
    // });

    // if ( (keyExists('switch_check', fields__x__x__x__options)===true && fields__x__x__x__options.switch_check) || keyExists('switch_check', fields__x__x__x__options)===false ) {
    //   document.querySelectorAll('.' + systemName + ' .b__item').forEach(function(item, i) {
    //     item.classList.remove('active')
    //   });
    //   document.querySelector('.' + systemName + ' .b__item_' + val).classList.add('active');
    // }
  }
  render() {
    const {context} = this.props,
          state = context.state,
          currentAvto = state.currentAvto,
          currentStep = state.currentStep,
          idBlock = this.props.idBlock,
          systemName = this.props.systemName,
          selectedVal = state['val__' + idBlock],
          fields__x__x__x = state['fields__' + currentAvto + '__' + currentStep + '__' + idBlock],
          fields__x__x__x__options = state["fields__" + currentAvto + "__" + currentStep + "__" + idBlock + "__options"];

    let newSwitchCheck;
    if ( fields__x__x__x__options ) {
      newSwitchCheck = fields__x__x__x__options.switch_check;
    }

    const list = fields__x__x__x.map((field, key) => {
      return (
        <div key={key} className=''>

          <input id={systemName + "-" + key} checked={selectedVal} type='checkbox' name={systemName} value={key} />

          <label onClick={this.handleInputChange} htmlFor={systemName + "-" + key}>

          {field.name}

          </label>

        </div>
        )
      }
    );

    return (
      <div className='b__list'>
        {list}
      </div>
    )

  }
}


// defaultChecked={selectedVal===null && selectedVal===key?true:false}
