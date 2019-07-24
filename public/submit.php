<?php

error_reporting(E_ERROR);

$mailTo = '24mishka91@gmail.com';

$arResult = array(
    "STATUS" => 0,
    "MSG" => "",
    "SUCCESSFULLY" => "",
    "FORM_TITLE" => "",
    "ERROR_FIELDS" => array(),
    "RELOAD" => 0,
);

if (empty($_POST['fio'])) {
	$arResult["ERROR_FIELDS"][] = 'fio';
}
if (empty($_POST['email'])) {
	$arResult["ERROR_FIELDS"][] = 'email';
}
if (empty($_POST['phone'])) {
	$arResult["ERROR_FIELDS"][] = 'phone';
}

if (empty($arResult["ERROR_FIELDS"])) {
	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "From: \r\n";
	$headers .= "Reply-To: ".$mailTo."\r\n";
	$theme = 'Конфигуратор';
	$letter = '<strong>Данные заказа</strong>'."<br/><br/>";
	$letter .= 'ФИО, Компания: <strong>'. $_POST['fio']."</strong><br/>";
    $letter .= 'Контактный телефон: <strong>'. $_POST['phone']."</strong><br/><br/>";
    $letter .= 'Примечание: <strong>'. $_POST['notice']."</strong><br/><br/>";
    $letter .= 'Данные: '. $_POST['mydata'];
	if(mail($mailTo, $theme, $letter, $headers)) {
		$arResult["STATUS"] = 1;
		$arResult["FORM_TITLE"] = 'Сообщение отправлено';
		$arResult["SUCCESSFULLY"] = 'Сообщение успешно отправлено.<br/> Наши менеджеры свяжутся с вами в ближайшее время';
	} else {
		$arResult["MSG"] = 'Ошибка отправки сообщения';
	}
} else {
	$arResult["MSG"] = 'Заполните обязательные поля формы';
}

exit(json_encode($arResult));
