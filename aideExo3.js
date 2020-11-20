//MAX
let tdList = document.querySelectorAll('td');
let input = document.createElement('input'); input.id = 'modifTable';

window.addEventListener('load', function() {
    for (i = 0; i < tdList.length; i++) {
        tdList[i].addEventListener('click', function change(e){
            var test = e.target;
            var tdContent = test.innerText;
            this.replaceWith(input);
            document.getElementById("modifTable").value = tdContent;

            document.getElementById("modifTable").addEventListener('focusout', function(e){
                e.preventDefault();
                var td = document.createElement('td');
                this.replaceWith(td);
                td.innerText = this.value;
                td.addEventListener('click', change);
            });
        });
    }
});

//SAMIR

var table = document.getElementById("table");
var tds = document.getElementsByTagName("td");

for(var i = 0; i < tds.length; i++){
    var td = tds[i];
    td.addEventListener('click', function (e){

        this.setAttribute('data-clicked','yes');
        this.setAttribute('data-text',this.innerHTML);

        var input = document.createElement("input");
            input.type = "text";
            input.value = this.innerHTML;         // garder la valeur de la cellule dans l'input



        input.onblur = function() {               // onblur éxécute le code quand la personne sors d'un input
            var td = input.parentElement;
            var originalText = input.parentElement.getAttribute("data-text");
            var currentText = this.value;

            if(originalText != currentText) {
                td.removeAttribute('data-clicked');
                td.removeAttribute('data-text');
                td.innerHTML = currentText;
            }
        }


        this.innerHTML = "";                      // clear la td quand on clique

        var myClickedElement = e.target;
        myClickedElement.appendChild(input);
        this.firstElementChild.select();          // select la valeur par défaut du input l'élément sélectonné
    })
}



//MOI

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
                  
            p=myClickedElement.firstChild;
            console.log(p);

        
            input.value= myClickedElement.textContent;
            
            p.textContent= '';   
            myClickedElement.appendChild(input);
        
        })
   
        clicked.addEventListener("blur", ()=>{
            var saisie= document.getElementById('nvlSaisie').value;
            p.textContent= saisie;
            function uniKeyCode(event){
                var key = event.keyCode;
                return key;
            }
            })
 }

 // MYLENE
 var tds=document.getElementsByTagName("td"); // on récupère tous les td //
            for (var i=0; i<tds.length; i++) { // on les parcourt //
                var td = tds[i]; // on garde un td parmi tous les autres //
                td.addEventListener('click', function (event){ // on crée un événement sur le td cliqué //
                    var input = document.createElement("input");  // on crée un input //
                    input.type="text"; // attributions //
                    input.value = event.target.innerHTML;
                    var myClickedElement = event.target; // on fait bien l'événement sur ce td //
                    myClickedElement.appendChild(input); // on place bien le input sur ce td //
                        input.addEventListener('change', () => {
                            event.target.innerHTML=input.value;
                        })
                })
            }