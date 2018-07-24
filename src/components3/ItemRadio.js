import React, { Component } from 'react';

export default class ItemRadio extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }
  change(val) {
    const { context } = this.props;
    const idBlock = this.props.idBlock,
          selectedVal = 'val__' + idBlock;
    context.methods.setAppState({
      [selectedVal]: val,
    })
  }
  render() {
    const {context} = this.props;
    const currentAvto = context.state.currentAvto,
          currentStep = context.state.currentStep,
          idBlock = this.props.idBlock,
          systemName = this.props.systemName,
          selectedVal = context.state['val__' + idBlock],
          fields__x__x__x = context.state['fields__' + currentAvto + '__' + currentStep + '__' + idBlock];

    const list = fields__x__x__x.map((field, key) => {
      return (
        <div key={key} className={'b__item'}>
          <input className="b__input" id={systemName + "-" + key} defaultChecked={selectedVal===key?true:false} type='radio' name={systemName} value={key} />
          <label className="b__label" onClick={()=>this.change(key)} htmlFor={systemName + "-" + key}>
            <div className='b__name'>{field.name}</div>
            <div className='b__subname'>{field.subName}</div>
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
