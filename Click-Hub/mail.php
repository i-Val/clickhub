<?php

$to = "valentine4d@gmail.com";
$subject = $_POST["name"];
$message = $_POST["message"];


mail($to,$subject,$message);

?>