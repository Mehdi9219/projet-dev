$(document).ready(()=>{ 
    console.log("ok")
    $.getJSON("data.json", function(data){

for(let i = 0; i < data.film.length; i++){
    //console.log(${data.film.[i].titre} ${data.film[i].genre} ${data.film.[i].durée} ${data.film.[i].réalisateur} ${date.film[i].date})
$("ul").append(`<li>${data.film[i].titre}</li>
              <li>Genre: ${data.film[i].genre}</li>
              <li>Durée: ${data.film[i].durée}</li>
              <li>Réalisateur: ${data.film[i].réalisateur}</li>
              <li>Date: ${data.film[i].date}</li>  
              `)

        }
    })
})
