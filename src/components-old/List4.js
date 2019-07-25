import React, { Component } from 'react';

export default class List4 extends Component {

  constructor(props) {
    super(props);
    this.state = {checked: false, selected:''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({checked: event.target.checked});
    this.setState({selected: event.target.parentNode.querySelector('label').innerText});
  }

  render() {

    const arr = [
      {"name": "KO-505A", "descr": "коммунальный тип 310 куб./час"},
      {"name": "BP-8/3", "descr": "взрывозащищенный компрессор 480 куб./час"},
      {"name": "BK-6М2", "descr": "взрывозащищенный компрессор 240 куб./час"},
      {"name": "PNR.122", "descr": "взрывозащищенный компрессор 730 куб./час"}
    ];

    const list = arr.map((field, key) =>
      <div key={key} className="item">
        <input id={"check-" + key} onChange={this.handleChange} type='radio' name='field' value={key} />
        <label className="name" htmlFor={"check-" + key}>{field.name}</label>
      </div>
    );
    return (
      <div className="vac-nasos">
        <div className="label"><strong>Вакуумный насос: {this.state.selected}</strong></div>
        <div className="list">{list}</div>
      </div>
    );

  }
}
