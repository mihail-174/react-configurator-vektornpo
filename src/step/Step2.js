import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Item from '../components/Item';

export default class Step2 extends Component {

    render() {
        const { context } = this.props;
        const state = context.state;

        let nameCar = '';
        context.state.listCar.forEach((elem, key) => {
            if ( elem.id === state.currentAvto ) {
                nameCar = 'content_' + elem.systemName;
            }
        });

        const item = state.car.step_2.map( (field, key) =>
            <Item
                key={key}
                context={context}
                itemGroupId={field.id}
                itemGroupName={field.name}
                itemGroupSystemName={field.systemName}
            />
        )

        return (
            <div className='step step_two'>
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

}
