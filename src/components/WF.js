import React, { Component } from 'react';
import '../scss/wf.scss';
import '../scss/inputs.scss';
import $ from 'jquery';
import once from 'jquery-once';

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

export default class WF extends Component {
  render() {
      const { context } = this.props;
      const state = context.state;
      const currentStep = state.currentStep;
      const selectedValue3 = state.selectedValue3;
      const step1 = 'step_1';
      const step2 = 'step_2';
      const step3 = 'step_3';

      let contentStep1 = state.car[step1].map( (field, keyGroup) => {
          const group = 'group_' + keyGroup;
          if ( selectedValue3[step1 + '__' + group + '__radios__name'] !== undefined ) {
              return '<br>' + field.name + ': ' + selectedValue3[step1 + '__' + group + '__radios__name'];
          }
          if ( selectedValue3[step1 + '__' + group + '__counter'] !== undefined ) {
              return '<br>' + state.car[step1 + '_field_1'].values.counter[0].label + ': ' + selectedValue3[step1 + '__' + group + '__counter'];
          }
          if ( keyExists( 'select' , state.car[step1+'_field_'+field.id].values ) ) {
              return state.car[step1+'_field_'+field.id].values.select.map( (fieldSelect, keySelect) => {
                  if (selectedValue3[step1 + '__' + group + '__select_' + keySelect + '__value'] ) {
                      return '<br>' + fieldSelect.label + ': ' + selectedValue3[step1 + '__' + group + '__select_' + keySelect + '__value'].label;
                  }
              }).join('');
          }
          if ( selectedValue3[step1 + '__' + group + '__checkbox__value'] !== undefined ) {
              if ( selectedValue3[step1 + '__' + group + '__checkbox__value'] ) {
                  return '<br>' + state.car[step1 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'нужен';
              } else {
                  return '<br>' + state.car[step1 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'не нужен';
              }
          }
      }).join('');

      let contentStep2 = state.car[step2].map( (field, keyGroup) => {
          const group = 'group_' + keyGroup;
          if ( selectedValue3[step2 + '__' + group + '__radios__name'] !== undefined ) {
              return '<br>' + field.name + ': ' + selectedValue3[step2 + '__' + group + '__radios__name'];
          }
          if ( selectedValue3[step2 + '__' + group + '__counter'] !== undefined ) {
              return '<br>' + state.car[step2 + '_field_1'].values.counter[0].label + ': ' + selectedValue3[step2 + '__' + group + '__counter'];
          }
          if ( keyExists( 'select' , state.car[step2+'_field_'+field.id].values ) ) {
              return state.car[step2+'_field_'+field.id].values.select.map( (fieldSelect, keySelect) => {
                  if (selectedValue3[step2 + '__' + group + '__select_' + keySelect + '__value'] ) {
                      return '<br>' + fieldSelect.label + ': ' + selectedValue3[step2 + '__' + group + '__select_' + keySelect + '__value'].label;
                  }
              }).join('');
          }
          if ( selectedValue3[step2 + '__' + group + '__checkbox__value'] !== undefined ) {
              if ( selectedValue3[step2 + '__' + group + '__checkbox__value'] ) {
                  return '<br>' + state.car[step2 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'нужен';
              } else {
                  return '<br>' + state.car[step2 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'не нужен';
              }
          }
      }).join('');

      let contentStep3 = state.car[step3].map( (field, keyGroup) => {
          const group = 'group_' + keyGroup;
          if ( selectedValue3[step3 + '__' + group + '__radios__name'] !== undefined ) {
              return '<br>' + field.name + ': ' + selectedValue3[step3 + '__' + group + '__radios__name'];
          }
          if ( selectedValue3[step3 + '__' + group + '__counter'] !== undefined ) {
              return '<br>' + state.car[step3 + '_field_1'].values.counter[0].label + ': ' + selectedValue3[step3 + '__' + group + '__counter'];
          }
          if ( keyExists( 'select' , state.car[step3+'_field_'+field.id].values ) ) {
              return state.car[step3+'_field_'+field.id].values.select.map( (fieldSelect, keySelect) => {
                  if (selectedValue3[step3 + '__' + group + '__select_' + keySelect + '__value'] ) {
                      return '<br>' + fieldSelect.label + ': ' + selectedValue3[step3 + '__' + group + '__select_' + keySelect + '__value'].label;
                  }
              }).join('');
          }
          if ( selectedValue3[step3 + '__' + group + '__checkbox__value'] !== undefined ) {
              if ( selectedValue3[step3 + '__' + group + '__checkbox__value'] ) {
                  return '<br>' + state.car[step3 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'нужен';
              } else {
                  return '<br>' + state.car[step3 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'не нужен';
              }
          }
          if ( keyExists( 'checkbox_multi' , state.car[step3+'_field_'+field.id].values ) ) {
              return '<br>' + field.name + ': ' + state.car[step3+'_field_'+field.id].values.checkbox_multi.map( (fieldCheckbox, keyCheckbox) => {
                  if ( selectedValue3[step3 + '__' + group + '__checkbox_' + keyCheckbox + '__value'] ) {
                      return fieldCheckbox.name;
                  }
              });
          }
      }).join('');

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
                <textarea rows='17' name='data' defaultValue={
                    'Техника: ' + state.listCar[state.currentAvto].name + '<br>' + contentStep1 + '<br>' + contentStep2 + '<br>' + contentStep3
                } />
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
        // const { context } = this.props;
        // const state = context.state;
        // const currentStep = state.currentStep;
        // const selectedValue3 = state.selectedValue3;
        // const step1 = 'step_1';
        // const step2 = 'step_2';
        // const step3 = 'step_3';
        // const step = 'step_' + currentStep;

        // console.group('STEP 1');
        // state.car[step1].map( (field, keyGroup) => {
        //     const group = 'group_' + keyGroup;
        //     if ( selectedValue3[step1 + '__' + group + '__radios__name'] !== undefined ) {
        //         console.log( field.name + ': ' + selectedValue3[step1 + '__' + group + '__radios__name'] );
        //     }
        //     if ( selectedValue3[step1 + '__' + group + '__counter'] !== undefined ) {
        //         console.group(field.name);
        //         console.log( state.car[step1 + '_field_1'].values.counter[0].label + ': ' + selectedValue3[step1 + '__' + group + '__counter'] );
        //         console.groupEnd();
        //     }
        //     if ( keyExists( 'select' , state.car[step1+'_field_'+field.id].values ) ) {
        //         console.group(field.name);
        //         state.car[step1+'_field_'+field.id].values.select.map( (fieldSelect, keySelect) => {
        //             if (selectedValue3[step1 + '__' + group + '__select_' + keySelect + '__value'] ) {
        //                 console.log( fieldSelect.label + ': ' + selectedValue3[step1 + '__' + group + '__select_' + keySelect + '__value'].label );
        //             }
        //         });
        //         console.groupEnd();
        //     }
        //     if ( selectedValue3[step1 + '__' + group + '__checkbox__value'] !== undefined ) {
        //         if ( selectedValue3[step1 + '__' + group + '__checkbox__value'] ) {
        //             console.log( state.car[step1 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'нужен' );
        //         } else {
        //             console.log( state.car[step1 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'не нужен' );
        //         }
        //     }
        // });
        // console.groupEnd();

        // console.group('STEP 2');
        // state.car[step2].map( (field, keyGroup) => {
        //     const group = 'group_' + keyGroup;
        //     if ( selectedValue3[step2 + '__' + group + '__radios__name'] !== undefined ) {
        //         console.log( field.name + ': ' + selectedValue3[step2 + '__' + group + '__radios__name'] );
        //     }
        //     if ( selectedValue3[step2 + '__' + group + '__counter'] !== undefined ) {
        //         console.group(field.name);
        //         console.log( state.car[step2 + '_field_1'].values.counter[0].label + ': ' + selectedValue3[step2 + '__' + group + '__counter'] );
        //         console.groupEnd();
        //     }
        //     if ( keyExists( 'select' , state.car[step2+'_field_'+field.id].values ) ) {
        //         console.group(field.name);
        //         state.car[step2+'_field_'+field.id].values.select.map( (fieldSelect, keySelect) => {
        //             if (selectedValue3[step2 + '__' + group + '__select_' + keySelect + '__value'] ) {
        //                 console.log( fieldSelect.label + ': ' + selectedValue3[step2 + '__' + group + '__select_' + keySelect + '__value'].label );
        //             }
        //         });
        //         console.groupEnd();
        //     }
        //     if ( selectedValue3[step2 + '__' + group + '__checkbox__value'] !== undefined ) {
        //         if ( selectedValue3[step2 + '__' + group + '__checkbox__value'] ) {
        //             console.log( state.car[step2 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'нужен' );
        //         } else {
        //             console.log( state.car[step2 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'не нужен' );
        //         }
        //     }
        // });
        // console.groupEnd();
        //
        // console.group('STEP 3');
        // state.car[step3].map( (field, keyGroup) => {
        //     const group = 'group_' + keyGroup;
        //     if ( selectedValue3[step3 + '__' + group + '__radios__name'] !== undefined ) {
        //         console.log( field.name + ': ' + selectedValue3[step3 + '__' + group + '__radios__name'] );
        //     }
        //     if ( selectedValue3[step3 + '__' + group + '__counter'] !== undefined ) {
        //         console.group(field.name);
        //         console.log( state.car[step3 + '_field_1'].values.counter[0].label + ': ' + selectedValue3[step3 + '__' + group + '__counter'] );
        //         console.groupEnd();
        //     }
        //     if ( keyExists( 'select' , state.car[step3+'_field_'+field.id].values ) ) {
        //         console.group(field.name);
        //         state.car[step3+'_field_'+field.id].values.select.map( (fieldSelect, keySelect) => {
        //             if (selectedValue3[step3 + '__' + group + '__select_' + keySelect + '__value'] ) {
        //                 console.log( fieldSelect.label + ': ' + selectedValue3[step3 + '__' + group + '__select_' + keySelect + '__value'].label );
        //             }
        //         });
        //         console.groupEnd();
        //     }
        //     if ( selectedValue3[step3 + '__' + group + '__checkbox__value'] !== undefined ) {
        //         if ( selectedValue3[step3 + '__' + group + '__checkbox__value'] ) {
        //             console.log( state.car[step3 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'нужен' );
        //         } else {
        //             console.log( state.car[step3 + '_field_' + field.id].values.checkbox[0].name + ': ' + 'не нужен' );
        //         }
        //     }
        // });
        // console.groupEnd();

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
