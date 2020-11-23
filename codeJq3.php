<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change the content of a cell</title> 
		<style type="text/css"> 
			body {margin: 30px;} 
		</style>  
	</head>
	<body> 
		<table id="myTable" border="1"> 
			<tr>
				<td>Row1 cell1</td> 
				<td>Row1 cell2</td>
			</tr> 
			<tr>
				<td>Row2 cell1</td> 
				<td>Row2 cell2</td>
			</tr> 
			<tr>
				<td>Row3 cell1</td> 
				<td>Row3 cell2</td>
			</tr> 
        </table>
        <form action="codeJq3.php?action=envoi" method="post">
            <label for="ligne">Numéro de ligne</label>
            <input id="ligne" type="text" placeholder="1" value="<?php if (isset($_GET) && !empty($_GET) && $_GET['action']=='envoi'){echo $_POST['ligne'];} ?>" name="ligne"><br>
            <label for="colonne">Numéro de colonne</label>
            <input id="colonne" type="text" placeholder="2" name="colonne"><br>
            <label for="texte">Texte à ajouter</label>
            <input id="texte" type="text" placeholder="Bonjour" name="texte"><br>
            <input id="soumettre" type="submit">
             
        </form>
	</body>
<script src="jquery-3.5.1.min.js" ></script>
<script src="JsJQ3.js" ></script>
</html>