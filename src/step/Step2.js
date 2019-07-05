import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import ItemRadio from '../components/ItemRadio';
import ItemCheckBox from '../components/ItemCheckBox';
import Toggle from '../components/Toggle';

import '../scss/item.scss';

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

export default class Step2 extends Component {

    constructor() {
        super();
        this.state = {
            aaa: []
        };
    }

    render() {
        const { context } = this.props;
        const state = context.state;

        const itemRadio = state.car.step_2.map( (field, key) =>
            field.type === 'radio'
            &&
            <div key={key} className={'item ' + field.systemName}>
                {
                    keyExists('switch', state.car['step_2_field_' + field.id])
                    &&
                    <Toggle context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
                }
                <div className='item__hd'>
                    <div className='item__title'>#{field.id}, {field.name}</div>
                </div>
                <div className='item__cont'>
                    <ItemRadio context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
                </div>
            </div>
        )

        const itemCheckbox = state.car.step_2.map( (field, key) =>
            field.type === 'checkbox'
            &&
            <div key={key} className={'item ' + field.systemName}>
                <div className='item__hd'>
                    <div className='item__title'>#{field.id}, {field.name}</div>
                </div>
                <div className='item__cont'>
                    <ItemCheckBox context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
                </div>
            </div>
        )

        return (
            <div className='step step_one'>
                <Header context={context} />
                <div className='content'>

                    <div className='content__inner'>
                        { itemRadio }
                        { itemCheckbox }
                    </div>

            </div>
            <Footer context={context} />
            </div>
        );

        // state.car.step_2.map( (field, key) =>
        //     <div key={key} className={'item ' + field.systemName}>
        //         <div className='item__hd'>
        //             <div className='item__title'>#{field.id}, {field.name}</div>
        //         </div>
        //         <div className='item__cont'>
        //             <ItemRadio context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
        //         </div>
        //     </div>
        // )




    // render() {
    //   const { context } = this.props,
    //     state = context.state,
    //     currentAvto = state.currentAvto,
    //     currentStep = state.currentStep,
    //     fields__x__x = state['fields__' + currentAvto + '__' + currentStep];
    //
    //   const list = fields__x__x.map((field, key) =>
    //     <div key={key} className={'b ' + field.systemName}>
    //       <div className='b__hd'>
    //         <div className='b__title'>{field.id} — {field.name}</div>
    //         {keyExists('switch_check', context.state["fields__" + currentAvto + "__" + currentStep + "__" + parseInt(key+6,0) + "__options"]) && <Toggle context={context} systemName={field.systemName} idBlock={field.id} />}
    //       </div>
    //       <div className={
    //         keyExists('switch_check', context.state["fields__" + currentAvto + "__" + currentStep + "__" + field.id + "__options"])
    //         ?
    //           context.state["fields__" + currentAvto + "__" + currentStep + "__" + field.id + "__options"].switch_check
    //           ?
    //           'b__cont'
    //           :
    //           'b__cont disabled'
    //         :
    //         'b__cont'
    //       }>
    //         {
    //           field.type === 'radio'
    //           &&
    //           <ItemRadio context={context} systemName={field.systemName} idBlock={field.id} />
    //         }
    //         {
    //           field.type === 'checkbox'
    //           &&
    //           <ItemCheckBox context={context} systemName={field.systemName} idBlock={field.id} />
    //         }
    //
    //
    //       </div>
    //     </div>
    //   );
    //
    //   return (
    //     <div className='step step_two'>
    //       <Header context={context} />
    //       <div className='content'>
    //         {list}
    //       </div>
    //       <Footer context={context} />
    //     </div>
    //   );

    }

    // shouldComponentUpdate(nextProps, nextState) {
        // const { context } = this.props;
        // const state = context.state;
        // const itemGroupId = this.props.itemGroupId;
        // console.log( nextProps, nextState );
        // // return this.state.isOpen !== nextState.isOpen
        //
        //
        // if ( nextState.aaa != this.state.aaa) {
        //     this.setState(
        //         {
        //             aaa: 'AAAAAAAAAAA'
        //         }
        //     );
        //     return true;
        // }
        //
        // return false;



        // this.setState(
        //     {
        //         aaa: 'AAAAAAAAAAA'
        //     }
        // );
        // return nextState
    // }

    componentDidMount() {
          const { context } = this.props;
          const state = context.state;
          // const itemGroupId = this.props.itemGroupId;
          // const itemGroupName = this.props.itemGroupName;
          // const field = state.car['step_' + state.currentStep + '_field_' + state.currentStep].values;

          var arr = [];
          var arr2 = '';
          var arr3 = [ 1, 2 , 3 ];
          var arr4 = '';


          state.car.step_2.map( (field, key) => {
              if ( field.type === 'checkbox' ) {
                  var id = field.id;
                  // console.log( field.type );
                  // console.log( 'item_' + id + '_value' );
                  // console.log( state.car['step_' + state.currentStep + '_field_' + id].values[0].checked );

                  arr.push( 'item_' + id + '_value: ' + state.car['step_' + state.currentStep + '_field_' + id].values[0].checked );
                  // arr2 = arr2.join(',');
                  // this.state.aaa.push( 'item_' + id + '_value: ' + state.car['step_' + state.currentStep + '_field_' + id].values[0].checked );

                  arr4 = arr.join();

                  // setTimeout(function () {
                  //     context.methods.setAppState({
                  //         selectedValue: {
                  //             ...state.selectedValue,
                  //             ['item_' + id + '_value']: state.car['step_' + state.currentStep + '_field_' + id].values[0].checked
                  //         }
                  //     });
                  // }, 2000);


              }
          })

          // console.log( arr.join() );

          // const mystate = this.state.aaa[1];
          const mystate = arr.join();
          //
          // context.methods.setAppState({
          //     selectedValue: {
          //         ...state.selectedValue,
          //         [arr.join()]
          //         // ['item_' + id + '_value']: state.car['step_' + state.currentStep + '_field_' + id].values[0].checked
          //     }
          // });

          // console.log( field[0].name );
          // console.log( field[0].checked );

    }



}
