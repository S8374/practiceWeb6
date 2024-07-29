document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('.snip1226');
  
    hamburgerMenu.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  });
  

  //
  const signUp = document.querySelector('.sigs')
  const form__ui = document.querySelector('.sig') ;
  console.log(form__ui) ; 
     signUp.addEventListener('click',function(){
    form__ui.classList.toggle('active')
     if(form__ui.classList.contains('active')){
        document.querySelector('.x').addEventListener('click',function(){
              form__ui.classList.remove('active');
        })
     }
  }) 
  //
  const login = document.querySelector('.logs') ;
  const logU = document.querySelector('.log') ;

     login.addEventListener('click',function(){
              logU.classList.toggle('active')
     if(logU.classList.contains('active')){
        document.querySelector('.x2').addEventListener('click',function(){
              logU.classList.remove('active');
        })
     }
  }) 