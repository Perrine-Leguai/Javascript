<?php
include_once('class.php');

$raclette = new Plat();
$raclette->setGout("salé")->setNom("raclette");

$omelette = new Plat();
$omelette->setGout("salé")->setNom("omelette");

$saladeCesar = new Plat();
$saladeCesar->setGout("salé")->setNom("salade césar");

$crepe = new Plat();
$crepe->setGout("sucré")->setNom("crepe");

$fruit = new Plat();
$fruit->setGout("sucré")->setNom("fruit");

$glace = new Plat();
$glace->setGout("sucré")->setNom("glace");

$tabPlat=[$raclette, $omelette, $saladeCesar, $crepe, $fruit, $glace];

for ($i=0;$i<count($tabPlat);$i++){
    $a=get_object_vars($tabPlat[$i]);
    if($a['gout']=='salé'){
        echo $a['nom'];
    }
    
}

?>