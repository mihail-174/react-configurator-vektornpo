import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import ComponentItemRadio from '../components/ItemRadio';
import ComponentItemCheckBox from '../components/ItemCheckBox';
import ComponentItemCheckBoxMulti from '../components/ItemCheckboxMulti';

import '../scss/item.scss';

// import Dvigatel from '../components/Dvigatel.js';
// import SpalnoeMesto from '../components/SpalnoeMesto.js';
// import ZapasnoeKoleso from '../components/ZapasnoeKoleso.js';
// import InstrumentIashchiki from '../components/InstrumentIashchiki.js';
// import ProtivopodkatnyBrus from '../components/ProtivopodkatnyBrus.js';
// import ZimniiPaket from '../components/ZimniiPaket.js';

// const Context = React.createContext()


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
                </div>
                <div className='item__cont'>
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


// export default class Step3 extends Component {
//   render() {
//     const { context } = this.props;
//     const list = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep].map((field, key) =>
//       <div key={key} className={'b ' + field.system}>
//         <div className='b__title'>{field.name}</div>
//         {field.type === 'radio' && <ItemRadio id={field.id} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />}
//         {field.type === 'checkbox' && <ItemCheckbox id={field.id} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />}
//         {field.type === 'checkboxmulti' && <ItemCheckboxMulti id={field.id} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />}
//       </div>
//     );
//
//     return (
//       <div className='step step_one'>
//         <Header context={context} />
//         <div className='content'>
//           {list}
//         </div>
//         <Footer context={context} />
//       </div>
//     );
//
//   }
//
// }
