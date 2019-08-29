import React, { Component } from 'react';
// import Tooltip from '../components/Tooltip';
import Select from 'react-select';
import Toggle from '../components/Toggle';

const customStyles = {
    container: (provided, state) => ({
        ...provided,
        width: '100%',
    }),
    input: (provided, state) => ({
        ...provided,
        opacity: 0,
    }),
    control: (provided, state) => ({
        ...provided,
        border: '1px solid #e3e3e3',
        boxShadow: 'none',
        // none of react-select's styles are passed to <Control />
        // width: 200,
    }),
    placeholder: (provided, state) => ({
        ...provided,
        fontWeight: 700,
        fontSize: '13px',
        color: '#616161'
    }),
    menu: (provided, state) => ({
        ...provided,
        top: 0,
        marginTop: 0,
        border: '1px solid #378fe2',
        boxShadow: 'none',
        overflow: 'hidden'
    }),
    menuList: (provided, state) => ({
        ...provided,
        padding: 0
    }),
    group: (provided, state) => ({
        ...provided,
        padding: 0
    }),
    groupHeading: (provided, state) => ({
        ...provided,
        paddingTop: '11px',
        paddingBottom: '11px',
        borderBottom: '1px solid #b8d7f5',
        margin: 0,
        textTransform: 'none',
        fontWeight: 700,
        color: '#616161'
    }),
    option: (provided, state) => ({
        ...provided,
        fontSize: '13px',
        borderBottom: '1px solid #b8d7f5',
        // color: state.isSelected ? 'red' : 'blue',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

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

var arrListChekboxMulti = [];


export default class Item extends Component {

    constructor() {
        super();
        this.changeRadio = this.changeRadio.bind(this);
        this.changeCheckBox = this.changeCheckBox.bind(this);
        this.changeCheckBoxMulti = this.changeCheckBoxMulti.bind(this);
        this.changeSelect = this.changeSelect.bind(this);
        this.incrementCounterMinus = this.incrementCounterMinus.bind(this);
        this.incrementCounterPlus = this.incrementCounterPlus.bind(this);
    }

    changeRadio(value, name) {
        const { context } = this.props;
        const state = context.state;
        const itemGroupSystemName = this.props.itemGroupSystemName;
        const step_x = 'step_' + state.currentStep;
        const group_x = 'group_' + this.props.itemGroupId;

        context.methods.setAppState({
            // selectedValue: {
            //     ...state.selectedValue,
            //     ['item_' + itemGroupId + '_value']: value,
            //     ['item_' + itemGroupId + '_name']: name
            // },
            selectedValue3: {
                ...state.selectedValue3,
                [step_x + '__' + group_x + '__radios__name']: name,
                [step_x + '__' + group_x + '__radios__value']: value
            }
        });
        document.querySelectorAll('.' + itemGroupSystemName + ' .item').forEach(function(item, i) {
            item.classList.remove('active')
        });
        document.querySelectorAll('.' + itemGroupSystemName + ' .item')[value].classList.add('active');
    }

    changeCheckBox(e) {
        const { context } = this.props;
        const state = context.state;
        const step_x = 'step_' + state.currentStep;
        const group_x = 'group_' + this.props.itemGroupId;
        const itemGroupSystemName = this.props.itemGroupSystemName;
        if ( e.target.parentNode.children[0].checked ) {
            context.methods.setAppState({
                selectedValue3: {
                    ...state.selectedValue3,
                    [step_x + '__' + group_x + '__checkbox__value']: e.currentTarget.checked
                    // ['item_' + itemGroupId + '_name']: 'yes'
                    // ['item_' + itemGroupId + '_value']: e.currentTarget.checked,
                }
            });
        } else {
            context.methods.setAppState({
                selectedValue3: {
                    ...state.selectedValue3,
                    [step_x + '__' + group_x + '__checkbox__value']: e.currentTarget.checked
                    // ['item_' + itemGroupId + '_value']: e.currentTarget.checked,
                    // ['item_' + itemGroupId + '_name']: null
                }
            });
        }
        if ( e.target.parentNode.children[0].checked ) {
            document.querySelector('.' + itemGroupSystemName + ' .item').classList.add('active');
        } else {
            document.querySelector('.' + itemGroupSystemName + ' .item').classList.remove('active');
        }
    }

    changeCheckBoxMulti(e) {
        const { context } = this.props;
        const state = context.state;
        const step_x = 'step_' + state.currentStep;
        const group_x = 'group_' + this.props.itemGroupId;
        const itemGroupSystemName = this.props.itemGroupSystemName;

        if ( e.target.checked ) {
            document.querySelector(e.target.parentNode.classList.add('active'));
            arrListChekboxMulti.push( e.target.parentNode.querySelector('.item__name').innerText );
        } else {
            document.querySelector(e.target.parentNode.classList.remove('active'));
            arrListChekboxMulti.map((number, index) => {
                if ( number === e.target.parentNode.querySelector('.item__name').innerText ) {
                    arrListChekboxMulti.splice(index, 1);
                }
            });
        }
        context.methods.setAppState({
            selectedValue3: {
                ...state.selectedValue3,
                [step_x + '__' + group_x + '__checkbox_multi']: arrListChekboxMulti,
                [step_x + '__' + group_x + '__checkbox_' + e.target.parentNode.getAttribute('data-index') + '__value']: e.target.checked
            }
        });


        // if ( e.target.parentNode.children[0].checked ) {
        //     context.methods.setAppState({
        //         selectedValue3: {
        //             ...state.selectedValue3,
        //             [step_x + '__' + group_x + '__checkbox__value']: e.currentTarget.checked
        //             // ['item_' + itemGroupId + '_name']: 'yes'
        //             // ['item_' + itemGroupId + '_value']: e.currentTarget.checked,
        //         }
        //     });
        // } else {
        //     context.methods.setAppState({
        //         selectedValue3: {
        //             ...state.selectedValue3,
        //             [step_x + '__' + group_x + '__checkbox__value']: e.currentTarget.checked
        //             // ['item_' + itemGroupId + '_value']: e.currentTarget.checked,
        //             // ['item_' + itemGroupId + '_name']: null
        //         }
        //     });
        // }
        // if ( e.target.parentNode.children[0].checked ) {
        //     document.querySelector('.' + itemGroupSystemName + ' .item').classList.add('active');
        // } else {
        //     document.querySelector('.' + itemGroupSystemName + ' .item').classList.remove('active');
        // }
    }

    changeSelect(selectedOption, idSelect) {
        const { context } = this.props;
        const state = context.state;
        const step_x = 'step_' + state.currentStep;
        const group_x = 'group_' + this.props.itemGroupId;
        const select_x = 'select_' + idSelect;
        if ( selectedOption !== null )
        {
            context.methods.setAppState({
                selectedValue3: {
                    ...state.selectedValue3,
                    // [step_x + '__' + group_x + '__' + select_x + '__name']: selectedOption.label,
                    [step_x + '__' + group_x + '__' + select_x + '__value']: selectedOption
                    // ['item_' + itemGroupId + '_' + idSelect + '_value']: selectedOption.value,
                    // ['item_' + itemGroupId + '_' + idSelect + '_name']: selectedOption.label
                }
            });
        }
        else
        {
            delete state.selectedValue3[step_x + '__' + group_x + '__' + select_x + '__value'];
            context.methods.setAppState({
            //     selectedValue3: {
            //         ...state.selectedValue3,
            //         // [step_x + '__' + group_x + '__' + select_x + '__name']: null,
            //         [step_x + '__' + group_x + '__' + select_x + '__value']: null
            //         // ['item_' + itemGroupId + '_' + idSelect + '_value']: null,
            //         // ['item_' + itemGroupId + '_' + idSelect + '_name']: null
            //     }
            });
        }
    }

    incrementCounterPlus(e, idCounter) {
        const { context } = this.props;
        const state = context.state;
        const step_x = 'step_' + state.currentStep;
        const group_x = 'group_' + this.props.itemGroupId;
        let value = 0;
        if ( keyExists([step_x + '__' + group_x + '__counter'] , state.selectedValue3) ) {
            if ( state.selectedValue3[step_x + '__' + group_x + '__counter'] < 5 ) {
                 context.methods.setAppState({
                     selectedValue3: {
                         ...state.selectedValue3,
                         [step_x + '__' + group_x + '__counter']: state.selectedValue3[step_x + '__' + group_x + '__counter'] += 1
                     }
                 });
            }
        } else {
             context.methods.setAppState({
                 selectedValue3: {
                     ...state.selectedValue3,
                     [step_x + '__' + group_x + '__counter']: value += 1
                 }
             });
        }
        // if ( keyExists(['item_' + itemGroupId + '_counter_value'], state.selectedValue) ) {
        //     if ( state.selectedValue['item_' + itemGroupId + '_counter_value'] < 5 ) {
        //         value = state.selectedValue['item_' + itemGroupId + '_counter_value'] += 1;
        //         context.methods.setAppState({
        //             selectedValue: {
        //                 ...state.selectedValue,
        //                 ['item_' + itemGroupId + '_counter_value']: value
        //             }
        //         });
        //     }
        // } else {
        //     value += 1;
        //     context.methods.setAppState({
        //         selectedValue: {
        //             ...state.selectedValue,
        //             ['item_' + itemGroupId + '_counter_value']: value
        //         }
        //     });
        // }
    }

    incrementCounterMinus(e, idCounter) {
        const { context } = this.props;
        const state = context.state;
        const step_x = 'step_' + state.currentStep;
        const group_x = 'group_' + this.props.itemGroupId;
        let value = 0;
        if ( keyExists([step_x + '__' + group_x + '__counter'] , state.selectedValue3) ) {
            if ( state.selectedValue3[step_x + '__' + group_x + '__counter'] > 0 ) {
                 context.methods.setAppState({
                     selectedValue3: {
                         ...state.selectedValue3,
                         [step_x + '__' + group_x + '__counter']: state.selectedValue3[step_x + '__' + group_x + '__counter'] -= 1
                     }
                 });
            }
        } else {
            context.methods.setAppState({
                selectedValue3: {
                    ...state.selectedValue3,
                    [step_x + '__' + group_x + '__counter']: 0
                }
            });
        }
        // if ( keyExists(['item_' + itemGroupId + '_counter_value'], state.selectedValue)  ) {
        //     if ( state.selectedValue['item_' + itemGroupId + '_counter_value'] > 0 ) {
        //         value = state.selectedValue['item_' + itemGroupId + '_counter_value'] -= 1;
        //         context.methods.setAppState({
        //             selectedValue: {
        //                 ...state.selectedValue,
        //                 ['item_' + itemGroupId + '_counter_value']: value
        //             }
        //         });
        //     }
        // } else {
        //     if ( state.selectedValue['item_' + itemGroupId + '_counter_value'] > 0 ) {
        //         value -= 1;
        //         context.methods.setAppState({
        //             selectedValue: {
        //                 ...state.selectedValue,
        //                 ['item_' + itemGroupId + '_counter_value']: value
        //             }
        //         });
        //     }
        // }
    }

    render() {
        const { context } = this.props;
        const state = context.state;
        const step_x = 'step_' + state.currentStep;
        const group_x = 'group_' + this.props.itemGroupId;
        const itemGroupId = this.props.itemGroupId;
        const itemGroupName = this.props.itemGroupName;
        const itemGroupSystemName = this.props.itemGroupSystemName;
        const arrRadio = state.car[step_x + '_field_' + itemGroupId].values.radio;
        const arrSelect = state.car[step_x + '_field_' + itemGroupId].values.select;
        const arrCheckbox = state.car[step_x + '_field_' + itemGroupId].values.checkbox;
        const arrCheckboxMulti = state.car[step_x + '_field_' + itemGroupId].values.checkbox_multi;
        const arrCounter = state.car[step_x + '_field_' + itemGroupId].values.counter;

        let listRadio = '';
        if ( keyExists('radio', state.car[step_x + '_field_' + itemGroupId].values) ) {
            listRadio = arrRadio.map( (field, key) =>
                <div key={key} className={
                    state.selectedValue3[step_x + '__' + group_x + '__radios__value'] === key
                    ?
                    'item item_radio active'
                    :
                    'item item_radio'
                }>
                    <input
                        checked={state.selectedValue3[step_x + '__' + group_x + '__radios__value'] === key ? true : false}
                        className="item__input" id={itemGroupName + "-" + key}
                        type='radio'
                        name={itemGroupName}
                        onChange={()=>this.changeRadio(key, field.name)}
                    />
                    <label className="item__label" htmlFor={itemGroupName + "-" + key}>
                        {field.ico && <div className='item__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
                        <div className='item__text'>
                            <div className='item__name'>{field.name}</div>
                            {field.subName && <div className='item__subname'>{field.subName}</div> }
                        </div>
                    </label>
                    {/* field.tooltip && <Tooltip context={context} itemGroupName={itemGroupName} itemGroupId={itemGroupId} itemId={key} /> */}
                </div>
            )
        }

        let listSelect = '';
        if ( keyExists('select', state.car[step_x + '_field_' + itemGroupId].values) ) {
            listSelect = arrSelect.map( (field, key) => {
                return (
                    <div key={key} className='item item_select'>
                        <Select
                            styles={customStyles}
                            key={key}
                            value={
                                state.selectedValue3[step_x + '__' + group_x + '__select_' + key + '__value']
                                ?
                                    state.selectedValue3[step_x + '__' + group_x + '__select_' + key + '__value']
                                :
                                    null
                            }
                            // defaultValue={state.selectedValue3[step_x + '__' + group_x + '__select_' + key + '__value']}
                            isClearable={true}
                            // hideSelectedOptions={false}
                            placeholder={state.car['step_' + state.currentStep + '_field_' + itemGroupId].values.select[key].label}
                            onChange={(e)=>this.changeSelect(e, key)}
                            options={[field]}
                        />
                    </div>
                )
            })
        }

        let listCheckbox = '';
        if ( keyExists('checkbox', state.car[step_x + '_field_' + itemGroupId].values) ) {
            listCheckbox = arrCheckbox.map( (field, key) =>
                <div key={key} className={
                    keyExists(step_x + '__' + group_x + '__checkbox__value', state.selectedValue3)
                    ?
                        state.selectedValue3[step_x + '__' + group_x + '__checkbox__value']
                        ?
                            'item item_checkbox active'
                        :
                            'item item_checkbox'
                    :
                        field.checked
                        ?
                            'item item_checkbox active'
                        :
                            'item item_checkbox'
                }>
                    <input
                        type='checkbox'
                        className="item__input"
                        id={itemGroupName + "-" + key}
                        name={itemGroupName}
                        defaultChecked={
                            keyExists(step_x + '__' + group_x + '__checkbox__value', state.selectedValue3)
                            ?
                            state.selectedValue3[step_x + '__' + group_x + '__checkbox__value']
                            :
                            field.checked
                        }
                        onChange={this.changeCheckBox.bind(this)}
                    />
                    <label className="item__toggle" htmlFor={itemGroupName + "-" + key}></label>
                    <label className="item__label" htmlFor={itemGroupName + "-" + key}>
                        {field.ico && <div className='item__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
                        <div className='item__text'>
                            <div className='item__name'>{field.name}</div>
                            {field.subName && <div className='item__subname'>{field.subName}</div> }
                        </div>
                    </label>
                    {/* field.tooltip && <Tooltip context={context} itemGroupName={itemGroupName} itemGroupId={itemGroupId} itemId={key} /> */}
                </div>
            )
        }

        let listCheckboxMulti = '';
        if ( keyExists('checkbox_multi', state.car[step_x + '_field_' + itemGroupId].values) ) {
            listCheckboxMulti = arrCheckboxMulti.map( (field, key) => {
                return (
                    <div key={key} className={
                        state.selectedValue3[step_x + '__' + group_x + '__checkbox_' + key + '__value']
                        ?
                        'item item_checkbox active'
                        :
                        'item item_checkbox'
                    } data-index={key}>
                        <input
                            type='checkbox'
                            className="item__input"
                            id={itemGroupName + "-" + key}
                            name={itemGroupName}
                            checked={state.selectedValue3[step_x + '__' + group_x + '__checkbox_' + key + '__value'] ? true : false }
                            onChange={this.changeCheckBoxMulti.bind(this)}
                        />
                        <label className="item__toggle" htmlFor={itemGroupName + "-" + key}></label>
                        <label className="item__label" htmlFor={itemGroupName + "-" + key}>
                            {field.ico && <div className='item__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
                            <div className='item__text'>
                                <div className='item__name'>{field.name}</div>
                                {field.subName && <div className='item__subname'>{field.subName}</div> }
                            </div>
                        </label>
                    </div>
                )
            });
        }


        // <div key={key} className={
        //     state.selectedValue3[step_x + '__' + group_x + '__checkbox_' + key + '__value']
        //     ?
        //     'item__item active'
        //     :
        //     'item__item'
        // } data-index={key}>
        //   <input
        //       type='checkbox'
        //       className="item__input toggle__input"
        //       id={itemGroupName + "-" + key}
        //       name={itemGroupName}
        //       checked={state.selectedValue3[step_x + '__' + group_x + '__checkbox_' + key + '__value'] ? true : false }
        //       // onChange={this.handleInputChange.bind(this)}
        //   />
        //   <label className="toggle__label" htmlFor={itemGroupName + "-" + key}></label>
        //   <label className="item__label" htmlFor={itemGroupName + "-" + key}>
        //       {field.ico && <div className='item__image'><img src={require('../img/step-ico/' + field.url)} alt='' /></div>}
        //       <div className='item__text'>
        //           <div className='item__name'>{field.name}</div>
        //           {field.subName && <div className='item__subname'>{field.subName}</div> }
        //       </div>
        //   </label>
        // </div>



        let listCounter = '';
        if ( keyExists('counter', state.car[step_x + '_field_' + itemGroupId].values) ) {
            listCounter = arrCounter.map( (field, key) =>
                <div key={key} className='item item_counter'>
                    <div className='item__label'>
                        <div className='item__text'>
                            <div className='item__name'>
                                { field.label }
                            </div>
                        </div>
                        <div className='item__num'>
                            <input
                                type='button'
                                className='item__num-minus'
                                defaultValue='-'
                                onClick={(e)=>this.incrementCounterMinus(e, key)}
                            />
                            <div className='item__num-value'>
                                {
                                    keyExists([step_x + '__' + group_x + '__counter'], state.selectedValue3)
                                    ?
                                        state.selectedValue3[step_x + '__' + group_x + '__counter']
                                    :
                                        field.value
                                }
                            </div>
                            <input
                                type='button'
                                className='item__num-plus'
                                defaultValue='+'
                                onClick={(e)=>this.incrementCounterPlus(e, key)}
                            />
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className={'group-item ' + itemGroupSystemName}>
                <div className='group-item__hd'>
                    <div className='group-item__title'>#{ itemGroupId } { itemGroupName }</div>
                    {
                        keyExists('switch', state.car[step_x + '_field_' + itemGroupId])
                        &&
                        <Toggle context={context} itemGroupSystemName={itemGroupSystemName} itemGroupId={itemGroupId} />
                    }
                </div>

                <div
                    className={
                        state.selectedValue3[step_x + '__' + group_x + '__toggle'] === undefined
                        ?
                            keyExists('switch', state.car[step_x + '_field_' + itemGroupId])
                            ?
                                state.car[step_x + '_field_' + itemGroupId].switch.checked
                                ?
                                    'group-item__cont'
                                :
                                    'group-item__cont disabled'
                            :
                                'group-item__cont'
                        :
                            state.selectedValue3[step_x + '__' + group_x + '__toggle']
                            ?
                            'group-item__cont'
                            :
                            'group-item__cont disabled'
                    }
                >
                    <div className='group-item__list'>
                        { listRadio }
                        { listCounter }
                        { listSelect }
                        { listCheckbox }
                        { listCheckboxMulti }
                    </div>
                </div>
            </div>
        )
    }

}
