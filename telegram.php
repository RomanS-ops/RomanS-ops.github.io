<?php

/* https://api.telegram.org/bot1630986413:AAHLxlV0FT8iIoSpqMf3rW-MwYunSKdJ2E8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$surname = $_POST['user_surname'];
$patronymic = $_POST['user_patronymic'];
$locality = $_POST['user_locality'];
$post_office = $_POST['user_post_office'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$details  = $_POST['user_details'];
$bname  = $_POST['book_name'];
$autor  = $_POST['book_autor'];
$amount  = $_POST['book_amount'];
$price  = $_POST['book_price'];
$token = "1630986413:AAHLxlV0FT8iIoSpqMf3rW-MwYunSKdJ2E8";
$chat_id = "-573603428";
$arr = array(
  'Имя пользователя: ' => $name,
  'Фамилия пользователя:' => $surname,
  'Отчество пользователя:' => $patronymic,
  'Населенный пункт:' => $locality,
  'Номер отделения Новой Почты:' => $post_office,
  'Телефон: ' => $phone,
  'Email:' => $email,
  'Примечание к заказу:' => $details,
  'Название книги:' => $bname,
  'Автор:' => $autor,
  'Количество книг:' => $amount,
  'Цена:' => $price
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
  
} else {
  echo "Error";
}
?>