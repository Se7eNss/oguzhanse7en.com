
 //--------------------------yazı efekti start----------------------
  function kelime(){
   var textWrapper = document.querySelector('.ml2');
 textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
 
 anime.timeline({}).add({
     targets: '.ml2 .letter',
     scale: [4,1],
     opacity: [0,1],
     translateZ: 0,
     easing: "easeOutExpo",
     duration: 950,
     delay: (el, i) => 70*i
   })
  }
  window.setTimeout(kelime,100);

////--------scrollll menuu--------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
    var w = window.innerWidth;
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').style.backgroundColor='black'
        document.getElementById('navbar_top').style.boxShadow ='0 0 10px #009c77 '
        
      
      } else {
        if(w>991){
          document.getElementById('navbar_top').style.backgroundColor='transparent'
        }
        document.getElementById('navbar_top').style.boxShadow ='none'
      } 
  });
}); 

//////7-------------------------bg---------
function bg(){
  if ($('.navbar-toggler').attr('aria-expanded') === "true") {
      $('.navbar').css({'background':'black'})
     
  }
  else{
    $('.navbar').css({'background':'none'})
  }
  
}

////-----------------------------active menu-----------------------------------
var btnContainer = document.getElementById("navbarText");
var sections = document.querySelectorAll("section")
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  $('.section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.nav a.active').removeClass('active');
          $('.nav a').eq(i).addClass('active');
      }
  });
}).scroll();
// // ---------------------scrolll-----------------
var w = window.innerWidth;
if(w>991){
 $('.section').height($('.work').height());
  $('.section').first().addClass('active');
// $('.nav-link').first().addClass('active');

$(document).on('mousewheel DOMMouseScroll',function(e){
  var active = $('.section.active')
  var nav =$('.nav-link');

  var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
  if(delta<0){
    var next=active.next()
   
    if(next.length ){
      
      var timer = setTimeout(function(){
        $('body, html').animate({
          scrollTop: next.offset().top
      },'fast');
      next.addClass('active').siblings().removeClass('active');
      clearTimeout(timer);
      },0)
    }
  }else{
    var prev =active.prev();
    if(prev.length){
      var timer = setTimeout(function(){
        $('body, html').animate({
          scrollTop: prev.offset().top
      }, 'fast');
      prev.addClass('active').siblings().removeClass('active');
     clearTimeout(timer);
      },0)
    }
  }
})
}
///--------------jumpsss----------
function jump(){
  $("html, body").animate({ scrollTop: $('#home').offset().top }, 'fast');
}
function jump1(){
  $("html, body").animate({ scrollTop: $('#about').offset().top }, 'fast');
}
function jump2(){
  $("html, body").animate({ scrollTop: $('#skills').offset().top }, 'fast');
}
function jump3(){
  $("html, body").animate({ scrollTop: $('#works').offset().top }, 'fast');
}


// $('*').click((e)=>{
//   if(!$(e.target).is('.navbar-toggler')){
//     alert('sss')
//   }
// })
var menu = $('#navbarText')

// $('.nav-link').click(()=>{
//   menu.removeClass('show')
// })
$('body').click(function() {
  menu.removeClass('show')
});

