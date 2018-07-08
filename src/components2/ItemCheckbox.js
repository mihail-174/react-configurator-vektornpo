import React, { Component } from 'react';
import '../css/B.css';

export default class ItemCheckbox extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }

  change(e) {
    const { context } = this.props;
    let itemChecked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
    // console.log('по умолчанию: ' + this.props.checked);
    // console.log('в стейте: ' + context.state[itemChecked]);
    let valChecked=this.props.checked;
    switch (context.state[itemChecked]) {
      case '':
        // console.log( 'в стейте: пусто' );
        valChecked = !this.props.checked;
        break;
      case true:
      // console.log( 'в стейте: да true' );
        valChecked = false;
        break;
      case false:
        // console.log( 'в стейте: нет false' );
        valChecked = true;
        break;
      default:
    }
    // console.log('итого: ' + valChecked);
    context.methods.setAppState({
      [itemChecked]: valChecked
    })
  }

  render() {
    const {context} = this.props;
    let itemChecked = 'auto__' + context.state.currentAvto + '__' + this.props.id + '__checked';
    // console.log('в стейте: ' + context.state[itemChecked]);
    let list='';
    if ( this.props.options !== undefined ) {
      list = this.props.options.map((field, key) => {
        return (
          <div className='b__item' key={key}>
            <input id={this.props.systemName + "-" + key} defaultChecked={context.state[itemChecked] === '' ? this.props.checked : context.state[itemChecked] } onClick={this.change} onChange={this.handleChange} className="b__input" type='checkbox' name={this.props.systemName} value={key} />
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
