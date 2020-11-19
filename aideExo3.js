//MAX
var tdList = document.querySelectorAll('td');
var input = document.createElement('input'); input.id = 'modifTable';

for (i = 0; i < tdList.length; i++) {
    tdList[i].addEventListener('click', function(e){
        var test = e.target;
        var tdContent = test.innerText;
        test.replaceWith(input);
        document.getElementById("modifTable").value = tdContent;

        document.getElementById("modifTable").addEventListener('focusout', function(e){
            e.preventDefault();
            this.replaceWith(this.value);
        });
    });
}

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
            input.onkeydown="uniKeyCode(event)";
           
        myClickedElement.appendChild(input);
        p.textContent= '';
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