document.addEventListener('DOMContentLoaded',() =>{
    console.log("ok")
    let login = localStorage.getItem("login")/*localStorage app*/
    console.log(login)
    
    let tab = [login,true];
    let tab2 = ["index",...tab]/*contaténation de deux tableau en ES6*/
    console.table(tab2)

})    
   