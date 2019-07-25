import React, { Component } from 'react';
import ShooseAvto from '../components/ShooseAvto';
import Loading from '../components/Loading.js';

export default class Step0 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
    }

    componentWillMount() {}

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
                    <div className='step step_main'>
                        <ShooseAvto context={context} />
                    </div>
                </div>
            );
        }
    }

    componentDidMount() {
        const {context} = this.props;
        fetch(`${process.env.PUBLIC_URL}/listCar.json`)
        .then(res =>res.json())
        .then(
            (result) => {
                setTimeout(() => {
                    context.methods.setAppState({
                        listCar: result,
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
