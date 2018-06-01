import React, { Component } from 'react';

export default class List3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "off",
      condition: false
    };

    this.press = this.press.bind(this);
  }
  press(e){
    // console.log( e.target.className );
    // console.log( e.target.innerText );
    // console.log( e.target.classList );
    // console.log( e.target.classList.contains("off") );
    // console.log( e.currentTarget.classList.contains("off") );
    // console.log( this.state.class );
    // console.log( 'key ' + this.props.key );
    // console.log( e.target.parentNode.classList.contains("off") );

    let className = (e.currentTarget.classList.contains("off"))?"on":"off";
    // let className = (this.state.class==="off")?"on":"off";

    console.log( this.props.num );

    // this.forceUpdate();
    this.setState({class: className});
  }
    //
    // handleClick(id) {
    //   console.log( id );
    //   console.log('this is:', this);
    //   this.setState(prevState => ({
    //     isToggleOn: !prevState.isToggleOn
    //   }));
    // }

  render() {

    const arr = [
      {"name": "Шкиво-ременной"},
      {"name": "Карданный"}
    ];

    // <div key={index} className="item">
    // <div key={index} className="item" onClick={(e) => this.handleClick({index}, e)}>
    // <div key={index} num={index} className="item" onClick={this.press} className={this.state.class}>{field.name}</div>
    const list = arr.map((field, index) =>
      <div key={index} num={index} onClick={this.press} className={this.state.class}>{field.name}</div>
    );


    return (
      <div className="privodnasosa">
        <div className="label"><strong>Привод насоса</strong></div>
        <div className="list">{list}</div>
      </div>
    );

  }
}
