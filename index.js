window.addEventListener('load', () =>{
    const preloader =document.querySelector('.preloader')
    preloader.classList.add('loaded')
})
var abt=document.getElementById("banner").offsetTop
window.onscroll=function(){
    if(window.pageYOffset<abt){
        document.getElementById("header").style.backgroundColor="#09191d00"
        document.getElementById("logo").style.display="none"
    }
    if(window.pageYOffset>abt){
        document.getElementById("header").style.backgroundColor="#09191d"
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
var k=0
function step(n){
    var x=document.getElementsByClassName("pic")

    if(k==0&n==-1){
        k=5
    }
    else if(k==5&n==1){
        k=0
    }
    else{
        k=k+n;
    }
    for(j=0;j<6;j++){
        if(k!=j){
            x[j].style.display="none"
        }
        else{
            x[j].style.display="block"
            console.log(j)
        }
    }
}
