import React, { Component } from 'react';

// function keyExists(key, search) {
//     if (!search || (search.constructor !== Array && search.constructor !== Object)) {
//         return false;
//     }
//     for (var i = 0; i < search.length; i++) {
//         if (search[i] === key) {
//             return true;
//         }
//     }
//     return key in search;
// }

export default class ItemRadio extends Component {

    constructor() {
        super();
        this.change = this.change.bind(this);
    }

    change(val) {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        const itemGroupName = this.props.itemGroupName;

        context.methods.setAppState({
            ['valueItem_' + itemGroupId]: val
        });

        document.querySelectorAll('.' + itemGroupName + ' .item__item').forEach(function(item, i) {
            item.classList.remove('active')
        });
        document.querySelectorAll('.' + itemGroupName + ' .item__item')[val].classList.add('active');


        // currentAvto = state.currentAvto,
        // currentStep = state.currentStep,
        // idBlock = this.props.idBlock,
        // systemName = this.props.systemName,
        // selectedVal = 'valBlock__' + idBlock,
        // fields__x__x = 'fields__' + currentAvto + '__' + currentStep,
        // fields__x__x__x__options = state["fields__" + currentAvto + "__" + currentStep + "__" + idBlock + "__options"];
        // context.methods.setAppState({
        //     [selectedVal]: (keyExists('switch_check', fields__x__x__x__options)===true && fields__x__x__x__options.switch_check) || keyExists('switch_check', fields__x__x__x__options)===false ? val : null
        // });
        //
        // if ( (keyExists('switch_check', fields__x__x__x__options)===true && fields__x__x__x__options.switch_check) || keyExists('switch_check', fields__x__x__x__options)===false ) {
        //     document.querySelectorAll('.' + systemName + ' .b__item').forEach(function(item, i) {
        //         item.classList.remove('active')
        //     });
        //     document.querySelector('.' + systemName + ' .b__item_' + val).classList.add('active');
        // }
    }

  render() {
    const { context } = this.props;
    const state = context.state;
    const itemGroupId = this.props.itemGroupId;
    const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId];
    const itemGroupName = this.props.itemGroupName;

    // const {context} = this.props,
    //       state = context.state,
    //       currentAvto = state.currentAvto,
    //       currentStep = state.currentStep,
    //       idBlock = this.props.idBlock,
    //       systemName = this.props.systemName,
    //       selectedVal = state['valBlock__' + idBlock],
    //       fields__x__x__x = state['fields__' + currentAvto + '__' + currentStep + '__' + idBlock],
    //       fields__x__x__x__options = state["fields__" + currentAvto + "__" + currentStep + "__" + idBlock + "__options"];

    // let newSwitchCheck;
    // if ( fields__x__x__x__options ) {
    //   newSwitchCheck = fields__x__x__x__options.switch_check;
    // }

    // const list = fields__x__x__x.map((field, key) => {
    //   return (
    //     <div key={key} className={
    //       selectedVal===key
    //       ?
    //       'b__item b__item_' + key + ' active'
    //       :
    //       'b__item b__item_' + key
    //     }>
    //       <input className="b__input" id={systemName + "-" + key} checked={selectedVal===key ? true : false} onChange={()=>this.change(key)} disabled={keyExists('switch_check', fields__x__x__x__options)&&newSwitchCheck===false?true:false} type='radio' name={systemName} value={key} />
    //       <label className="b__label" onClick={()=>this.change(key)} htmlFor={systemName + "-" + key}>
    //
    //         {field.ico && <div className='b__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
    //
    //         <div className='b__text'>
    //           <div className='b__name'>{field.name}</div>
    //           {field.subName && <div className='b__subname'>{field.subName}</div> }
    //         </div>
    //
    //       </label>
    //     </div>
    //     )
    //   }
    // );

    return (
        <div className='item__list'>
            {
                field.map( (field, key) =>
                    <div className='item__item' key={key}>
                        <input className="item__input" id={itemGroupName + "-" + key} type='radio' name={itemGroupName} value={key} onChange={()=>this.change(key)} />
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
}


// defaultChecked={selectedVal===null && selectedVal===key?true:false}
