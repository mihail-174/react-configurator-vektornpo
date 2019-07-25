import React, { Component } from 'react';

import Step1 from '../step/Step1';
import Step2 from '../step/Step2';
import Step3 from '../step/Step3';
import Step4 from '../step/Step4';

import Loading from '../components/Loading.js';

export default class Contents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
    }

    render() {
        const { context } = this.props;
        const { error, isLoaded } = this.state;
        if (error) {
            return <div className='error-message'>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loading />;
        } else {
            return (
                <div className='steps__inner'>
                    { context.state.currentStep === 1 && <Step1 context={context}/> }
                    { context.state.currentStep === 2 && <Step2 context={context}/> }
                    { context.state.currentStep === 3 && <Step3 context={context}/> }
                    { context.state.currentStep === 4 && <Step4 context={context}/> }
                </div>
            );
        }

    }

    componentDidMount() {
        const {context} = this.props;
        const state = context.state;
        const nameCar = state.listCar[state.currentAvto].systemName;
        fetch(`${process.env.PUBLIC_URL}/${nameCar}.json`)
        .then(res => res.json())
        .then(
            (result) => {
                setTimeout(() => {
                    context.methods.setAppState({
                        car: result
                    })
                    this.setState({
                        isLoaded: true,
                    });
                }, 500);
            },
            (error) => {
                console.log( error );
                this.setState({
                    isLoaded: false,
                    error
                });
            }
        )
    }

}
