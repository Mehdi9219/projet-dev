/*document.addEventListener('DOMContentLoaded', () => {
    let el = document.querySelector('li');
    let el2 = document.querySelector('li+li');
    let el3 = document.querySelector('li+li+li');
    let el4 = document.querySelector('li+li+li+li');

    el.addEventListener("click", () => {
        el.classList.add("active");
        el2.classList.remove("active");
        el3.classList.remove("active");
        el4.classList.remove("active");
    });

    el2.addEventListener("click", () => {
        el2.classList.add("active");
        el.classList.remove("active");
        el3.classList.remove("active");
        el4.classList.remove("active");
    });
    el3.addEventListener("click", () => {
        el3.classList.add("active");
        el.classList.remove("active");
        el2.classList.remove("active");
        el4.classList.remove("active");
    });
    el4.addEventListener("click", () => {
        el4.classList.add("active");
        el.classList.remove("active");
        el2.classList.remove("active");
        el3.classList.remove("active");
    });
});
*/
document.addEventListener("DOMContentLoaded",() => {
    
    const navElements  = document.querySelectorAll("li");
    
    for(let i = 0; i < navElements.length; i++) {
        navElements[i].addEventListener("click", ()  => {
            for(let n = 0; n< navElements.length; n++) {
                navElements[n].classList.remove("active");
            }
            navElements[i].classList.add("active");
        });
    }

    /*verifier le formulaire*/

    
    let btn = document.getElementsByTagName('input')[1]
    
    
   

    /*creer object générique*/
    
    
    
    
   

    /*creer object générique*/

    let user ={
        mail : document.getElementsByTagName('input')[0],
        expr : /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/,
        warning : document.querySelector('section:nth-of-type(4) p'),
        
        	
            verif(){
            !this.mail.value ? this.warning.innerText="Mail obligatoire":this.warning.innerText=`
            Votre mail est ${mail.value}` /*condition ternaire*/
            
            if(this.expr.test(this.mail.value)){
                this.warning.innerText=" Vous êtes logué"
                this.warning.className="success";
            }
            else
            {
                this.warning.innerText="Mail invalide"
                this.warning.className="warning";
            }

            
        
        
        localStorage.setItem("login",this.mail.value);/* Object method */
        document.location.href="https://www.google.com";
    }
	

            
}
    
    btn.addEventListener("click",(event)=>{
        event.preventDefault();
		user.verif();
        
      })

 


 
});