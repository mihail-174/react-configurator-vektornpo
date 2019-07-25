import React, { Component } from 'react';
import '../css/vacNasos.css';
import Item from '../components/Item.js'

const data = {
  title: 'Вакуумный насос',
  machine_name: 'vacuum_pump'
}

const dataakn = [
  {name: "насос 1"},
  {name: "насос 2"}
]

const datamv = [
  {name: "насос 3"},
  {name: "насос 4"}
]

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

export default class VacNasos extends Component {

  componentDidMount() {
    const { context } = this.props;
    // context.context.methods.setAppState({
    //   [data.machine_name+'_name']: data.name
    // });
    context.context.methods.setAppState({
      settings: {
        ...context.context.state.settings,
        [data.machine_name+'_title']: data.title,
        [data.machine_name+'_selected']: '',
        [data.machine_name+'_value']: ''
      }
    });
  }

  render() {
    const { context } = this.props.context;

    let dataarr = {};
    switch (context.state.selectedAvto) {
      case 'АКН':
        dataarr = dataakn;
        break;
      case 'МВ':
        dataarr = datamv;
        break;
      default: '';
    }
    console.log( 'ВЫБРАН: ' + context.state.selectedAvto );
    console.log( dataarr );

    let NewList;
    if ( !isEmpty(dataarr) ) {
      NewList = dataarr.map((field, key) =>
        <div>
          <Item context={context} title={data.title} name={field.name} selected={field.name} value={key} machine_name={data.machine_name} />
        </div>
      );
    }

    // console.log( context.state.selectedAvto );

    return (
      <div>
        {context.state.selectedAvto === 'АКН' &&
          <div className={"b b_row " + data.machine_name}>
            <div className="b__title">{data.title}</div>
            <div className="b__list">{NewList}</div>
          </div>
        }
        {context.state.selectedAvto === 'МВ' &&
          <div className={"b b_row " + data.machine_name}>
            <div className="b__title">{data.title}</div>
            <div className="b__list">{NewList}</div>
          </div>
        }
      </div>
    );

  }
}


// ---------------------------------------------------------
    // const list = data.fields.map((field, key) =>
    //   <div>
    //     {context.state.selectedAvto === 'АКН' && field.aaa === 'АКН' &&
    //     <div key={key} className={value === key ? 'block__item active': 'block__item'}>
    //       <input className="block__input" id={"vacNasosCheck-" + key} onChange={this.handleChange} type='radio' name='vacNasosFields' value={key} checked={value === key ? true: false} />
    //         <label htmlFor={"vacNasosCheck-" + key}>
    //         <div className="block__name">{field.name}</div>
    //         <div className="block__subname">{field.subname}</div>
    //       </label>
    //     </div>
    //     }
    //     {context.state.selectedAvto === 'МВ' && field.aaa === 'МВ' &&
    //     <div key={key} className={value === key ? 'block__item active': 'block__item'}>
    //       <input className="block__input" id={"vacNasosCheck-" + key} onChange={this.handleChange} type='radio' name='vacNasosFields' value={key} checked={value === key ? true: false} />
    //         <label htmlFor={"vacNasosCheck-" + key}>
    //         <div className="block__name">{field.name}</div>
    //         <div className="block__subname">{field.subname}</div>
    //       </label>
    //     </div>
    //     }
    //   </div>
    // );

    // <div className="block block_row vacNasos">
    //   <div className="block__title">{context.state.vacNasos.name}</div>
    //   <div className="block__list">{list}</div>
    // </div>
// ---------------------------------------------------------


// const avtoArr = data.fields[0].avto.map((field, key) =>
//   <div>
//     {field}
//   </div>
// );
// {avtoArr}

// let avto='';
// switch (context.state.selectedAvto) {
//   case 'АКН':
//     avto = 'АКН';
//     break;
//   case 'МВ':
//     avto = 'МВ';
//     break;
//   case 'АЦН':
//     avto = 'АЦН';
//     break;
//   default:
//     avto = '';
// }
// componentsole.log( avto );

// {context.state.selectedAvto === 'МВ' ? '1' : '0' }

// let aaa;
// let mb;
// if ( context.state.selectedAvto === 'МВ' ) {
//   mb = 'МВ 1';
// } else {
//   mb = 'МВ 0';
// }

// {(() => {
//   switch (context.state.selectedAvto) {
//     case 'АКН':
//       list
//       break;
//     case 'МВ':
//       list
//       break;
//     default: 'гыы'
//   }
// })()}

// const mb = context.state.selectedAvto === 'МВ' ? '1': '0';
// const akn = context.state.selectedAvto === 'АКН' ? '1': '0';
// {field.aaa === 'МВ' &&

/*
store = {
  machine_names: [
    { id: 1, name: 'АКН' },
    { id: 2, name: 'MB' },
    { id: 3, name: 'АЦН' },
  ],
  steps__1: 3,
  fields: [
    { id: 1, name: 'Вакуумный насос', type: 'radios' },
  ],
  fields__1__1__1: { options: [] }
}

const header = this.state.machine_names.map((elem) =>{
  return <div>{ elem.name }</div>
})
this.state.fields.map((field) =>{
  const field_config = this.state['fields__' + this.state.selectedAvto + '__' + this.state.currentStep + '__' + field.id]
})
*/
