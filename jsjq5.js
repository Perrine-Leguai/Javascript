console.log($('#colorSelect').children().length);    //children car les options sont des enfants de select
console.log($("#colorSelect option").length);

$("#remove-btn").on("click", function (e){          // on peut faire on "submit", sur totu type de boutton ou lien*
/** désactivatoin du comportement par défaut du formulaire 
 * pour que la page ne soit pas rechargée */
    e.preventDefault();
    $('#colorSelect').children().remove;
    $(":selected").remove; //permet de ne supprimer que celui sélectionné
    location.href="test.php";
    /** stopper le rechargement de page et actionner manuellement le chemin,
    *peut être bien pour vérifier que les étapes entre deux sont bonnes. */

})

