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
  handleInputChange(e) {
    const { context } = this.props,
          state = context.state,
          currentAvto = state.currentAvto,
          currentStep = state.currentStep,
          idBlock = this.props.idBlock,
          selectedVal = 'val__' + idBlock,
          fields__x__x__x = 'fields__' + currentAvto + '__' + currentStep + '__' + idBlock;

    // console.log( event.target.parentNode.querySelector('input').checked );
    // console.log( e.currentTarget.parentNode.children[0].checked );
    context.methods.setAppState({
        [fields__x__x__x]: [
            {
                ...state[fields__x__x__x][0],
                'val': !e.currentTarget.parentNode.children[0].checked
            }
        ]
        // [selectedVal]: e.currentTarget.parentNode.children[0].checked,
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
    // console.log( fields__x__x__x__options );
    // let newSwitchCheck;
    // if ( fields__x__x__x__options ) {
    //   newSwitchCheck = fields__x__x__x__options.switch_check;
    // }

    const list = fields__x__x__x.map((field, key) => {
      return (
        <div key={key} className={
          fields__x__x__x[0].val
          ?
          'b__item b__item_' + key + ' active'
          :
          'b__item b__item_' + key
        }>
            <input id={systemName + "-" + key} defaultChecked={fields__x__x__x[0].val} type='checkbox' name={systemName} value={key} />

            <label className="b__label" onClick={this.handleInputChange} htmlFor={systemName + "-" + key}>

                {field.ico && <div className='b__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
                <div className='b__text'>
                  <div className='b__name'>{field.name}</div>
                  {field.subName && <div className='b__subname'>{field.subName}</div> }
                </div>

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


  // <input id={systemName + "-" + key} defaultChecked={selectedVal} type='checkbox' name={systemName} value={key} />
  //
  // <label className="b__label" onClick={this.handleInputChange} htmlFor={systemName + "-" + key}>
  //
  //     {field.ico && <div className='b__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
  //     <div className='b__text'>
  //       <div className='b__name'>{field.name}</div>
  //       {field.subName && <div className='b__subname'>{field.subName}</div> }
  //     </div>
  //
  // </label>
