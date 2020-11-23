$("#btn").on("submit", function(e){
    e.preventDefault();
    const pseudo= $("pseudo").val();
    const pwd = $("password").val();
    if (pseudo && pwd){
        $("<div>").attr({class:"alert alert-success", role : "alert"}).html("BRAVO !").prepend($("form").empty());
        //AJAX
        //$.post('test.php', {pseudo: pseudo, pwd : password});
        //dans un fichier php à part : echo $_POST["pseudo"] . " " . $_POST["password"];
    }else{
        $("<div>").attr({class:"alert alert-danger", role : "alert"}).html("Raté").prepend($("form").empty());
    }

});