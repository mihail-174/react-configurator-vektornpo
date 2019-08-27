import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Item from '../components/Item';
import ItemRadio from '../components/ItemRadio';
import ItemCheckBox from '../components/ItemCheckBox';
import ItemSelect from '../components/ItemSelect';
import ItemCounter from '../components/ItemCounter';
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
                    // keyExists('switch', state.car['step_1_field_' + field.id])
                    // &&
                    // <Toggle context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
                }
            </div>
            <div className='item__cont'>
                <ItemSelect context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
            </div>
        </div>
    )
    const itemCounter = state.car.step_1.map( (field, key) =>
        keyExists('counter', state.car['step_1_field_' + field.id].values)
        &&
        <div key={key} className={'item ' + field.systemName}>
            <div className='item__hd'>
                <div className='item__title'>{field.name}</div>
            </div>
            <div className='item__cont'>
                <ItemCounter context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
            </div>
        </div>
    )
    const item = state.car.step_1.map( (field, key) =>
        <Item
            key={key}
            context={context}
            itemGroupId={field.id}
            itemGroupName={field.name}
            itemGroupSystemName={field.systemName}
        />
    )

    return (
        <div className='step step_one'>
            <Header context={context} />
            <div className={'content ' + nameCar}>

                <div className='content__inner'>
                    { item }
                </div>

            </div>
            <Footer context={context} />
        </div>
    );

  }

  componentDidMount () {
      const { context } = this.props;
      const state = context.state;
      console.group( 'step_1' );
      const aaa = state.selectedValue.step_1.map( (field, key) => {
          console.group( 'group_' + key );
          if ( field['group_' + key].radios ) {
              console.log( field['group_' + key].radios.name );
          }
          if ( field['group_' + key].counter !== undefined ) {
              console.log( field['group_' + key].counter );
          }
          if ( field['group_' + key].selects ) {
              field['group_' + key].selects.map( (fieldSelect, key) => {
                  console.log( fieldSelect.name );
              });
          }
          console.groupEnd();
      });
      console.groupEnd();
  }


}
