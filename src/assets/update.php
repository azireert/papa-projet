<?php
try {
    $db = new PDO('mysql:host=localhost;dbname=db_andre', 'root', '');
}
catch(Exception $e)
{
    // En cas d'erreur, on affiche un message et on arrête tout
    die('Erreur : '.$e->getMessage());
}

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);



    $response_array = array();


    $stmt = $db->prepare("UPDATE user SET name=:name, username=:username, age=:age, height=:height, weight=:weight");
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':age', $age);
    $stmt->bindParam(':height', $height);
    $stmt->bindParam(':weight', $weight);

    // insertion d'une ligne
    $name = $request->name;
    $username = $request->username;
    $age = $request->age;
    $height = $request->height;
    $weight = $request->weight;
    $stmt->execute();

    $response_array['msg'] = "success";

    echo json_encode($response_array);

?>