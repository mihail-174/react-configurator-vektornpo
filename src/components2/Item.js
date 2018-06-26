import React, { Component } from 'react';
import '../css/B.css';

export default class Item extends Component {
  // constructor() {
  //   super();
  //   this.change = this.change.bind(this);
  // }
  // change(e) {
  //   console.log( e.currentTarget.parentNode.querySelector('input').getAttribute('value') )
  //   const { context } = this.props;
  //   const objectjson = ['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id + '__options'];
  //   context.methods.setAppState({
  //     [objectjson]: {
  //       ...context.state[objectjson],
  //       selected: e.currentTarget.parentNode.querySelector('input').getAttribute('value')
  //     }
  //   })
  // }
  render() {

    // function isEmpty(obj) {
    //   for (var key in obj) {
    //     return false;
    //   }
    //   return true;
    // }

    // const {context} = this.props;
    // const field_options = ['fields__' + context.state.currentAvto + '__' + context.state.currentStep + '__' + this.props.id + '__options'];
    // console.log( !isEmpty(field_options) );
    let list='';

    if ( this.props.options !== undefined ) {
      list = this.props.options.map((field, key) => {
        return (
          <div className='b__item' key={key}>
            <input id={this.props.systemName + "-" + key} onChange={this.handleChange} className="b__input"  type={this.props.type} name={this.props.systemName} value={key} />
            <label className="b__label" htmlFor={this.props.systemName + "-" + key}>
              <div className='b__name'>{field.name}</div>
              <div className='b__subname'>{field.subname}</div>
            </label>
          </div>

        )
      });

    }

    return (
      <div className='b__list'>
        {list}
      </div>
    )

  }
}
