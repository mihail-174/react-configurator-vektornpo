import React, { Component } from 'react';
import '../css/B.css';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { context } = this.props;
    e.target.parentNode.parentNode.querySelectorAll('.b__item').forEach(function(item){
      item.classList.remove('active');
    })
    e.target.parentNode.classList.add('active');
    // context.methods.setAppState({
    //   [this.props.machine_name+'_selected']: this.props.selected,
    //   [this.props.machine_name+'_value']: this.props.value
    // });
    context.methods.setAppState({
      settings: {
        ...context.state.settings,
        [this.props.machine_name+'_title']: this.props.title,
        [this.props.machine_name+'_selected']: this.props.selected,
        [this.props.machine_name+'_value']: this.props.value
      }
    });
  }
  componentDidMount() {
    const { context } = this.props;
    // context.methods.setAppState({
    //   [this.props.machine_name+'_name']: this.props.name
    // });
    context.methods.setAppState({
      settings: {
        ...context.state.settings,
        [this.props.machine_name+'_title']: this.props.title
      }
    });

    // const aaa=[];
    // const for_avto2 = this.props.for_avto2.map((field, i) =>
    //   aaa.push(field.name)
    // );
    // console.log( aaa )
    // let yes = 0;
    // aaa.forEach(function(item, i){
    //   if ( context.state.selectedAvto === item ) {
    //     yes = 1;
    //     console.log( context.state.selectedAvto + ' : ' + item + ' = ' + yes )
    //   } else {
    //     yes = 0;
    //     console.log( context.state.selectedAvto + ' : ' + item + ' = ' + yes )
    //   }
    // })
  }
  // shouldComponentUpdate (previousProps, previousState) {
  //   const { context } = this.props.context;
  //   const aaa=[];
  //   const for_avto2 = this.props.for_avto2.map((field, i) =>
  //     aaa.push(field.name)
  //   );
  //   console.log( aaa )
  //   let yes = 0;
  //   aaa.forEach(function(item, i){
  //     if ( context.state.selectedAvto === item ) {
  //       yes = 1;
  //       this.setState({
  //         status: true
  //       });
  //       console.log( context.state.selectedAvto + ' : ' + item + ' = ' + yes )
  //     } else {
  //       yes = 0;
  //       // this.setState({
  //       //   status: false
  //       // });
  //       console.log( context.state.selectedAvto + ' : ' + item + ' = ' + yes )
  //     }
  //   })
  // }
  render() {
    const { context } = this.props;

    return (
      <div>
        <div key={this.props.value} className='b__item'>
          <input id={this.props.machine_name + "-" + this.props.value} onChange={this.handleChange} className="b__input"  type='radio' name='radio' value={this.props.value} />
          <label className="b__label" htmlFor={this.props.machine_name + "-" + this.props.value}>
            <div className="b__name">{this.props.name}</div>
          </label>
        </div>
      </div>
    )

    // return (
    //   <div>
    //     {this.props.type}
    //     <div key={this.props.value} className={context.state.vacuum_pump_value === this.props.value ? 'b__item active':'b__item'}>
    //       <input id={this.props.machine_name + "-" + this.props.value} onChange={this.handleChange} className="b__input"  type='radio' name='radio' value={this.props.value} checked={context.state.vacuum_pump_value === this.props.value ? true: false} />
    //       <label className="b__label" htmlFor={this.props.machine_name + "-" + this.props.value}>
    //         <div className="b__name">{this.props.name}</div>
    //         <div className="b__subname">{this.props.subname}</div>
    //       </label>
    //     </div>
    //   </div>
    // )

    // return (
    //   <div>
    //     {context.state.selectedAvto === 'АКН' && this.props.for_avto === 'АКН' &&
    //       <div key={this.props.value} className={context.state.vacuum_pump_value === this.props.value ? 'b__item active':'b__item'}>
    //         <input id={this.props.machine_name + "-" + this.props.value} onChange={this.handleChange} className="b__input"  type='radio' name='radio' value={this.props.value} checked={context.state.vacuum_pump_value === this.props.value ? true: false} />
    //         <label className="b__label" htmlFor={this.props.machine_name + "-" + this.props.value}>
    //           <div className="b__name">{this.props.name}</div>
    //           <div className="b__subname">{this.props.subname}</div>
    //         </label>
    //       </div>
    //     }
    //     {context.state.selectedAvto === 'МВ' && this.props.for_avto === 'МВ' &&
    //       <div key={this.props.value} className={context.state.vacuum_pump_value === this.props.value ? 'b__item active':'b__item'}>
    //         <input id={this.props.machine_name + "-" + this.props.value} onChange={this.handleChange} className="b__input"  type='radio' name='radio' value={this.props.value} checked={context.state.vacuum_pump_value === this.props.value ? true: false} />
    //         <label className="b__label" htmlFor={this.props.machine_name + "-" + this.props.value}>
    //           <div className="b__name">{this.props.name}</div>
    //           <div className="b__subname">{this.props.subname}</div>
    //         </label>
    //       </div>
    //     }
    //   </div>
    // )

  }
}
