var abt=document.getElementById("banner").offsetTop
window.onscroll=function(){
    if(window.pageYOffset<abt){
        document.getElementById("header").style.backgroundColor="#09191d00"
    }
    if(window.pageYOffset>abt){
        document.getElementById("header").style.backgroundColor="#09191d"
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
function banana(b){
    var banana=document.getElementById("banana")
    banana.src=b.src
}
function ginger(g){
    var ginger=document.getElementById("ginger")
    ginger.src=g.src
}
function orchid(o){
    var orchid=document.getElementById("orchid")
    orchid.src=o.src
}
function ornm(d){
    var ornm=document.getElementById("ornm")
    ornm.src=d.src
}