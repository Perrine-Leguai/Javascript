function creerTab(nbLignes, nbColonnes){
    const table= $("<table border='1'>");
    for (let i =0; i<nbLignes; i++){
        $("table").prepend("<tr></tr>");
        for(let j=0; j<nbColonnes; j++){
            $('tr').append('<td></td>');
            $('tr').append('<br/>');
            $('td').text((i+1) +" - " + (j+1));
        }   
    }
}

creerTab(1,3);

//creer les inputs avec récup de données