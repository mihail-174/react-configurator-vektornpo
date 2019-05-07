import React, { Component } from 'react';
import '../scss/shoose-avto.scss';

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
      currentStep: 1,
      currentAvto: parseInt(id, 0)
    })
 }
  render() {
    const {context} = this.props;
    const list = context.state.listCar.map((elem, key) =>
      <div key={key.toString()} className='st1__item' data-id={elem.id} data-system-name={elem.systemName} onClick={this.shoose}>
        <div className='st1__image'>
          <img className='st1__img' src={require('../img/avto-img/' + elem.image)} alt=''/>
        </div>
        <div className='st1__name'>{elem.name}</div>
      </div>
    );
    return (
      <div className='st1'>
        <div className='st1__list'>{list}</div>
      </div>
    );
  }
}
