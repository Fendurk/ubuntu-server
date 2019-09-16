<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        require 'PHPMailer/PHPMailerAutoload.php';

        $mail = new PHPMailer;

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'jakohm02@edu.umea.se';         // Ändra till din google-mail
        $mail->Password = 'Fendurk.01';                   // Ändra till ditt mail-lösenord
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $fname = $_POST['name'];
        $mailFrom = $_POST['mail'];
        $mail->setFrom($mailFrom, $fname);
        $mail->addReplyTo($mailFrom);
        $mail->addAddress('jakohm02@edu.umea.se');        // Ändra till din google-mail

        $mail->isHTML(true);

        $mail->Subject = $_POST['subject'];
        $mail->Body    = $_POST['msg'];

        if(!$mail->send()) {
            echo 'Meddelandet kunde inte skickas.';
            echo 'Mail error: ' . $mail->ErrorInfo;
        } else {
            header('Location: thanks.html');
            exit();
        }
    }
?>

