import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import ItemRadio from '../components/ItemRadio';
import ItemCheckBox from '../components/ItemCheckBox';
import ItemSelect from '../components/ItemSelect';
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

    let nameCar = '';
    context.state.listCar.forEach((elem, key) => {
        if ( elem.id === state.currentAvto ) {
            nameCar = 'content_' + elem.systemName;
        }
    });

    const itemRadio = state.car.step_1.map( (field, key) =>
        keyExists('radio', state.car['step_1_field_' + field.id].values)
        &&
        <div key={key} className={'item ' + field.systemName}>
            <div className='item__hd'>
                <div className='item__title'>{field.name}</div>
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

    const itemCheckbox = state.car.step_1.map( (field, key) =>
        keyExists('checkbox', state.car['step_1_field_' + field.id].values)
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
    const itemSelect = state.car.step_1.map( (field, key) =>
        keyExists('select', state.car['step_1_field_' + field.id].values)
        &&
        <div key={key} className={'item ' + field.systemName}>
            <div className='item__hd'>
                <div className='item__title'>{field.name}</div>
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
                <ItemSelect context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
            </div>
        </div>
    )

    return (
        <div className='step step_one'>
            <Header context={context} />
            <div className={'content ' + nameCar}>

                <div className='content__inner'>
                    { itemRadio }
                    { itemCheckbox }
                    { itemSelect }
                </div>

            </div>
            <Footer context={context} />
        </div>
    );

  }

}
