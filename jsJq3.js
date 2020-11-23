function changeContenu(iLigne, iColonne, newText){
    // const tabLigne = $("tr").eq(row-1);
    // let tabColonne = $(".td*");
    // const ligne=iLigne-1;
    // const colonne= iColonne-1+ligne*2;
    // $("td").eq(colonne).html(newText);
    
    // solution avec JS Vanilla :
     //attention $('td')[colonne]  par exemple, 
     //ça renvoie bien à la bonne case mais on ne peut utiliser .html avec . il faut passer par innerHTML = newText

    const tabLigne = $("tr").eq(iLigne-1);
    tabLigne.children().eq(iColonne-1).html(newText); //chaining , eq: fixe directement à la valeur demandée donc on ne passe pas par les tableaux.
}

$('#modifBtn').on("click",function(e){
   
    changeContenu($("#ligne").val(), $("#colonne").val(), $("#texte").val());

   
})   