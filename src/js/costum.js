
//--------------------------------foto animation-------------------------------
const el = document.getElementById('demo')

$('#demo').tilt({
  scale: 1.1,
})
///----------------------hareket---------------------------------
var skill = document.getElementById("skill")
var skill1 = document.getElementById("skill1")
var img = document.getElementById("img")
var head = document.getElementById("head")
var img1 = document.getElementById("img1")
var head1 = document.getElementById("head1")
var w =window.innerWidth
function move(){
 
 if(w<920){
  img.style.transform = "translateY(-50px) scale(1.1)"
  head.style.transform = "translateY(-100px)"
 }else{
  img.style.transform = "translateX(50px) scale(1.1)"
  head.style.transform = "translateY(-100px)"
  
 }
}
function back(){
  img.style.transform = "translateX(-10px)"
  head.style.transform = "translateY(10px)"
  
}
function move1(){
  if(w<920){
    img1.style.transform = "translateY(-50px) scale(1.1)"
    head1.style.transform = "translateY(-100px)"

  }else{
    img1.style.transform = "translateX(50px) scale(1.1)"
    head1.style.transform = "translateY(-100px)"
  }
  
 
}
function back1(){
  img1.style.transform = "translateX(-10px)"
  head1.style.transform = "translateY(10px)"
  
}

////------------------owl----------------------
var owl = $('#owl-example')
owl.owlCarousel({
  autoplay:true,
  center: true,
  items:3,
  loop:true,
  margin:10,
  responsive:{
      990:{
          items:2
      },
      300:{
         items:1
      }
  }
});

////------------------scrollreveaalll----------------------
ScrollReveal().reveal('.info',{
  duration: 2000,
  origin: 'left',
  delay:100,
  distance: '50px',
  viewFactor: 0,
 
});
ScrollReveal().reveal('.ben-wrap',{
  duration: 2000,
  origin: 'top',
  delay:100,
  distance: '50px',
  viewFactor: 0,
  reset:true,
 
});
ScrollReveal().reveal('#skill',{
  duration: 2000,
  origin: 'top',
  delay:100,
  distance: '50px',
  viewFactor: 0,
 
});
ScrollReveal().reveal('#skill1',{
  duration: 2000,
  origin: 'bottom',
  delay:100,
  distance: '50px',
  viewFactor: 0,

});
ScrollReveal().reveal('#owl-example',{
  duration: 2000,
  origin: 'left',
  delay:100,
  distance: '50px',
  viewFactor: 0,
  
});
ScrollReveal().reveal('#footer',{
  duration: 2000,
  origin: 'bottom',
  delay:100,
  distance: '20px',
  viewFactor: 0,
  reset:true
});