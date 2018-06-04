import React, { Component } from 'react';
import '../css/zimniiPaket.css';

const arr = {
  'fields': [
    {
      "name": "Автономн. отопитель",
      'machine_name': 'avtonomnOtopitel'
    },
    {
      "name": "Фильтр SEPAR2000",
      'machine_name': 'filtrSEPAR2000'
    },
    {
      "name": "Сумка - ADR",
      'machine_name': 'sumkaADR'
    },
    {
      "name": "Утепление кабины и моторного отсека",
      'machine_name': 'uteplenieKabinyMotornogoOtseka'
    },
    {
      "name": "Утепление аккумуляторного отсека",
      'machine_name': 'uteplenieAkkumuliatornogoOtseka'
    }
  ]
};

export default class ZimniiPaket extends Component {

  constructor(props) {
    super(props);
    this.changeCheckbox = this.changeCheckbox.bind(this);
  }
  changeCheckbox(e) {
    let item= ''
    switch ( e.target.parentNode.getAttribute('data-machine_name') ) {
      case 'avtonomnOtopitel':
        item = 'avtonomnOtopitel';
        break;
      case 'filtrSEPAR2000':
        item = 'filtrSEPAR2000';
        break;
      case 'sumkaADR':
        item = 'sumkaADR';
        break;
      case 'uteplenieKabinyMotornogoOtseka':
        item = 'uteplenieKabinyMotornogoOtseka';
        break;
      case 'uteplenieAkkumuliatornogoOtseka':
        item = 'uteplenieAkkumuliatornogoOtseka';
        break;
      default:
    }
    const { context } = this.props.context;
    context.methods.setAppState({
      [item]: {
        ...context.state[item],
        checked: !context.state[item].checked
      }
    });
  }
  componentDidMount() {

    const { context } = this.props.context;
      let item= ''
      if ( context.state.avtonomnOtopitel.checked ) {
        item = 'avtonomnOtopitel';
      }
      // switch ( context.state.avtonomnOtopitel.checked ) {
      //   case 'avtonomnOtopitel':
      //     item = 'avtonomnOtopitel';
      //     break;
      // }
      console.log( item );


  }
  render() {
    const { context } = this.props.context;
    const list = arr.fields.map((field, key) =>

      <div key={key} className={context.state.zimniiPaket.checked ? 'block__item': 'block__item block_disabled'} data-machine_name={field.machine_name}>
        <input className="block__input" id={"zimniiPaketCheck-" + key} value={key} onChange={this.changeCheckbox} defaultChecked={context.state.zimniiPaket.checked} type='checkbox' />
        <div className="toggle">
          <label htmlFor={"zimniiPaketCheck-" + key}>
            <div><span></span></div>
          </label>
        </div>
        <label htmlFor={"zimniiPaketCheck-" + key}>
          <div className="block__name">{field.name}</div>
        </label>
      </div>

    );

    return (
      <div className='block block_col zimniiPaket'>
        <div className="block__list">
          {list}
        </div>
      </div>
    );

  }
}

// <div className={context.state.zimniiPaket.checked ? 'block block_col zimniiPaket': 'block block_col block_disabled zimniiPaket'}>

// <div key={key} className={value === key ? 'block__item active': 'block__item'}>
//   <input className="block__input" id={"zimniiPaketCheck-" + key} onChange={this.changeCheckbox} defaultChecked={context.state.zimniiPaket.checked} type='checkbox' />
//   <div className="toggle">
//     <label htmlFor={"zimniiPaketCheck-" + key}>
//       <div><span></span></div>
//     </label>
//   </div>
//   <label htmlFor={"zimniiPaketCheck-" + key}>
//     <div className="block__name">{field.name}</div>
//   </label>
// </div>
// );
// return (
// <div className={context.state.zimniiPaket.checked ? 'block block_col zimniiPaket': 'block block_col block_disabled zimniiPaket'}>
//   <div className="block__list">
//     {list}
//   </div>
// </div>
// );
