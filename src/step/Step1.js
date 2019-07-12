import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import ItemRadio from '../components/ItemRadio';
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

export default class Step1 extends Component {

  render() {
    const { context } = this.props;
    const state = context.state;

    return (
        <div className='step step_one'>
            <Header context={context} />
            <div className='content'>

                <div className='content__inner'>
                {
                    state.car.step_1.map( (field, key) =>
                        <div key={key} className={'item ' + field.systemName}>
                            <div className='item__hd'>
                                <div className='item__title'>#{field.id}, {field.name}</div>
                                {
                                    keyExists('switch', state.car['step_1_field_' + field.id])
                                    &&
                                    <Toggle context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
                                }
                            </div>
                            <div
                                className={
                                    keyExists('switch', state.car['step_1_field_' + field.id])
                                    ?
                                        keyExists('item_' + field.id + '_value_toggle', state.selectedValue)
                                        ?
                                            state.selectedValue['item_' + field.id + '_value_toggle']
                                            ?
                                                'item__cont'
                                            :
                                                'item__cont disabled'
                                        :
                                            state.car['step_' + state.currentStep + '_field_' + field.id].switch.checked
                                            ?
                                                'item__cont'
                                            :
                                                'item__cont disabled'
                                    :
                                        'item__cont'
                                }
                            >
                                <ItemRadio context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
                            </div>
                        </div>
                    )
                }
                </div>

            </div>
            <Footer context={context} />
        </div>
    );

  }

}
