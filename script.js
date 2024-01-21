let img = document.querySelectorAll('img');

for(let i = 0; i < img.length; i++){
    img[i].addEventListener('click',function(){
        let active = document.querySelector('.active');
        //element h3 qui n'a pas une classe et qui y a une classe vide
        let text = document.querySelector('h3:not([class]), h3[class=""]');
        
        active.classList.remove('active');
        active.classList.add('image');

        img[i].classList.add('active');
        img[i].classList.remove('image');

        text.classList.add('hidden');
        //Accéder au frère suivant de <img>
        img[i].nextElementSibling.classList.remove('hidden');
    })
}
