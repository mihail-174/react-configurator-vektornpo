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

}
