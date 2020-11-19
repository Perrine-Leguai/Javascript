
// EXERCICES N°1 - PAGE 9 DU COURS !
var v1 = prompt('Saisissez un chiffre');
var v2 = prompt('Saisissez en un deuxième');

// exo 1 :
function absolu(a){
    if(a < 0 ){
        b= -a;
    }
    else {
        b = a;
    }

    return b;
}
b=absolu(v1);
console.log("la valeur absolue de " + v1 + " est " + b);
c=absolu(v2);
console.log("la valeur absolue de " + v2 + " est " + c);

// exo2
function compare(a,b){
    if (a<b){
        console.log (b + ' est plus grand que ' + a);
    }
    else if(b<a) {
        console.log (a + " est plus grand que " + b);
    } else {
        console.log (a + " et " + b + " sont égaux ");
    }
}

compare(v1, v2);

//exo 3
function paire(a){
    
    if (a==0){
        console.log (a + " est nul ");
    } else if (a%2==0){
        console.log(a+ " est pair ");
    } else {
        console.log(a+" est impair ");
    }
}
paire(v1);
paire(v2);

//exo 4  
function factorielle(a){
    var c=absolu(a);
    
    if (c==0){
        return 1
    } else {
        return b= c* factorielle(c-1);
    }
    
}
var f=factorielle(v1);
console.log("la factorielle de " + v1 + " est " + f);
var g=factorielle(v2);
console.log("la factorielle de " + v2 + " est " + g);

// exo 5
function tableMultiplier(a){
    for (i=1; i<=10; i++){
        console.log(a + "x" + i + "=" + a*i);
}
}
tableMultiplier(v1);
tableMultiplier(v2);
