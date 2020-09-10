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

function step(n){
    var x=document.getElementsByClassName("pic")
    for(i=0;i<6;i++){
        if(x[i].style.display!="none"){
            var f=i
            break
        }
    }
    if(f==0&n==-1){
        var k=5
    }
    else if(f==5&n==1){
        k=0
    }
    else{
        k=f+n;
    }
    for(j=0;j<6;j++){
        if(k!=j){
            x[j].style.display="none"
        }
        else{
            x[j].style.display="block"
        }
    }
}
