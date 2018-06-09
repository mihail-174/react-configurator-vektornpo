import React, { Component } from 'react';
import '../css/B.css';

export default class Item extends Component {
  render() {
    // console.log( this.props.options );
    // console.log( this.props.type );
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
