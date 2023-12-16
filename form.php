<?php
$host = "localhost";          //hostname
$user = "root";              //login
$password = "" ;              //password
$bdd = "wasselnidb";          //databasename
$sql = "select * from user;";  //query

//connexion to the server
$conn =  mysqli_connect($host, $user, $password);
if($conn == FALSE){
    die("The connection has failed");
}

//Declaration of database name
$connectBase = mysqli_select_db("wasselnidb", $maconnexion);
if($connectBase == FALSE) {   //if the database is inaccessible
    die("database is inaccessible"); //stop the script
}

//sent to the server the name of the query 
$result = mysqli_query($sql);
if($result == FALSE){      //if the query is incorrect
    die("query is incorrect: $sql");  //stop the script
}

//loop through the returned records
while ($ligne = mysqli_fetch_array($result) == True) {
    //display two fields "company name 'wasselni' and "Regiratationuser"
    echo ("<h3>". $ligne["wasselni"]. "--" . 
        $ligne[" "]. "</h3>");
}

//release the memory taken by the recordsets
mysqli_free_result($result);

//release of the connection to MYSQL server
mysqli_close($maconnexion);

?>