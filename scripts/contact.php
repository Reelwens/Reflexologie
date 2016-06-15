<?php
$e = array();
$e['error'] = "Formulaire non valide";
if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
    $e['email_invalide'] = "email_invalide";
}else{
    $e['error'] = 'Ok';
    $nom = $_POST['nom'];
    $prénom = $_POST['surname'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
 
    $to = 'raphael.camizuli01@gmail.com';
    $sujet = ' Formulaire de contact  '.$email;
    $msg = $message;
    mail($to, $sujet, $msg);
 
}
 
echo json_encode($e);
?>