$(document).ready(()=>{
    console.log("ok")
    ///let  login = $("input").eq(0)
                    
    $('form').submit((event)=>{
        event.preventDefault();
        //event
        $.ajax({
            //header de la requête
            url : 'connexion.php',
            type : 'POST',
            data : $('form').serialize(),

            //tester la requete

            success: function(data){
                if(data==1){
                    console.log('utilisateur connecté')
                    //code dom
                    $('.target').html("<p>Utilisateur connecté</p>").fadeIn(400)

                }
                else{
                    console.log('utilisateur inconnu')
                    $('.target').html("<p>Utilisateur déconnecté</p>").fadeIn(400)
                }
            
            
            },
            error: function(err){
                console.log(err)
                $('.target').html("<p>Erreur : "+err+"</p>").fadeIn(400)
            }





        })
