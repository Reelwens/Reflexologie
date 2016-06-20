<?php
$error = [];
if (!isset($_POST['email']) || empty($_POST['email'])) {
	$error['email'] = 'The email is required';
} else {
	// Check if email is valid and not empty
	if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === FALSE) {
		$error['email'] = 'email invalid';
	}
}
// Check if name isn't empty
if (empty($_POST['name'])) {
	$error['name'] = 'The name is required';
}
// Check if surname isn't empty
if (empty($_POST['surname'])) {
	$error['surname'] = 'The surname is required';
}
// Check if surname isn't empty
if (empty($_POST['phone'])) {
	$error['phone'] = 'The phone is required';
}
// Check if surname isn't empty
if (empty($_POST['message'])) {
	$error['message'] = 'The message is required';
}
if (empty($error)) {
	// Email Informations
	$to = 'contact@lydiavillotpetriacq.fr';
	$sujet = 'Formulaire de contact <' . $_POST['email'] .'>';
	$msg = $_POST['message'];
	mail($to, $sujet, $msg);
	header('location: ../');
}
echo json_encode($error);