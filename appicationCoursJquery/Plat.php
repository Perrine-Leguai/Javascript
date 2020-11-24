<?php

class Plat {

    public $gout;
    public $nom;

    /**
     * Get the value of nom
     */ 
    public function getNom() :string
    {
        return $this->nom;
    }

    /**
     * Set the value of nom
     *
     * @return  self
     */ 
    public function setNom(string $nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get the value of gout
     */ 
    public function getGout() :string
    {
        return $this->gout;
    }

    /**
     * Set the value of gout
     *
     * @return  self
     */ 
    public function setGout(string $gout)
    {
        $this->gout = $gout;

        return $this;
    }
}

?>