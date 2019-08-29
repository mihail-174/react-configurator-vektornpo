import React, { Component } from 'react';
import Tooltip from '../components/Tooltip';

export default class ItemRadio extends Component {

    constructor() {
        super();
        this.change = this.change.bind(this);
    }

    change(val, name) {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        const itemGroupName = this.props.itemGroupName;

        context.methods.setAppState({
            selectedValue: {
                ...state.selectedValue,
                ['item_' + itemGroupId + '_value']: val,
                ['item_' + itemGroupId + '_name']: name
            }
        });

        document.querySelectorAll('.' + itemGroupName + ' .item__item').forEach(function(item, i) {
            item.classList.remove('active')
        });
        document.querySelectorAll('.' + itemGroupName + ' .item__item')[val].classList.add('active');

    }

  render() {
    const { context } = this.props;
    const state = context.state;
    const itemGroupId = this.props.itemGroupId;
    const itemGroupName = this.props.itemGroupName;
    const field = state.car['step_' + state.currentStep + '_field_' + itemGroupId].values.radio;

    return (
        <div className='item__list'>
            {
                field.map( (field, key) =>
                    <div key={key} className={
                        state.selectedValue['item_'+ itemGroupId + '_value'] === key
                        ?
                        'item__item active'
                        :
                        'item__item'
                    }>
                        <input checked={state.selectedValue['item_'+ itemGroupId + '_value'] === key ? true : false} className="item__input" id={itemGroupName + "-" + key} type='radio' name={itemGroupName} onChange={()=>this.change(key, field.name)} />
                        <label className="item__label" htmlFor={itemGroupName + "-" + key}>
                            {field.ico && <div className='item__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
                            <div className='item__text'>
                                <div className='item__name'>{field.name}</div>
                                {field.subName && <div className='item__subname'>{field.subName}</div> }
                            </div>
                        </label>
                        { field.tooltip && <Tooltip context={context} itemGroupName={itemGroupName} itemGroupId={itemGroupId} itemId={key} /> }
                    </div>
                )
            }
        </div>
    )

  }
}
