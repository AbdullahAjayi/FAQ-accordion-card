const  accordion =  document.querySelectorAll('.header');


 accordion.forEach(header => {
   header.addEventListener('click', onClick)
 });


 function onClick(e) {
    accordion.forEach(header => {
       header.parentElement.classList.remove('open')
    });

    e.target.parentElement.classList.toggle('open');

    if(e.target.classList.contains('header-text') || e.target.classList.contains('arrow')) {
      e.target.parentElement.parentElement.classList.toggle('open');
    }
 }
