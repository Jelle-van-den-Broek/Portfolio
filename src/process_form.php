<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];

    // Send the email
    $to = "your@email.com";
    $subject = "New Form Submission";
    $message = "Name: " . $name;
    $headers = "From: webmaster@example.com";

    if (mail($to, $subject, $message, $headers)) {
header("Content-Type: application/json");
echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false));
    }
} else {
    echo json_encode(array("success" => false));
}
?>
