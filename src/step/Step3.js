import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import ComponentItemRadio from '../components/ItemRadio';
import ComponentItemCheckBox from '../components/ItemCheckBox';
import ComponentItemCheckBoxMulti from '../components/ItemCheckboxMulti';
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

export default class Step3 extends Component {

    render() {
        const { context } = this.props;
        const state = context.state;

        const itemRadio = state.car.step_3.map( (field, key) =>
            field.type === 'radio'
            &&
            <div key={key} className={'item ' + field.systemName}>
                <div className='item__hd'>
                    <div className='item__title'>#{field.id}, {field.name}</div>
                    {
                        keyExists('switch', state.car['step_3_field_' + field.id])
                        &&
                        <Toggle context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
                    }
                </div>
                <div
                    className={
                        keyExists('switch', state.car['step_3_field_' + field.id])
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
                    <ComponentItemRadio context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
                </div>
            </div>
        )

        const itemCheckbox = state.car.step_3.map( (field, key) =>
            field.type === 'checkbox'
            &&
            <div key={key} className={'item ' + field.systemName}>
                <div className='item__hd'>
                    <div className='item__title'>#{field.id}, {field.name}</div>
                </div>
                <div className='item__cont'>
                    <ComponentItemCheckBox context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
                </div>
            </div>
        )

        const ItemCheckboxMulti = state.car.step_3.map( (field, key) =>
            field.type === 'checkbox-multi'
            &&
            <div key={key} className={'item ' + field.systemName}>
                <div className='item__hd'>
                    <div className='item__title'>#{field.id}, {field.name}</div>
                </div>
                <div className='item__cont'>
                    <ComponentItemCheckBoxMulti context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
                </div>
            </div>
        )

        return (
            <div className='step step_3'>
                <Header context={context} />
                <div className='content'>

                    <div className='content__inner'>
                        { itemRadio }
                        { itemCheckbox }
                        { ItemCheckboxMulti }
                    </div>

            </div>
            <Footer context={context} />
            </div>
        );

    }

}
