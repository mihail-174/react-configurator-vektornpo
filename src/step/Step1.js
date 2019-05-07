import React, { Component } from 'react';
import Header from '../components3/Header';
import Footer from '../components2/Footer';
// import Loading from '../components3/Loading.js';

import ItemRadio from '../components3/ItemRadio';
// import Toggle from '../components3/Toggle';

import '../scss/item.scss';

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

export default class Step1 extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         error: null,
    //         isLoaded: false
    //     };
    // }

    componentWillMount() {
        const {context} = this.props;
        const state = context.state;
        const nameCar = state.listCar[state.currentAvto].systemName;
        // console.log( nameCar );
        fetch(`${process.env.PUBLIC_URL}/${nameCar}.json`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log( result );
                setTimeout(() => {
                    context.methods.setAppState({
                        car: result,
                        ajaxStatus: 'ok'
                    })
                }, 500);
            },
            (error) => {
                console.log( error );
                context.methods.setAppState({
                    ajaxStatus: 'error'
                })
            }
        )
    }

  render() {
    const { context } = this.props;
    const state = context.state;
    // const { isLoaded } = this.state;

    // let currentAvto = state.currentAvto;
    // let currentStep = state.currentStep;
    // let fields__x__x = state['fields__' + currentAvto + '__' + currentStep];
    // const listOLD = state.fields__1__1.map((field, key) =>
    //   <div key={key} className={'b ' + field.systemName}>
    //     <div className='b__hd'>
    //       <div className='b__title'>{field.id} — {field.name}</div>
    //       {keyExists('switch_check', context.state["fields__" + currentAvto + "__" + currentStep + "__" + parseInt(key+1,0) + "__options"]) && <Toggle context={context} systemName={field.systemName} idBlock={field.id} />}
    //     </div>
    //     <div className={
    //       keyExists('switch_check', context.state["fields__" + currentAvto + "__" + currentStep + "__" + field.id + "__options"])
    //       ?
    //         context.state["fields__" + currentAvto + "__" + currentStep + "__" + field.id + "__options"].switch_check
    //         ?
    //         'b__cont'
    //         :
    //         'b__cont disabled'
    //       :
    //       'b__cont'
    //     }>
    //       <ItemRadio context={context} systemName={field.systemName} idBlock={field.id} />
    //     </div>
    //   </div>
    // );


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
                                </div>
                                <div className='item__cont'>
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
    // }

  }

  componentDidMount() {
      // const {context} = this.props;
      // const state = context.state;
      // const nameCar = state.listCar[state.currentAvto].systemName;
      // // console.log( nameCar );
      // fetch(`${process.env.PUBLIC_URL}/${nameCar}.json`)
      // .then(res => res.json())
      // .then(
      //     (result) => {
      //         setTimeout(() => {
      //             context.methods.setAppState({
      //                 car: result,
      //                 ajaxStatus: 'ok'
      //             })
      //         }, 500);
      //     },
      //     (error) => {
      //         console.log( error );
      //         context.methods.setAppState({
      //             ajaxStatus: 'error'
      //         })
      //     }
      // )
  }

}
