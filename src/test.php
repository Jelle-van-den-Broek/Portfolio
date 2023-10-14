<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $to = "your-email@example.com";
  $subject = "New Contact Form Submission";
  $message = "Name: $name";
  mail($to, $subject, $message);
}
