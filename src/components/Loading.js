import React, { Component } from 'react';
import '../scss/loading.scss';

export default class Loading extends Component {
    render() {
        return (
            <div className='loading'>Загрузка...</div>
        )
    }
}

// return (
//         <div className={'loading ' + [state.ajaxStatus === null ? '' : state.ajaxStatus === 'ok' ? 'ok' : 'error']}>
//             {
//                 state.ajaxStatus === null
//                 ?
//                 'Загрузка...'
//                 :
//                     state.ajaxStatus === 'error' && 'Произошла ошибка загрузки данных...'
//             }
//         </div>
// )
