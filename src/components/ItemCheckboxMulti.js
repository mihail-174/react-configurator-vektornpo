import React, { Component } from 'react';


var arr = [];

export default class ItemCheckboxMulti extends Component {

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        const itemGroupName = this.props.itemGroupName;

        // console.log( e.target );
        // console.log( e.target.parentNode.querySelector('.item__name').innerText );
        // console.log( e.target.parentNode.getAttribute('data-index') );
        // console.log( e.target.parentNode.children[0].checked );

        if ( e.target.checked ) {
            document.querySelector(e.target.parentNode.classList.add('active'));
            var total = arr.push( e.target.parentNode.querySelector('.item__name').innerText );
        } else {
            document.querySelector(e.target.parentNode.classList.remove('active'));
            const listItems = arr.map((number, index) => {
                if ( number == e.target.parentNode.querySelector('.item__name').innerText ) {
                    arr.splice(index, 1);
                }
            });
        }

        context.methods.setAppState({
            selectedValue: {
                ...state.selectedValue,
                ['itemName_' + itemGroupId]: arr,
                ['itemValue_' + itemGroupId + '_' + e.target.parentNode.getAttribute('data-index')]: e.target.checked
            }
        });

    }

  render() {
      const { context } = this.props;
      const state = context.state;
      const itemGroupId = this.props.itemGroupId;
      const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values;
      const itemGroupName = this.props.itemGroupName;

      return (
          <div className='item__list'>
              {
                  field.map( (field, key) =>
                      <div key={key} className={
                          state.selectedValue['itemValue_'+ itemGroupId + '_' + key]
                          ?
                          'item__item active'
                          :
                          'item__item'
                      } data-index={key}>
                        <input checked={state.selectedValue['itemValue_'+ itemGroupId + '_' + key] ? true : false } className="item__input" id={itemGroupName + "-" + key} type='checkbox' name={itemGroupName} onChange={this.handleInputChange.bind(this)} />
                        <label className="item__label" htmlFor={itemGroupName + "-" + key}>
                            {field.ico && <div className='item__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
                            <div className='item__text'>
                                <div className='item__name'>{field.name}</div>
                                {field.subName && <div className='item__subname'>{field.subName}</div> }
                            </div>
                        </label>
                      </div>
                  )
              }
          </div>
      )

  }

  componentDidMount() {
      const { context } = this.props;
      const state = context.state;
      const itemGroupId = this.props.itemGroupId;
      const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId];
      const itemGroupName = this.props.itemGroupName;


      // const listItems = arr.map((number, index) => {
      // });

      if ( state['itemValue_' + itemGroupId] === null ) {
          context.methods.setAppState({
              // ['itemValue_' + itemGroupId + '_' + e.target.parentNode.getAttribute('data-index')]: e.target.checked,
              ['itemValue_' + itemGroupId]: state.car['step_' + state.currentStep + '_field_' + itemGroupId][0].checked
          });
      }
  }




  // componentDidMount() {
  //     const { context } = this.props;
  //     const state = context.state;
  //     const itemGroupId = this.props.itemGroupId;
  //     const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId];
  //     const itemGroupName = this.props.itemGroupName;
  //
  //     if ( state['itemValue_' + itemGroupId] === null ) {
  //         context.methods.setAppState({
  //             ['itemValue_' + itemGroupId]: state.car['step_' + state.currentStep + '_field_' + itemGroupId][0].checked
  //         });
  //     }
  //
  // }

}
