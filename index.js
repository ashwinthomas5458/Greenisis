var abt=document.getElementById("banner").offsetTop
window.onscroll=function(){
    if(window.pageYOffset<abt){
        document.getElementById("header").style.backgroundColor="#01475800"
        document.getElementById("logo").style.display="none"
    }
    if(window.pageYOffset>abt){
        document.getElementById("header").style.backgroundColor="#014758"
        document.getElementById("logo").style.display="flex"
    }
}
const navSlide=()=>{
    const icon=document.querySelector('.navicon')
    const nav=document.querySelector('.nav')
    const bar=document.querySelector('.navlist')
    nav.addEventListener('click', ()=> {
        bar.classList.toggle('nav-active')
        icon.classList.toggle('x')
    })
}
navSlide();