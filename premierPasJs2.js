//EXERCICES N°2 - PAGE 19 DU COURS !
//ajouter les boutons pour afficher les exercices
var btn1= document.getElementById("btn1");
var btn2= document.getElementById("btn2");


btn1.addEventListener("click", ()=> {
    if (getComputedStyle(div1).display !="none"){
        div1.style.display = "none";
        div1.class="pasMasque";
    } else {
        div1.style.display="block";
    }
    if (btn1.value=="afficher") {
        btn1.value="masquer";
        btn1.innerHTML="MASQUER";
    }else { btn1.value="afficher";
            btn1.innerHTML="AFFICHER";
};
})

function btn(){
    if(getComputedStyle(div2).display != "none"){
      div2.style.display = "none";
    } else {
      div2.style.display = "block";
    }
    if (btn2.value=="afficher") {
        btn2.value="masquer";
        btn2.innerHTML="MASQUER";
    }else { btn2.value="afficher";
            btn2.innerHTML="AFFICHER";
  };
}
  btn2.onclick = btn;

// function changeNomButton(a){
//     if (btnA.value=="afficher") btnA.value="masquer";
//     else btnA.value="afficher";
// }
//exo 1 :

/** creation de la div */
var div1= document.createElement('div');
div1.id="divTP1";
div1.class="masque";
if (div1.class=="masque"){
    div1.style.display="none";
}
//création des fonctions insertion du texte
function contenu(a,b){
    var cont= document.createTextNode(a);
    b.appendChild(cont);
}

//fonction pour la création de balises <strong>
function strong(b){
    var strong=document.createElement("strong");
        b.appendChild(strong);
        return strong
}

//fonction pour la création de balises <a>
function createA(href, c, d, parent){
    a= document.createElement("a");
    a.href= href;
    a.title= c;
    a.textContent= d;
    parent.appendChild(a);

} 

/** insertion des a dans la div */

contenu("le ", div1);
strong1=strong(div1);
contenu(" WWW Consortium ", strong1);
contenu(", abrégé par le sigle", div1);
strong2=strong(div1);
contenu(" W3C ", strong2);
contenu(", est un ", div1);
createA("https://fr.wikipedia.org/wiki/Organisme_de_normalisation", "organisme de normalisation", "organisme de normalisation", div1 );
contenu(" à but non-lucratif chargé de promouvoir la compatbilitié des technologies du ", div1);
createA("https://fr.wikipedia.org/wiki/World_Wide_Web", "World Wild Web", "World Wild Web", div1);
contenu(" . ", div1);

document.body.appendChild(div1);




//exo2 
body=document.getElementsByTagName('body');

// function creationElement(tagName, arguTab, attributsTab, parent){
//     elt = document.createElement(tagName);
//     //exploitation des attributs
//     for (i=0; i< arguTab.length; i++){
//         arguTab[i]=attributsTab[i];
//     }

//     parent.appendChild(elt);

// }

//fonction pour la création de balises div
function createDiv(a,b, c){
    div=document.createElement("div");
    div.id=a;
    div.style=b
    c.appendChild(div);
    return div;
}

//fonction pour la création de balises form
function createForm(a,b,c,d){
    var form1 = document.createElement('form');
        form1.enctype=a 
        form1.method=b 
        form1.action=c 
        d.appendChild(form1);
        return form1
}

//fonction pour la création de balises fieldset
function createFieldset(a){
    var fs1= document.createElement("fieldset");
        a.appendChild(fs1);
        return fs1;
}

//fonction pour la création de balises legend
function createLegend(a,b){
    var lgd = document.createElement("legend");
        lgd.textContent=a;
        b.appendChild(lgd);
}

//fonction pour la création de balises label
function createLabel(a,b,c){
var label =document.createElement("label");
    label.for=a;
    label.textContent=b
    c.appendChild(label);
}

//fonction pour la création de balises input
function createInput(a, b, c, d, e){
    input=document.createElement("input");
    input.type=a;
    input.name=b;
    input.id=c
    input.value=d

    e.appendChild(input);
}

/**fonction pour la création de balises saut de ligne
 * exemple de clone : var break2 = breaks.cloneNode(false);*/
function createBreaks(a){
    br= document.createElement("br");
    a.appendChild(br);
}

div2=createDiv("divTP2", "", body[0]);
div2.class="masque";
if (div2.class=="masque"){
    div2.style.display="none";
}
form1=createForm("multipart/form-data","post", "upload.php",div2);
fs1=createFieldset(form1);

createLegend("Uploader une image ",fs1);
div3=createDiv("","text-align: center", fs1 );

createLabel("inputUpload","Image à uploader ", div3)
createInput("file", "inputUpload", "inputUpload", "", div3);
createBreaks(div3);
createBreaks(div3);
createInput("submit", "", "", "envoyer", div3);



