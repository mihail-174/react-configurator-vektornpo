import React, { Component } from 'react';
import Header from '../components3/Header';
import Footer from '../components2/Footer';
import Loading from '../components3/Loading.js';

import ItemRadio from '../components3/ItemRadio';
import Toggle from '../components3/Toggle';

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

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
    }

    componentWillMount() {
        const {context} = this.props;
        const state = context.state;
        const nameCar = state.listCar[state.currentAvto].systemName;
        // console.log( nameCar );
        fetch(`${process.env.PUBLIC_URL}/${nameCar}.json`)
        .then(res => res.json())
        .then(
            (result) => {
                setTimeout(() => {
                    context.methods.setAppState({
                        car: result
                    })
                    this.setState({
                        isLoaded: true
                    });
                }, 500);

            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

  render() {
    const { context } = this.props;
    const state = context.state;
    const { error, isLoaded } = this.state;
      // currentAvto = state.currentAvto,
      // currentStep = state.currentStep,
      // fields__x__x = state['fields__' + currentAvto + '__' + currentStep];

      // const list = state.car.list_1_1.map( (field, key) => {
      //     <div>{field.name}</div>
      // });





    // const list = fields__x__x.map((field, key) =>
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

                {
                    !isLoaded
                    ?
                    <Loading />
                    :
                    <div className='content'>
                        {
                            state.car.list_1_1.map( (field, key) =>
                                <div key={key} className={'item ' + field.systemName}>
                                    <div className='item__hd'>
                                        <div className='item__title'>#{field.id}, {field.name}</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                }

                <Footer context={context} />
            </div>
        );
    // }


  }

  // componentDidMount() {
  //     const {context} = this.props;
  //     const state = context.state;
  //     const nameCar = state.listCar[state.currentAvto].systemName;
  //     // console.log( nameCar );
  //     fetch(`${process.env.PUBLIC_URL}/${nameCar}.json`)
  //     .then(res => res.json())
  //     .then(
  //         (result) => {
  //             setTimeout(() => {
  //                 context.methods.setAppState({
  //                     car: result
  //                 })
  //                 this.setState({
  //                     isLoaded: true
  //                 });
  //             }, 500);
  //
  //         },
  //         (error) => {
  //             this.setState({
  //                 isLoaded: true,
  //                 error
  //             });
  //         }
  //     )
  // }

}
