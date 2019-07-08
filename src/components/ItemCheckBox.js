import React, { Component } from 'react';

function keyExists(key, search) {
    if (!search || (search.constructor !== Array && search.constructor !== Object)) {
        return false;
    }
    for (var i = 0; i < search.length; i++) {
        if (search[i] === key) {
            return true;
        }
    }
    return key in search;
}

export default class ItemCheckBox extends Component {

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        // console.log( 'handleInputChange' );
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        const itemGroupName = this.props.itemGroupName;
        const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values;
        const field2 = state.car['step_' + state.currentStep + '_field_' + itemGroupId];

        // if ( keyExists('item_' + itemGroupId + '_value', state.selectedValue) ) {
        //     console.group( 'state' );
        //     // console.log( 'state: true' );
        //     field.map( (item, key) => {
        //         console.log( 'в state: ' + item.name +  ' = есть' );
        //         console.log( 'в state: ' + item.name + ' = ' + e.currentTarget.checked );
        //         // console.log( 'в state: ' + item.name + ' = ' + state.selectedValue['item_' + itemGroupId + '_value'].checked );
        //     });
        //     console.groupEnd();
        // } else {
        //     console.group( 'state' );
        //     // console.log( 'state: false' );
        //     field.map( (item, key) => {
        //         console.log( 'в state: ' + item.name +  ' = нету' );
        //         console.log( 'defaul: ' + item.name + ' = ' + state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked );
        //     });
        //     console.groupEnd();
        // }

        context.methods.setAppState({
            selectedValue: {
                ...state.selectedValue,
                ['item_' + itemGroupId + '_value']: e.currentTarget.checked
            }
        });

        // console.log( state.selectedValue['item_' + itemGroupId + '_value'] );

        if ( e.target.parentNode.children[0].checked ) {
            document.querySelector('.' + itemGroupName + ' .item__item').classList.add('active');
        } else {
            document.querySelector('.' + itemGroupName + ' .item__item').classList.remove('active');
        }

    }

    // componentWillMount() {
    //     const itemGroupId = this.props.itemGroupId;
    //     const itemGroupName = this.props.itemGroupName;
    //     // console.log( 'componentWillMount: ' + itemGroupId + ' | ' + itemGroupName );
    //     const { context } = this.props;
    //     const state = context.state;
    //     const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values;
    //     if ( keyExists('item_' + itemGroupId + '_value', state.selectedValue) ) {
    //         // console.group( 'state' );
    //         // console.log( 'state: true' );
    //         field.map( (item, key) => {
    //             console.log( 'в state: ' + item.name +  ' = есть' );
    //             console.log( 'в state: ' + item.name + ' = ' + state.selectedValue['item_' + itemGroupId + '_value'].checked );
    //         });
    //         // console.groupEnd();
    //     } else {
    //         // console.group( 'state' );
    //         // console.log( 'state: false' );
    //         field.map( (item, key) => {
    //             console.log( 'в state: ' + item.name +  ' = нету' );
    //             console.log( 'defaul: ' + item.name + ' = ' + state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked );
    //         });
    //         // console.groupEnd();
    //         // context.methods.setAppState({
    //         //     selectedValue: {
    //         //         ...state.selectedValue,
    //         //         ['item_' + itemGroupId + '_value']: state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked
    //         //     }
    //         // });
    //     }
    // }

  render() {
      const itemGroupId = this.props.itemGroupId;
      const itemGroupName = this.props.itemGroupName;
      // console.log( 'render: ' + itemGroupId + ' | ' + itemGroupName );
      const { context } = this.props;
      const state = context.state;
      const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values;

      return (
          <div className='item__list'>
              {
                  field.map( (field, key) =>
                      <div key={key} className={
                          keyExists('item_' + itemGroupId + '_value', state.selectedValue)
                          ?
                              state.selectedValue['item_' + itemGroupId + '_value']
                              ?
                                  'item__item active'
                              :
                                  'item__item'
                          :
                              state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked
                              ?
                                  'item__item active'
                              :
                                  'item__item'
                      }>
                          <input defaultChecked={
                              keyExists('item_' + itemGroupId + '_value', state.selectedValue)
                              ?
                              state.selectedValue['item_' + itemGroupId + '_value']
                              :
                              state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked
                          } className="item__input" id={itemGroupName + "-" + key} type='checkbox' name={itemGroupName} onChange={this.handleInputChange.bind(this)} />

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

  // componentWillUpdate(nextProps, nextState) {
  //     if (this.state.selectedValue !== nextState.selectedValue) {
  //         nextProps.onChange(nextState.selectedValue);
  //         console.log( 'componentWillUpdate' );
  //     }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log( 'shouldComponentUpdate' );
  //     // const { context } = this.props;
  //     // const state = context.state;
  //     // const itemGroupId = this.props.itemGroupId;
  //     // console.log( nextState );
  //     // return this.state.isOpen !== nextState.isOpen
  // }

  // componentDidUpdate(prevProps, prevState, prevContext) {
  //     console.log( 'componentDidUpdate' );
  // }

  // componentDidMount() {
  //     const itemGroupId = this.props.itemGroupId;
  //     const itemGroupName = this.props.itemGroupName;
  //     // console.log( 'componentDidMount: ' + itemGroupId + ' | ' + itemGroupName );
  //     const { context } = this.props;
  //     const state = context.state;
  // }

}
