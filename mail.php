<?php
if (count($_POST) > 0) {
    $msg = '';
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    if ($name == '' || $email == '' || $message == '') {
        $msg = 'Заполните все поля';
        header('Location: index.html');
    } else {
        $name = sprintf("Имя: %s", $name);
        $email = sprintf("Почта: %s", $email);
        $message = sprintf("Сообщение: %s", $message);
        // Сообщение
        $text = "$name\r\n$email\r\n$message";
        // На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
        $send = wordwrap($text, 70, "\r\n");
        // Отправляем
        $status = mail('maxandrus15632@gmail.com', 'BlogDev', $send);
        if ($status) {
            $msg = 'Сообщение успешно отправлено';
            header('Location: index.html');
        } else {
            $msg = 'Сообщение не было отправлено';
            header('Location: index.html');
        }
    }
}
