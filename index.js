window.addEventListener('load', () =>{
    window.scrollTo(0,0)
    const loader =document.querySelector('.loader');
    const preloader=document.querySelector('.preloader');
    const banner=document.querySelector('.banner');
    const navbar=document.querySelector('.nav');
    const products = document.querySelector('.products');
    const cover = document.querySelector('.cover');
    loader.classList.add('loaderaft');
    preloader.classList.add('preloaderanime');
    banner.classList.add('banneraft');
    navbar.classList.add('navanime');
    products.style.backgroundImage = "linear-gradient(to bottom, #000000bd, #0000009f), url(Bg/prodbg.jpg)";
    cover.style.backgroundImage = "linear-gradient(to bottom, #00000094,#00000079), url(Bg/mainbg.jpg)";
})

const navSlide=()=>{
    const icon=document.querySelector('.navicon');
    const nav=document.querySelector('.nav');
    const bar=document.querySelector('.navlist');
    const navlinks = document.querySelectorAll('.navitem');
    nav.addEventListener('click', ()=> {
        bar.classList.toggle('nav-active');
        icon.classList.toggle('x');
        navlinks.forEach(link =>{
            link.classList.toggle('navaactive');
        })
    })
}
navSlide();

function nav(p){
  window.scrollTo(0,(p.offsetTop)-20)
}
function scrollappear(object){
    var objects=document.querySelectorAll(object);
    var screenposition=window.innerHeight/1.2;
    objects.forEach(obj =>{
        var objposition=obj.getBoundingClientRect().top;
        if(objposition<screenposition){
        obj.classList.add('objectappear');
        }
        if(objposition>window.innerHeight){
        obj.classList.remove('objectappear');
        }
    })
}
function navfade(){
    var screenposition=window.innerHeight/2.1;
    const navbar=document.querySelector('header');
    const logo = document.querySelector('.logo');

    if(window.pageYOffset<screenposition){
        navbar.classList.remove('navbaractive');
        logo.classList.remove('logoactive');
    }
    if(window.pageYOffset>screenposition){
        navbar.classList.add('navbaractive');
        logo.classList.add('logoactive');
    }
}
window.addEventListener('scroll', ()=>{
    navfade();
    scrollappear('.left');
    scrollappear('.right');
    scrollappear('.bottom');
})
