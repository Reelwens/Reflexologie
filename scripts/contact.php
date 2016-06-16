<?php
$e = array();
$e['error'] = "Formulaire non valide";
if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
    $e['email_invalide'] = "email_invalide";
}else{
    $e['error'] = 'Ok';
    
    $nom = $_POST['nom'];  
    $errors = array(); /
if(!array_key_exists('nom', $_POST) || $_POST['nom'] == '') {
  $errors ['nom'] = "vous n'avez pas renseigné votre nom";
  }
    
    $prénom = $_POST['surname'];
      $errors = array();
if(!array_key_exists('surname', $_POST) || $_POST['surname'] == '') {
  $errors ['surname'] = "vous n'avez pas renseigné votre surname";
  }
    
    $phone = $_POST['phone'];
      $errors = array(); 
if(!array_key_exists('phone', $_POST) || $_POST['phone'] == '') {
  $errors ['phone'] = "vous n'avez pas renseigné votre phone";
  }
    
    
    $email = $_POST['email'];
      $errors = array(); 
if(!array_key_exists('email', $_POST) || $_POST['email'] == '') {
  $errors ['email'] = "vous n'avez pas renseigné votre email";
  }
    
    $message = $_POST['message'];
      $errors = array(); 
if(!array_key_exists('message', $_POST) || $_POST['message'] == '') {
  $errors ['message'] = "vous n'avez pas renseigné votre message";
  }
    
 
    $to = 'raphael.camizuli01@gmail.com';
    $sujet = ' Formulaire de contact  '.$email;
    $msg = $message;
    mail($to, $sujet, $msg);
 
}
 
echo json_encode($e);
?>