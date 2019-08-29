import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Item from '../components/Item';
// import ComponentItemRadio from '../components/ItemRadio';
// import ComponentItemCheckBox from '../components/ItemCheckBox';
// import ComponentItemCheckBoxMulti from '../components/ItemCheckboxMulti';
// import Toggle from '../components/Toggle';

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

        let nameCar = '';
        context.state.listCar.forEach((elem, key) => {
            if ( elem.id === state.currentAvto ) {
                nameCar = 'content_' + elem.systemName;
            }
        });

        // const itemRadio = state.car.step_3.map( (field, key) =>
        //     field.type === 'radio'
        //     &&
        //     <div key={key} className={'item ' + field.systemName}>
        //         <div className='item__hd'>
        //             <div className='item__title'>{field.name}</div>
        //             {
        //                 keyExists('switch', state.car['step_3_field_' + field.id])
        //                 &&
        //                 <Toggle context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
        //             }
        //         </div>
        //         <div
        //             className={
        //                 keyExists('switch', state.car['step_3_field_' + field.id])
        //                 ?
        //                     keyExists('item_' + field.id + '_value_toggle', state.selectedValue)
        //                     ?
        //                         state.selectedValue['item_' + field.id + '_value_toggle']
        //                         ?
        //                             'item__cont'
        //                         :
        //                             'item__cont disabled'
        //                     :
        //                         state.car['step_' + state.currentStep + '_field_' + field.id].switch.checked
        //                         ?
        //                             'item__cont'
        //                         :
        //                             'item__cont disabled'
        //                 :
        //                     'item__cont'
        //             }
        //         >
        //             <ComponentItemRadio context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
        //         </div>
        //     </div>
        // )
        //
        // const itemCheckbox = state.car.step_3.map( (field, key) =>
        //     field.type === 'checkbox'
        //     &&
        //     <div key={key} className={'item ' + field.systemName}>
        //         <div className='item__hd'>
        //             <div className='item__title'>#{field.id}, {field.name}</div>
        //         </div>
        //         <div className='item__cont'>
        //             <ComponentItemCheckBox context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
        //         </div>
        //     </div>
        // )
        //
        // const ItemCheckboxMulti = state.car.step_3.map( (field, key) =>
        //     field.type === 'checkbox-multi'
        //     &&
        //     <div key={key} className={'item ' + field.systemName}>
        //         <div className='item__hd'>
        //             <div className='item__title'>#{field.id}, {field.name}</div>
        //         </div>
        //         <div className='item__cont'>
        //             <ComponentItemCheckBoxMulti context={context} itemGroupName={field.systemName} itemGroupId={field.id} />
        //         </div>
        //     </div>
        // )

        const item = state.car.step_3.map( (field, key) =>
            <Item
                key={key}
                context={context}
                itemGroupId={field.id}
                itemGroupName={field.name}
                itemGroupSystemName={field.systemName}
            />
        )

        return (
            <div className='step step_3'>
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

    //   componentDidMount () {
    //       const { context } = this.props;
    //       const state = context.state;
    //       const currentStep = state.currentStep;
    //       const selectedValue3 = state.selectedValue3;
    //       const step = 'step_' + currentStep;
    //       state.car['step_'+currentStep].map( (field, keyGroup) => {
    //           const group = 'group_' + keyGroup;
    //           // console.log( group );
    //       //     if ( selectedValue3[step + '__' + group + '__radios__name'] !== undefined ) {
    //       //         console.log( field.name + ': ' + selectedValue3[step + '__' + group + '__radios__name'] );
    //       //     }
    //       //     if ( selectedValue3[step + '__' + group + '__counter'] !== undefined ) {
    //       //         console.group(field.name);
    //       //         console.log( state.car['step_'+currentStep+'_field_1'].values.counter[0].label + ': ' + selectedValue3[step + '__' + group + '__counter'] );
    //       //         console.groupEnd();
    //       //     }
    //       //     if ( keyExists( 'select' , state.car[step+'_field_'+field.id].values ) ) {
    //       //         console.group(field.name);
    //       //         state.car[step+'_field_'+field.id].values.select.map( (fieldSelect, keySelect) => {
    //       //             console.log( fieldSelect.label + ': ' + selectedValue3[step + '__' + group + '__select_' + keySelect + '__name'] );
    //       //         });
    //       //         console.groupEnd();
    //       //     }
    //       //     if ( selectedValue3[step + '__' + group + '__checkbox__value'] !== undefined ) {
    //       //         if ( selectedValue3[step + '__' + group + '__checkbox__value'] ) {
    //       //             console.log( state.car[step + '_field_' + field.id].values.checkbox[0].name + ': ' + 'нужен' );
    //       //         } else {
    //       //             console.log( state.car[step + '_field_' + field.id].values.checkbox[0].name + ': ' + 'не нужен' );
    //       //         }
    //       //     }
    //           // if ( selectedValue3[step + '__' + group + '__checkbox__value'] !== undefined ) {
    //           if ( keyExists( 'checkbox_multi' , state.car[step+'_field_'+field.id].values ) ) {
    //               state.car[step+'_field_'+field.id].values.checkbox_multi.map( (fieldCheckbox, keyCheckbox) => {
    //                   // console.log( field.name + ': ' + selectedValue3[step + '__' + group + '__checkbox_' + keyCheckbox + '__value'] );
    //                   if ( selectedValue3[step + '__' + group + '__checkbox_' + keyCheckbox + '__value'] ) {
    //                       console.log( fieldCheckbox.name );
    //                   }
    //               });
    //               // if ( selectedValue3[step + '__' + group + '__checkbox__value'] ) {
    //               //     console.log( state.car[step + '_field_' + field.id].values.checkbox[0].name + ': ' + 'нужен' );
    //               // } else {
    //               //     console.log( state.car[step + '_field_' + field.id].values.checkbox[0].name + ': ' + 'не нужен' );
    //               // }
    //           }
    //       });
    //
    //
    //     // console.group( 'step_'+currentStep );
    //     // state.car['step_'+currentStep].map( (field, keyGroup) => {
    //     //     console.group( '#' + keyGroup );
    //     //     if ( state.selectedValue2['step_'+currentStep][keyGroup]['group_'+keyGroup].radios ) {
    //     //         console.log( field.name + ': ' + state.selectedValue2['step_'+currentStep][keyGroup]['group_'+keyGroup].radios.name );
    //     //     }
    //     //     if ( state.selectedValue2['step_'+currentStep][keyGroup]['group_'+keyGroup].counter !== undefined ) {
    //     //         console.log( state.car['step_'+currentStep+'_field_1'].values.counter[0].label + ': ' + state.selectedValue2['step_'+currentStep][keyGroup]['group_'+keyGroup].counter );
    //     //     }
    //     //     if ( state.selectedValue2['step_'+currentStep][keyGroup]['group_'+keyGroup].selects ) {
    //     //         state.car['step_'+currentStep+'_field_'+field.id].values.select.map( (fieldSelect, idSelect) => {
    //     //             console.log( fieldSelect.label + ': ' + state.selectedValue2['step_'+currentStep][keyGroup]['group_'+keyGroup].selects[idSelect].name );
    //     //         });
    //     //     }
    //     //     if ( state.selectedValue2['step_'+currentStep][keyGroup]['group_'+keyGroup].checkbox !== undefined ) {
    //     //         if ( state.selectedValue2['step_'+currentStep][keyGroup]['group_'+keyGroup].checkbox[0].value ) {
    //     //             console.log( state.car['step_'+currentStep+'_field_'+field.id].values.checkbox[0].name + ': ' + 'нужен' );
    //     //         } else {
    //     //             console.log( state.car['step_'+currentStep+'_field_'+field.id].values.checkbox[0].name + ': ' + 'не нужен' );
    //     //         }
    //     //     }
    //     //     console.groupEnd();
    //     // });
    //     // console.groupEnd();
    // }

}
