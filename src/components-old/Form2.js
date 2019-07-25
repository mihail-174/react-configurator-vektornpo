import React, { Component } from 'react';

let arrSelected=[];

export default class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: {'A': false, 'B': false, 'C': false},
      // selected: ''
      selected: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    // Copy the object so we don't mutate the old state.
    // (This requires an Object.assign polyfill):
    const checked = Object.assign({}, this.state.checked)
    if (!checked[value]) {
      checked[value] = true;
      // this.state.selected.push(value);
      // selected2.push( event.target} );
      arrSelected.push( event.target.parentNode.innerText );
    } else {
      checked[value] = false;
      // this.state.selected.splice(this.state.selected.indexOf(value), 1);
      // selected2.splice(selected2.indexOf(value), 1);
      arrSelected.splice(arrSelected.indexOf( event.target.parentNode.innerText ), 1);
    };

    this.setState({checked});
    // this.setState({
    //   // selected: [...this.state.selected]
    //   // selected: [...this.state.selected, selected2]
    //   // selected: selected2
    //   // selected: event.target.parentNode.innerText
    //   selected: update(arrSelected)
    // });

    this.setState({
      selected: [...this.state.selected, arrSelected],
    });
    console.log(this.state.selected);


    // console.log( selected2.indexOf(value) );
    // console.log( selected2 );
    // console.log( 'selected2 ' + selected2 );
    // console.log( 'selected ' + this.state.selected );
// console.log( arrSelected );
// console.log( event.target.parentNode.innerText );
    // this.setState({ selected: selected2 });
    // this.setState({selected: event.target.parentNode.querySelector('label').innerText});
  }

  handleSubmit(event) {
    console.log('Boxes checked: ' +
      (this.state.checked.A ? 'A' : '') +
      (this.state.checked.B ? 'B' : '') +
      (this.state.checked.C ? 'C' : '')
    );
  }

  render() {

    const arr = [
      {"name": "KO-505A", "value": "A"},
      {"name": "BP-8/3", "value": "B"},
      {"name": "BK-6M2", "value": "C"}
    ];

    const list = arr.map((field, key) =>
      <div key={key}>
        <label>
          <input
            type="checkbox"
            value={field.value}
            onChange={this.handleChange} />
          Option {field.value}
        </label>
      </div>
    );

    return (
      <div>
        {list}
        {this.state.selected}
        <br />
        <br />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
