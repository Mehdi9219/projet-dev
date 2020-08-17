<?php
    if($_POST['userName']=='admin') && ($_POST['userPass']=='root')){
        print true; //connexion in
    }
    else{
        print false; //connexion out
    }
?>