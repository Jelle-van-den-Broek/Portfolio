<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $to = "jellevandenbroek@casema.nl";
  $subject = "New Contact Form Submission";
  $message = "Name: $name";
  mail($to, $subject, $message);
}
