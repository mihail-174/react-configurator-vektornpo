import React, { Component } from 'react';
import '../css/B.css';

export default class Item extends Component {
  render() {
    const { context } = this.props;
    console.log( this.props.options );
    let list='';

    if ( this.props.options !== undefined ) {

      list = this.props.options.map((field, key) => {
        return (
          <div className='b__item' key={key}>
            <input id={this.props.systemName + "-" + key} onChange={this.handleChange} className="b__input"  type='radio' name={this.props.systemName} value={key} />
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

// <div>this.state['fields__' + this.state.selectedAvto + '__' + this.state.currentStep + '__' + field.id]</div>
