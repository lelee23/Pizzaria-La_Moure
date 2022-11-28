const burguer = document.querySelector('.burguer');
const menu = document.querySelector('.menu')
const linha1= document.querySelector('.linha1');
const linha2= document.querySelector('.linha2');
const linha3= document.querySelector('.linha3');

burguer.addEventListener('click', function(){
    menu.classList.toggle('show');
    linha1.classList.toggle('linha1');
    linha2.classList.toggle('linha2');
    linha3.classList.toggle('linha3');

})