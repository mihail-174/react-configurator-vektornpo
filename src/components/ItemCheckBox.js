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
        this.state = {
            'aaa': 'гыы',
            value: []
        };
        // this.change = this.change.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        const itemGroupName = this.props.itemGroupName;
        // console.log( e.currentTarget );
        console.log( e.currentTarget.checked );
        // console.log( e.currentTarget.parentNode );
        // console.log( e.currentTarget.parentNode.children[0] );
        // console.log( e.currentTarget.parentNode.children[0].checked );
        // console.clear();
        // console.log( e.target.parentNode.children[0].checked );
        // console.log( state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked );
        // console.log( state['item_' + itemGroupId + '_value'] );
        // this.setState(
        //     {
        //         aaa: 'епта',
        //         bbb: '-'
        //     }
        // );
        // context.methods.setAppState({
            // "car": {
            //     "step_2_field_8": {
                    // "AAAAAAAAAAA":"0000000000000000000"
                    // "values": [
                    //     {
                    //         ...state.car.step_2_field_8.values,
                    //         "checked": state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked
                    //     }
                    // ]
            //     }
            // }
        // });
        //
        context.methods.setAppState({
            selectedValue: {
                ...state.selectedValue,
                ['item_' + itemGroupId + '_value']: e.currentTarget.checked
                // ['item_' + itemGroupId + '_value']: e.target.parentNode.children[0].checked
            }
        });

        if ( e.target.parentNode.children[0].checked ) {
            document.querySelector('.' + itemGroupName + ' .item__item').classList.add('active');
        } else {
            document.querySelector('.' + itemGroupName + ' .item__item').classList.remove('active');
        }

        // document.querySelectorAll('.' + itemGroupName + ' .item__item')[val].classList.add('active');

        // const { context } = this.props,
        // state = context.state,
        // currentAvto = state.currentAvto,
        // currentStep = state.currentStep,
        // idBlock = this.props.idBlock,
        // selectedVal = 'val__' + idBlock,
        // fields__x__x__x = 'fields__' + currentAvto + '__' + currentStep + '__' + idBlock;
        //
        // // console.log( event.target.parentNode.querySelector('input').checked );
        // // console.log( e.currentTarget.parentNode.children[0].checked );
        // context.methods.setAppState({
        //     [fields__x__x__x]: [
        //         {
        //             ...state[fields__x__x__x][0],
        //             'val': !e.currentTarget.parentNode.children[0].checked
        //         }
        //     ]
        //     // [selectedVal]: e.currentTarget.parentNode.children[0].checked,
        // });
    }

    // change(val) {
        // const { context } = this.props,
        //       state = context.state,
        //       currentAvto = state.currentAvto,
        //       currentStep = state.currentStep,
        //       idBlock = this.props.idBlock,
        //       systemName = this.props.systemName,
        //       selectedVal = 'val__' + idBlock,
        //       fields__x__x__x__options = state["fields__" + currentAvto + "__" + currentStep + "__" + idBlock + "__options"];

        // if ( (keyExists('switch_check', fields__x__x__x__options)===true && fields__x__x__x__options.switch_check) || keyExists('switch_check', fields__x__x__x__options)===false ) {
        // document.querySelectorAll('.' + systemName + ' .b__item').forEach(function(item, i) {
        //   item.classList.remove('active')
        // });
        // document.querySelector('.' + systemName + ' .b__item_' + val).classList.add('active');
        // }

        // console.log( document.querySelector('.' + systemName + ' input').change );
        //
        // context.methods.setAppState({
        //   [selectedVal]: !selectedVal
        // });

        // if ( (keyExists('switch_check', fields__x__x__x__options)===true && fields__x__x__x__options.switch_check) || keyExists('switch_check', fields__x__x__x__options)===false ) {
        //   document.querySelectorAll('.' + systemName + ' .b__item').forEach(function(item, i) {
        //     item.classList.remove('active')
        //   });
        //   document.querySelector('.' + systemName + ' .b__item_' + val).classList.add('active');
        // }
    // }

  render() {
      const { context } = this.props;
      const state = context.state;
      const itemGroupId = this.props.itemGroupId;
      const itemGroupName = this.props.itemGroupName;
      // console.log( itemGroupId );
      const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values;
      // const step_x_field_x = state['step_' + state.currentAvto + '_field_' + itemGroupId][0].checked;
      // const step_x_field_x = state.step_2_field_8[0].checked;
      // console.log( step_x_field_x );

      return (
          <div className='item__list'>
              {
                  field.map( (field, key) =>
                      <div key={key} className={
                          // state.selectedValue['item_' + itemGroupId + '_value']
                          state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked
                          ?
                          'item__item active'
                          :
                          'item__item'
                      }>

                      {
                          state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked && !keyExists('item_' + itemGroupId + '_value', state.selectedValue)
                          ?
                              'd-true'
                          :
                              keyExists('item_' + itemGroupId + '_value', state.selectedValue)
                              ?
                                  'k-true'
                              :
                                  'k-false'
                                  // state.selectedValue['item_' + itemGroupId + '_value'].checked
                                  //     ?
                                  //         's-true'
                                  //     :
                                  //         's-false'
                          // keyExists('item_' + itemGroupId + '_value', state.selectedValue)
                          // ?
                          //     state.selectedValue['item_' + itemGroupId + '_value'].checked === true
                          //         ?
                          //             'key true'
                          //         :
                          //             'key false'
                          // :
                          // state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked
                          //     ?
                          //         'true'
                          //     :
                          //         'false'
                      }

                          <input defaultChecked={ state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked } className="item__input" id={itemGroupName + "-" + key} type='checkbox' name={itemGroupName} onChange={this.handleInputChange.bind(this)} />
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

      //  defaultChecked={ state['itemValue_'+ itemGroupId] }

      // checked={
      //       keyExists('item_' + itemGroupId + '_value', state.selectedValue)
      //       ?
      //           state.selectedValue['item_' + itemGroupId + '_value'].checked
      //               ?
      //                   true
      //               :
      //                   false
      //       :
      //       state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked
      //           ?
      //               true
      //           :
      //               false
      //   }




    // const {context} = this.props,
    //       state = context.state,
    //       currentAvto = state.currentAvto,
    //       currentStep = state.currentStep,
    //       idBlock = this.props.idBlock,
    //       systemName = this.props.systemName,
    //       selectedVal = state['val__' + idBlock],
    //       fields__x__x__x = state['fields__' + currentAvto + '__' + currentStep + '__' + idBlock],
    //       fields__x__x__x__options = state["fields__" + currentAvto + "__" + currentStep + "__" + idBlock + "__options"];
    // // console.log( fields__x__x__x__options );
    // // let newSwitchCheck;
    // // if ( fields__x__x__x__options ) {
    // //   newSwitchCheck = fields__x__x__x__options.switch_check;
    // // }
    //
    // const list = fields__x__x__x.map((field, key) => {
    //   return (
    //     <div key={key} className={
    //       fields__x__x__x[0].val
    //       ?
    //       'b__item b__item_' + key + ' active'
    //       :
    //       'b__item b__item_' + key
    //     }>
    //         <input id={systemName + "-" + key} defaultChecked={fields__x__x__x[0].val} type='checkbox' name={systemName} value={key} />
    //
    //         <label className="b__label" onClick={this.handleInputChange} htmlFor={systemName + "-" + key}>
    //
    //             {field.ico && <div className='b__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
    //             <div className='b__text'>
    //               <div className='b__name'>{field.name}</div>
    //               {field.subName && <div className='b__subname'>{field.subName}</div> }
    //             </div>
    //
    //         </label>
    //     </div>
    //     )
    //   }
    // );
    //
    // return (
    //   <div className='b__list'>
    //       {list}
    //   </div>
    // )

  }

  // componentWillUpdate() {
  //     const { context } = this.props;
  //     const state = context.state;
  //     const itemGroupId = this.props.itemGroupId;
  //     console.log( itemGroupId );
  // }

  shouldComponentUpdate(nextProps, nextState) {
      // const { context } = this.props;
      // const state = context.state;
      // const itemGroupId = this.props.itemGroupId;
      console.log( nextState );
  }

  componentDidMount() {
      // const { context } = this.props;
      // const state = context.state;
      // const itemGroupId = this.props.itemGroupId;
      // const itemGroupName = this.props.itemGroupName;
      // const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values;

      // console.log( field );
      // console.log( field[0].name );
      // console.log( field[0].checked );
      // field.map( (field, key) => {
      //     console.log(  );
      // }

      // for (var item in field) {
      //     // if (object.hasOwnProperty(item)) {
      //         console.log( item[0].checked );
      //     // }
      // }

      // console.log( state.selectedValue['item_' + itemGroupId + '_value'] );

      // var arr = [];
      // arr.push( field[0].name );
      // console.log( field[0] );

      // this.state.value.push( field[0].name )
      // console.log( this.state.value );

      // state.car.map((field, key) => {
      //     console.log( field['step_' + state.currentStep + '_field_' + itemGroupId] );
          // setTimeout(function () {
              // console.log( itemGroupId );
              // this.state.value.push( itemGroupId )
              // console.log( this.state.value );
              // context.methods.setAppState({
              //     selectedValue: {
              //         ...state.selectedValue,
              //         [itemGroupId]: this.state.value
              //     }
              // });
          // }, 2000);
      // });



          // console.log( field );
          // console.log( state.selectedValue );
          // this.setState({colors: tmp});
          // context.methods.setAppState({
              //     selectedValue: {
                  //         ...state.selectedValue,
                  //         ['item_' + itemGroupId + '_value']: this.state.value
                  //     }
                  // });


      // this.setState({
      //     value: this.state.value
      // })

      // if ( state.selectedValue['item_' + itemGroupId + '_value'] === null ) {
      // if ( state.selectedValue['item_' + itemGroupId + '_value'] === undefined ) {
          //   this.setState(
          //       {
          //           aaa: 'Did Mount епта',
          //           bbb: field[0].checked
          //           // bbb: [
          //           //     {
          //           //         'q1': field[0].checked
          //           //     }
          //           // ]
          //       }
          //   );
          // console.log( field[0].checked );
          //
          // context.methods.setAppState({
          //     selectedValue: {
          //         ...state.selectedValue,
          //         ['item_' + itemGroupId + '_value']: field[0].checked
          //         // ['item_' + itemGroupId + '_value']: state.car['step_' + state.currentStep + '_field_' + itemGroupId].values[0].checked
          //     }
          // });
      // }

  }

}


// defaultChecked={selectedVal===null && selectedVal===key?true:false}


  // <input id={systemName + "-" + key} defaultChecked={selectedVal} type='checkbox' name={systemName} value={key} />
  //
  // <label className="b__label" onClick={this.handleInputChange} htmlFor={systemName + "-" + key}>
  //
  //     {field.ico && <div className='b__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
  //     <div className='b__text'>
  //       <div className='b__name'>{field.name}</div>
  //       {field.subName && <div className='b__subname'>{field.subName}</div> }
  //     </div>
  //
  // </label>
