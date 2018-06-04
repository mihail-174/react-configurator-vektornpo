import React, { Component } from 'react';
import '../css/vacNasos.css';

const arr = {
  name: 'Вакуумный насос',
  'fields': [
    {
      "name": "KO-505A",
      "subname": "коммунальный тип 310 куб./час"
    },
    {
      "name": "BP-8/3",
      "subname": "взрывозащищенный компрессор 480 куб./час"
    },
    {
      "name": "BK-6М2",
      "subname": "взрывозащищенный компрессор 240 куб./час"
    },
    {
      "name": "PNR.122",
      "subname": "взрывозащищенный компрессор 730 куб./час"
    }
  ]
};

export default class VacNasos extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    // let descr = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      vacNasos: {
        ...context.state.vacNasos,
        selected: selected,
        value: value
      }
    });
  }
  componentDidMount() {
    const { context } = this.props.context;
    context.methods.setAppState({
      vacNasos: {
        ...context.state.vacNasos,
        name: arr.name
      }
    });
  }
  render() {
    const { context } = this.props.context;
    let value = parseInt(context.state.vacNasos.value, 0);

    const list = arr.fields.map((field, key) =>
      <div key={key} className={value === key ? 'block__item active': 'block__item'}>
        <input className="block__input" id={"vacNasosCheck-" + key} onChange={this.handleChange} type='radio' name='vacNasosFields' value={key} checked={value === key ? true: false} />
          <label htmlFor={"vacNasosCheck-" + key}>
          <div className="block__name">{field.name}</div>
          <div className="block__subname">{field.subname}</div>
        </label>
      </div>
    );

    return (
      <div className="block block_row vacNasos">
        <div className="block__title">{context.state.vacNasos.name}</div>
        <div className="block__list">{list}</div>
      </div>
    );

  }
}
