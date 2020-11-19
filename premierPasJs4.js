
 //récupère les balises <td> dans un tableau
 var tabTd= document.getElementsByTagName('td');
 /**définition de la variable input qui gère la 
  * balise input qui pour remplacer le td */
 var input=document.createElement('input');
            input.type="text";
            input.id="nvlSaisie";


 for (var i=0; i<tabTd.length; i++){
        clicked= tabTd[i];

        clicked.addEventListener("click", function(e) {
            e.stopPropagation();
            var myClickedElement = e.target;
            input.value= myClickedElement.textContent;   
            
            myClickedElement.replaceWIth(input);

            document.getElementById('nvlSaisie').addEventListener('focus', function (event){
                event.preventDefault();
                myClickedElement.replaceWith(myClickedElement.value);
            })        
        })
    }
