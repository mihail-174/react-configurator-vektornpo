import React, { Component } from 'react';
import '../css/ispolnenie.css';

const arr = {
  'fields': [
    {
      "name": "Огнеопасное",
      "subname": "доработки установки и шасси под перевозку ЛВЖ"
    }
  ]
};

export default class Ispolnenie extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   isChecked: '',
    //   selected: ''
    // }
    // this.handleChange = this.handleChange.bind(this);
    this.changeCheckbox = this.changeCheckbox.bind(this);
  }

  // handleChange(event) {
  //   let selected = event.target.parentNode.querySelector('.block__name').innerText;
  //   let value = event.target.getAttribute('value');
  //   const { context } = this.props.context;
  //   context.methods.setAppState({
  //     ispolnenie: {
  //       ...context.state.ispolnenie,
  //       selected: selected,
  //       value: value,
  //     }
  //   });
  // }

  changeCheckbox(event) {
    const { context } = this.props.context;
    context.methods.setAppState({
      ispolnenie: {
        ...context.state.ispolnenie,
        selected: context.state.ispolnenie.checked ? '':`${arr.fields[0].name}`,
        checked: !context.state.ispolnenie.checked
      }
    });

    // let elems = event.target.parentNode.parentNode.parentNode.querySelectorAll('.block__input');

    // let selected = event.target.parentNode.querySelector('.block__name').innerText;
    // console.log( this.state.isChecked );
    // console.log( event.target );
    // console.log( context.state.ispolnenie.checked );
    // this.setState( {isChecked: context.state.ispolnenie.checked} )
    // if ( context.state.ispolnenie.checked ) {
      // this.setState( {isChecked: false} )
      // this.setState( {selected: ''} )
      // context.methods.setAppState({
      //   ispolnenie: {
      //     ...context.state.ispolnenie,
      //     selected: `${arr.fields[0].name}`,
      //     checked: !context.state.ispolnenie.checked
      //   }
      // });
    // } else {
      // this.setState( {isChecked: true} )
      // this.setState( {selected: `${arr.fields[0].name}` } )
      // console.log( this.state.isChecked );
      // context.methods.setAppState({
      //   ispolnenie: {
      //     ...context.state.ispolnenie,
      //     selected: '',
      //     checked: !context.state.ispolnenie.checked
      //   }
      // });
    // }

    // console.log( this.state.isChecked );
    // console.log( context.state.ispolnenie.checked );


    // if ( event.target.checked ) {
    //   for (let i=0; i < elems.length; i++) {
    //     elems[i].disabled = false;
    //     elems[i].setAttribute("checked", "checked");
    //     context.methods.setAppState({
    //       ispolnenie: {
    //         ...context.state.ispolnenie,
    //         checked: event.target.checked,
    //       }
    //     });
    //   }
    // } else {
    //   for (let i=0; i < elems.length; i++) {
    //     elems[i].disabled = true;
    //     context.methods.setAppState({
    //       ispolnenie: {
    //         ...context.state.ispolnenie,
    //         selected: '',
    //         value: '',
    //         checked: event.target.checked
    //       }
    //     });
    //   }
    // }
  }

  render() {
    const { context } = this.props.context;

    // context.methods.setAppState({
    //   ispolnenie: {
    //     ...context.state.ispolnenie,
    //     selected: context.state.ispolnenie.checked ? '':`${arr.fields[0].name}`
    //   }
    // });

    let value = parseInt(context.state.ispolnenie.value, 0);
    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id="ispolnenieCheck" onChange={this.changeCheckbox} defaultChecked={context.state.ispolnenie.checked} type='checkbox' />
        <label htmlFor="ispolnenieCheck">
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );
    return (
      <div className={context.state.ispolnenie.checked ? 'block block_col ispolnenie': 'block block_col block_disabled ispolnenie'}>
        <div className="block__title">
          {context.state.ispolnenie.name}
        </div>
        <div className="block__list">
          {list}
        </div>
      </div>
    );

  }
}

  // <div className="toggle">
  //   <input id="ispolnenieToggle" checked={context.state.ispolnenie.checked} className="checkbox" onChange={this.changeCheckbox} type="checkbox" name="checkbox" />
  //   <label htmlFor="ispolnenieToggle">
  //     <div><span></span></div>
  //   </label>
  // </div>
