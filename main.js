
function login(){
    const email = document.getElementById('mail');
    

    if(email.value === ""){
      email.classList.add('active')
    }

    else{
      location.href='html.html'
    }

    
}