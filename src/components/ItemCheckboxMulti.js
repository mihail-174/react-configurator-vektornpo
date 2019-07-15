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

        if ( e.target.checked ) {
            document.querySelector(e.target.parentNode.classList.add('active'));
            var total = arr.push( e.target.parentNode.querySelector('.item__name').innerText );
        } else {
            document.querySelector(e.target.parentNode.classList.remove('active'));
            const listItems = arr.map((number, index) => {
                if ( number === e.target.parentNode.querySelector('.item__name').innerText ) {
                    arr.splice(index, 1);
                }
            });
        }

        context.methods.setAppState({
            selectedValue: {
                ...state.selectedValue,
                ['item_' + itemGroupId + '_name']: arr,
                ['item_' + itemGroupId + '_' + e.target.parentNode.getAttribute('data-index') + '_value']: e.target.checked
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
                          state.selectedValue['item_'+ itemGroupId + '_' + key + '_value']
                          ?
                          'item__item active'
                          :
                          'item__item'
                      } data-index={key}>
                        <input checked={state.selectedValue['item_'+ itemGroupId + '_' + key + '_value'] ? true : false } className="item__input" id={itemGroupName + "-" + key} type='checkbox' name={itemGroupName} onChange={this.handleInputChange.bind(this)} />
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

  // componentDidMount() {
  //     const { context } = this.props;
  //     const state = context.state;
  //     const itemGroupId = this.props.itemGroupId;
  //     if ( state['item_' + itemGroupId + '_value'] === null ) {
  //         context.methods.setAppState({
  //             ['item_' + itemGroupId + '_value']: state.car['step_' + state.currentStep + '_field_' + itemGroupId][0].checked
  //         });
  //     }
  // }

}