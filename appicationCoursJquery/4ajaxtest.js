

// 1 faire test pour faire apparaitre hello world, ajax appelle un fchier
$.ajax(
    'instanciation.php',
    {
        success: function (tabPlat){
            // if(tabPlat.indexOf("Erreur") >= 0){
            //     document.body.appendChild(document.createTextNode(tabPlat));
            
                
                if($("#gout option:selected").val()== "sel"){
                    
                    
                }
                // const h1 = document.createElement("h1");
                // h1.textContent = response;
                // document.body.appendChild(h1);
            }    
        },
        error : function(erreur){
            erreur = "erreur";
        }
    })
    