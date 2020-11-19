//exo 1 __ créer un bouton pour tout cocher automatiquement
var btnC= document.getElementById("ttCocher");


btnC.addEventListener("click", ()=> {
    var checks= document.getElementsByTagName("input");
    
    if (btnC.innerHTML=="Tout cocher"){
        for(var i=0; i<checks.length; i++){
            if (checks[i].type=='checkbox'){
                    checks[i].checked=true;   
                }
            }
            btnC.innerHTML= "Tout décocher";
            
    }
    else {
        for(var i=0; i<checks.length; i++){
            if (checks[i].type=='checkbox'){
                    checks[i].checked=false;
                }
        }
        btnC.innerHTML= "Tout cocher";
    }
})

//exo2 créer un bouton qui supprimera les sauts de ligne
var btnD= document.getElementById("stopBr");

//les actions au click
// btnD.addEventListener("click", ()=> {
//     var brs= document.getElementsByTagName("br");
//     //regex pour voir si supprimer apparait dans la chaine de caractere btnD.innerHTML
//     var rgx= /Supprimer/;
//     var testRgx = rgx.test(btnD.innerHTML);

//     if(testRgx){
//         for (var i=0; i<brs.length; i++){
//             brs[i].style.display='none';
//         }
//         btnD.innerHTML ="Faire apparaitre les sauts de ligne";
//     }
//     else {
//         for (var i=0; i<brs.length; i++){
//             brs[i].style.display='block';
//         }
//         btnD.innerHTML ="Supprimer les sauts de ligne";
//     }
// })

// var div = document.getElementById("divId");
var br = document.getElementsByClassName("br");
 
btnD.addEventListener('click', function (e){
    for (var i = 0; i< br.length;i++) {
        while (br){
            br[i].remove();
        }
    }
        }
)

 