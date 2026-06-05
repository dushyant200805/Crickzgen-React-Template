<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];


    try {
        // EMAIL
            $mail->setFrom('templatemail@gmail.com', 'Contact Form');
            $mail->addAddress('templatemail@gmail.com');

        $mail->Subject = "Contact Form Submission from Horserid";
        $mail->Body = "Name: $fname $lname\nEmail: $email\nPhone: $phone\nMessage: $message";

        $mail->send();

        echo json_encode(["status" => "success"]);
    } catch (Exception $e) {
        echo json_encode([
            "status" => "failed",
            "error" => $mail->ErrorInfo
        ]);
    }
}

function emailsubsicriptionRequest($newsletterdata) {

    $email = trim($newsletterdata['n_email']);

    // Validate email
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "invalid_email"]);
        exit();
    }
    
    try {
        // EMAIL SETTINGS
        $mail->setFrom('templatemail@gmail.com', 'Newsletter');
        $mail->addAddress('templatemail@gmail.com');

        $mail->Subject = "New Newsletter Subscription";
        $mail->Body = "New subscriber email:\n\n$email";

        $mail->send();

        echo json_encode(["status" => "success"]);
    } catch (Exception $e) {
        echo json_encode([
            "status" => "failed",
            "error" => $mail->ErrorInfo
        ]);
    }
}

?>




