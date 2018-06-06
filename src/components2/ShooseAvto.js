import React, { Component } from 'react';
import '../css/shoose-avto.css';

export default class ShooseAvto extends Component {
  constructor(props) {
    super(props);
    this.shoose = this.shoose.bind(this);
  }
  shoose(e) {
    const {context} = this.props;
    e.currentTarget.parentNode.querySelectorAll('.item').forEach(function(elem) {
      elem.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    const id = e.currentTarget.getAttribute('data-id');
    context.methods.setAppState({
      currentAvto: parseInt(id, 0)
    })
  }
  // componentDidMount() {}
  render() {
    const {context} = this.props;
    const list = context.state.machine_names.map((elem) =>
      <div className='item' data-id={elem.id} onClick={this.shoose}>
        <div className='image'><img src={elem.image} alt=''/></div>
        <div className='name'>{elem.name}</div>
      </div>
    );
    return (
      <div className='shoose-avto'>
        <h3>Выберите тип:</h3>
        <div className='list'>{list}</div>
      </div>
    );
  }
}
