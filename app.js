const  accordion =  document.querySelectorAll('.header');
 accordion.forEach(header => header.addEventListener('click', (e) => {
    
    header.parentElement.classList.toggle('open');
 } ))
