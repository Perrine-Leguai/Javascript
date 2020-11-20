
//  //récupère les balises <td> dans un tableau
//  var tabTd= document.getElementsByTagName('td');
//  /**définition de la variable input qui gère la 
//   * balise input qui pour remplacer le td */
//  var input=document.createElement('input');
//             input.type="text";
//             input.id="nvlSaisie";


//  for (var i=0; i<tabTd.length; i++){
//         clicked= tabTd[i];

//         clicked.addEventListener("click", function(e) {
//             e.stopPropagation();
//             var myClickedElement = e.target;
//             input.value= myClickedElement.textContent;   
            
//             myClickedElement.replaceWIth(input);

//             document.getElementById('nvlSaisie').addEventListener('focus', function (event){
//                 event.preventDefault();
//                 myClickedElement.replaceWith(myClickedElement.value);
//             })        
//         })
//     }

// onblur
// change
// focusout

//je vide le td
//** je crée un input et je mets un add event listener sur l'input
/* quitte
/*récupère la variable
/*met dans le td*/

var cells = document.getElementsByTagName('td');    

for (let i=0; i<cells.length; i++){
    const element = cells[i];
    element.addEventListener('click', function(e){
        
        const tdContent= element.innerHTML;
        element.innerHTML="";
        const input = document.createElement('input');
        input.type = "text";
        input.value= tdContent;
        e.target.appendChild(input);  // sans stopPropagation phase1 target=td, phase 2 target=input
        input.focus();

        //evite de vider la cellule lors du clic sur l'input
        input.addEventListener('click', function(event){
            event.stopPropagation;
        })

        //
        input.addEventListener('focusout', function(ee){
            const inputContent= ee.target.value;
            ee.target.parentNode.innerHTML=inputContent;   // ou parentElement

        })

    })

}

// const = constante donc element ne changera plus de valeur, est valable entre différents blocs
// let = déclaration de variable dispo uniquement dans le bloc où elle a été déclarée