import React, { Component } from 'react';
import '../scss/wf.scss';
import '../scss/inputs.scss';

export default class WF extends Component {
  render() {
      const { context } = this.props;
      const state = context.state;
    return (
      <div className="wf">
          <form className='wf__form'>
            <div className='wf__markup'>Заполните все обязательные поля формы, и мы вышлем коммерческое предложение на данную технику в течение одного рабочего дня на указанный ящик электронной почты.</div>
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
            <div className="wf__field wf__data">
                <div>{'Техника: ' + state.listCar[state.currentAvto].name}</div>
                {
                    state.car.step_1.map((field, key) =>
                      <div key={key}>
                              {field.name} :
                              {
                                  state.selectedValue['item_' + field.id + '_name']
                                      ?
                                          ' ' +state.selectedValue['item_' + field.id + '_name']
                                      :
                                          ' -'
                              }
                              { state.selectedValue['item_' + field.id + '_value'] === true && ' да' }
                              { state.selectedValue['item_' + field.id + '_value'] === false && ' нет' }
                          </div>
                    )
                }
                {
                    state.car.step_2.map((field, key) =>
                      <div key={key}>
                              {field.name} :
                              {
                                  state.selectedValue['item_' + field.id + '_name']
                                      ?
                                          ' ' +state.selectedValue['item_' + field.id + '_name']
                                      :
                                          ' -'
                              }
                              { state.selectedValue['item_' + field.id + '_value'] === true && ' да' }
                              { state.selectedValue['item_' + field.id + '_value'] === false && ' нет' }
                          </div>
                    )
                }
                {
                    state.car.step_3.map((field, key) =>
                      <div key={key}>
                              {field.name} :
                              {
                                  state.selectedValue['item_' + field.id + '_name']
                                      ?
                                          ' ' +state.selectedValue['item_' + field.id + '_name']
                                      :
                                          ' -'
                              }
                              { state.selectedValue['item_' + field.id + '_value'] === true && ' да' }
                              { state.selectedValue['item_' + field.id + '_value'] === false && ' нет' }
                          </div>
                    )
                }
            </div>
            <div className="wf__field wf__politics">Отправляя данную форму, я подтверждаю, что ознакомлен с <a href='#politics'>политикой конфиденциальности</a>, и согласен на хранение и обработку предоставленных персональных данных.</div>
            <div className='wf__action'>
                <input className='wf__submit' type="submit" name='submit' value="Отправить"/>
            </div>
        </form>
      </div>
    );
  }
}
