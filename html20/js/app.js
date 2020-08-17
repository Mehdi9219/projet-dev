document.addEventListener("DOMContentLoaded",()=>{
    
    let el,style,x; //init variables
    
    style = document.querySelectorAll("link")[1];
    el = document.querySelector('h1');
    x = false //variable globale
    //event
        el.addEventListener("click",()=>{
                
                if(!x){
                    x=true //on
                    
                style.setAttribute("href","./css/style.css")
                    console.log(x)
                }
                else{
                    x=false; //off
                   
                    style.setAttribute("href","./css/slide_h.css")
                    console.log(x)
                }
                
                // !x ? x=true :  x=false;
            
            
            })
        
   
})