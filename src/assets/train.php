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

    if($request->isVelo == "true"){
        $isVelo = 1;
    }else {
        $isVelo = 0;
    }

    $dateSortie = date('Y-m-d', strtotime($request->dateSortie));


    $stmt = $db->prepare("INSERT INTO sortie_velo (kilometre, isVelo, dateSortie , duree, forme) VALUES (:kilometre, :is_velo,:date_sortie , :duree, :forme)");
    $stmt->bindParam(':kilometre', $kilometre);
    $stmt->bindParam(':is_velo', $is_velo);
    $stmt->bindParam(':date_sortie', $date_sortie);
    $stmt->bindParam(':duree', $duree);
    $stmt->bindParam(':forme', $forme);

    // insertion d'une ligne
    $kilometre = $request->kilometre;
    $is_velo = $isVelo;
    $date_sortie = $dateSortie;
    $duree = $request->duree;
    $forme = $request->forme;
    $stmt->execute();

    $response_array['msg'] = "success";

    echo json_encode($response_array);

?>