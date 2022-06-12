<?php
    $destinatario = $_POST["email"];
    //correo destino
    $nombre = $_POST['nombre'];
    $asunto = 'RESERVA CONFIRMADA CON ÉXTITO';
    $mensaje = $_POST['reservaconfir'];
    $mensaje2 = 'Recibira un segundo correo para realizar el check-in de los vuelos correspondientes. Muchas gracias por confiar en MyLittleForay,
    trabajamos para ofrecer las mejores experiencias';

    $header = "Correo enviado desde MyLittleForay";
    $mensajeCompleto = "Hola ". $nombre . "\n" . "Le confirmamos su reserva P74582169." mensaje2 . "\n" . $mensaje . "\bAtentamente MyLittleForay";

    mail($destinatario, $asunto, $mensajeCompleto, $header);

    echo "<script> alert('Correo enviado con éxito') </script>";

    echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
?>