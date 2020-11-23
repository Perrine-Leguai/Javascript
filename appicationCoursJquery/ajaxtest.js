// 1 faire test pour faire apparaitre hello world, ajax appelle un fchier
$.ajax(
    'helloWorld.php',
    {
        success: function (response){
            if(response.indexOf("Erreur") >= 0){
                document.body.appendChild(document.createTextNode(response));
            } else {
                const h1 = document.createElement("h1");
                h1.textContent = response;
                document.body.appendChild(h1);
            }    
        },
        error : function(erreur){
            erreur = "erreur";
        }
    })
    