import React, { Component } from 'react';

export default class ItemRadio extends Component {
  render() {
    const {context} = this.props;
    const fields__x__x__x = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id];
    const fields__x__x = 'fields__' + context.state.currentAvto + '__' + context.state.currentStep;
    // const fields__x__x__x__options = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id + '__options'].switch_check;
    // const fields__x__x__x__options = 'fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id + '__options';

    console.log( this.props.id );
    // console.log( context.state['fields__' + context.state.currentAvto + '__1__' + this.props.id + '__options'].switch_check );
    // console.log( context.state[fields__x__x__x__options] );

    const list = fields__x__x__x.map((field, key) => {
      return (
        <div key={key} className={'b__item'}>
          <label className="b__label" htmlFor={context.state[fields__x__x][key].system + "-" + key}>
            <div className='b__name'>{field.name}</div>
            <div className='b__subname'>{field.subname}</div>
          </label>
        </div>
        )
      }
    );



    // const options = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id];

    // let item = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep][this.props.id2];
    // let switchCheck = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep][this.props.id2].switchCheck;
    // let system = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep][this.props.id2].system;
    // let selected = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__val';

    // const list = options.map((field, key) => {
    //   return (
    //     <div key={key} className={'b__item'}>
    //
    //       <br/>
    //       ———
    //       <br/>
    //       { system }
    //       <br/>
    //
    //       { keyExists('switchCheck', item ) ? (switchCheck?'b__item':'b__item disabled'):'НЕТ' }
    //
    //       <input id={system + "-" + key} checked={ parseInt(context.state[selected], 0) === key ? true : false } onClick={this.change} onChange={this.handleChange} className="b__input" type='radio' name={system} value={key} />
    //
    //       <label className="b__label" htmlFor={system + "-" + key}>
    //         <div className='b__name'>{field.name}</div>
    //         <div className='b__subname'>{field.subname}</div>
    //       </label>
    //     </div>
    //   )
    // })

    return (
      <div className='b__list'>
        {list}
      </div>
    )

  }
}
