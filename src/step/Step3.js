import React, { Component } from 'react';

export default class Step3 extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {

    const states = ['Новый', 'Отличное', 'Хорошее', 'Удовл.', 'Битый', 'На запчасти'];
    const statesRadios = states.map((state, key) => {
      key = key+1;
      return <li key={key}>
          <input id={"states-check-" + key} type='radio' name='state' value={key} data-label={state} />
          <label htmlFor={"states-check-" + key}>{state}</label>
      </li>;
    })

    return <div className='main__content main__content_three'>
      шаг3
      {statesRadios}
      </div>

  }

}
