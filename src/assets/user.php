<?php
try {
    $db = new PDO('mysql:host=localhost;dbname=db_andre', 'root', '');
}
catch(Exception $e)
{
    // En cas d'erreur, on affiche un message et on arrête tout
    die('Erreur : '.$e->getMessage());
}

$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

$answ = $db->query('SELECT name , username , height , weight , age FROM user');


$i = 0;
while ($data = $answ->fetch()){
    $user_array[$i] = $data;
    $i++;
}
echo json_encode($user_array);


?>