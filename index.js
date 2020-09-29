window.addEventListener('load', () =>{
    window.scrollTo(0,0)
    const loader =document.querySelector('.loader')
    const preloader=document.querySelector('.preloader')
    const banner=document.querySelector('.banner')
    const navbar=document.querySelector('.nav')
    loader.classList.add('loaderaft')
    preloader.classList.add('preloaderanime')
    banner.classList.add('banneraft')
    navbar.classList.add('navanime')
})
const abt=document.getElementById("banner").offsetTop
const prodset=document.querySelector('.prodmark').offsetTop
const servtop=document.getElementById("servmark").offsetTop
const front=document.querySelector('.sfront')
const frontt=document.querySelector('.sfrontt')
const rcard=document.querySelectorAll('.rcard')
window.onscroll=function(){
    if(window.pageYOffset<abt){
        document.getElementById("header").style.backgroundColor="#09191d00"
        document.getElementById("logo").style.display="none"
    }
    if(window.pageYOffset>abt){
        document.getElementById("header").style.backgroundColor="#09191d"
        document.getElementById("logo").style.display="flex"
    }
    if(window.pageYOffset>(servtop)){
      front.classList.add('sfrontanime')
      frontt.classList.add('sfronttanime')
    }
    if(window.pageYOffset<(servtop-50)){
      front.classList.remove('sfrontanime')
      frontt.classList.remove('sfronttanime')
    }
    if(window.pageYOffset>prodset){
      rcard.forEach(element => {
        element.classList.add('rcardanime')
      });
    }
    if(window.pageYOffset<servtop){
      rcard.forEach(element => {
        element.classList.remove('rcardanime')
      });
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

function nav(p){
  window.scrollTo(0,(p.offsetTop)-20)
}
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
        }
    }
}
var submitted=false
function validateName() {
    var name = document.getElementById('name').value;
    if(name.length == 0) {
      alert("Name can't be blank") ;
      return false;

    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
      alert("Please enter your correct name") ;//Validation Message
      return false;
    }
    return true;
  }

  function validatePhone() {
    var phone = document.getElementById('phone').value;
    if(phone.length == 0) {
      alert("Phone number can't be blank") ;//Validation Message
      return false;
    }

   return true;

 }

 function validateEmail () {

  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert("Email can't be blank") ;//Validation Message
    return false;

  }


  return true;

}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail()) {

    alert("Form not submitted");//Validation Message
    return false;
  }
  else {
    submitted=true;
    return true;
  }

}
function loadp(){
  if(submitted){
      window.location="https://greenisis.in"
  }
}