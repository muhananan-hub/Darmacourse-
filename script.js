// NAVBAR EFFECT
window.addEventListener('scroll', function(){

  const nav = document.querySelector('nav');

  if(window.scrollY > 50){
    nav.classList.add('active-nav');
  }else{
    nav.classList.remove('active-nav');
  }

});

// BUTTON TOP
const topBtn = document.getElementById('topBtn');

window.onscroll = function(){

  if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
    topBtn.style.display = 'flex';
  }else{
    topBtn.style.display = 'none';
  }

}

function topFunction(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
}

// SCROLL ANIMATION
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', ()=>{

  cards.forEach(card => {

    const position = card.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if(position < screen - 100){
      card.classList.add('show');
    }

  });

});
