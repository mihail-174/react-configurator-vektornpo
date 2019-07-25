import React, { Component } from 'react';
import '../scss/wf.scss';
import '../scss/inputs.scss';
import $ from 'jquery';
import once from 'jquery-once';

export default class WF extends Component {
  render() {
      const { context } = this.props;
      const state = context.state;
    return (
      <div className="wf">
          <form className="wf__form" action="/submit.php" method="POST">
            <div className='wf__markup'>Заполните все обязательные поля формы, и мы вышлем коммерческое предложение на данную технику в течение одного рабочего дня на указанный ящик электронной почты.</div>
            <div className="wf__field wf__fio">
              <input type='text' name='fio' placeholder='ФИО, Компания *' />
            </div>
            <div className="wf__field wf__email">
              <input type='text' name='email' placeholder='E-mail *' />
            </div>
            <div className="wf__field wf__phone">
              <input type='text' name='phone' placeholder='Контактный телефон *' />
            </div>
            <div className="wf__field wf__notice">
              <textarea name='notice' placeholder='Примечание'></textarea>
            </div>
            <div className="wf__field wf__data">
                <textarea hidden rows='17' name='data' value={
                    'Техника: ' + state.listCar[state.currentAvto].name
                    +
                    state.car.step_1.map((field, key) =>
                      '\n' + field.name + ': ' + (state.selectedValue['item_' + field.id + '_name']?' ' +state.selectedValue['item_' + field.id + '_name']:' -') + (state.selectedValue['item_' + field.id + '_value'] === true ? ' да':'') + (state.selectedValue['item_' + field.id + '_value'] === false ? ' нет':'')
                    )
                    +
                    state.car.step_2.map((field, key) =>
                      '\n' + field.name + ': ' + (state.selectedValue['item_' + field.id + '_name']?' ' +state.selectedValue['item_' + field.id + '_name']:' -') + (state.selectedValue['item_' + field.id + '_value'] === true ? ' да':'') + (state.selectedValue['item_' + field.id + '_value'] === false ? ' нет':'')
                    )
                    +
                    state.car.step_3.map((field, key) =>
                      '\n' + field.name + ': ' + (state.selectedValue['item_' + field.id + '_name']?' ' +state.selectedValue['item_' + field.id + '_name']:' -') + (state.selectedValue['item_' + field.id + '_value'] === true ? ' да':'') + (state.selectedValue['item_' + field.id + '_value'] === false ? ' нет':'')
                    )
                } />
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

    componentDidMount() {
        $(document).on("click", ".footer__finish", function() {
            $('.wf__submit').click();
        });
        $(document).on("submit", ".wf__form", function(e) {
            e.preventDefault();
            var $wf = $(this).parents('.wf');
            var $form = $(this);
            var actionUrl = $form.attr("action");
            $form.find(".error").removeClass("error");
            $.post(
                actionUrl,
                $form.serialize(),
                function(data) {
                    var res = JSON.parse(data);
                    if (res.STATUS === 1) {
                        if (res.FORM_TITLE) {
                            $form.find(".heading").html(res.FORM_TITLE);
                        }
                        // $form.find("input, select, textarea").attr("disabled", "disabled").hide();
                        if (res.SUCCESSFULLY) {
                            $('.footer__finish, .footer__prev').remove();
                            $wf.once().prepend('<div class="wf__message"></div>');
                            $wf.find(".wf__message").html(res.SUCCESSFULLY).addClass('wf__message_success').removeClass('wf__message_errors');
                            $form.remove();
                        }
                        // if (res.RELOAD == 1) {
                        //     window.location.reload();
                        // }
                    } else {
                        $wf.once().prepend('<div class="wf__message"></div>');
                        if (res.MSG) {
                            $wf.find(".wf__message").html(res.MSG).addClass('wf__message_errors').removeClass('wf__message_success');
                        }
                        for(var i in res.ERROR_FIELDS) {
                            var fName = res.ERROR_FIELDS[i];
                            var $input = $form.find("[name='"+ fName + "']").addClass("error");
                        }
                    }
                }
            );
            return false;
        });
    }

}
