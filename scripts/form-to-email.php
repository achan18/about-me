<?php
if(!isset($_POST['Submit'])) {
  echo "error; you need to submit the form!";
  exit;
}

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if (empty($name) || empty($visitor_email)) {
  echo "Name and email are mandatory";
  exit;
}

$email_from = "austin.chan.forms@gmail.com";
$email_subject = "New Form Submission";
$email_body = "You have received a new message from: $name. \n" . 
              "email address: $visitor_email\n" .
              "subject: $subject\n" . 
              "message:\n $message";
$to = "austin.chan.forms@gmail.com";
$headers = "From: $email_from \r\n";

mail($to, $email_subject, $email_body, $headers);
header("Location: ../thank-you.html");
?>