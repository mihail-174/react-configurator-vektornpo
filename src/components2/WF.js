import React, { Component } from 'react';
import '../css/wf.css';
import '../css/inputs.css';

export default class WF extends Component {
  render() {
    return (
      <div className="wf">
        <div className='wf__markup'> Заполните все обязательные поля формы, и мы вышлем коммерческое предложение на данную технику в течение одного рабочего дня на указанный ящик электронной почты.</div>
        <div className="wf__field wf__fio">
          <input type='text' name='fio' placeholder='ФИО, Компания' />
        </div>
        <div className="wf__field wf__email">
          <input type='text' name='email' placeholder='E-mail' />
        </div>
        <div className="wf__field wf__phone">
          <input type='text' name='phone' placeholder='Контактный телефон' />
        </div>
        <div className="wf__field wf__notice">
          <textarea name='notice' placeholder='Примечание'></textarea>
        </div>
        <div className="wf__field wf__politics">Отправляя данную форму, я подтверждаю, что ознакомлен с <a href='#politics'>политикой конфиденциальности</a>, и согласен на хранение и обработку предоставленных персональных данных.</div>
      </div>
    );
  }
}
