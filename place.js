const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

Let menu = document.querySelector('menu-icon');
Let side-bar = document.querySelector('.side-bar');

menu.onclick  = () => {
    menu.classList.toggle('bx-x');
    side-bar.classList.toggle('open');
}
/*
var mysong = document.getElementById("mysong");
 var icon = document.getElementById("icon");

 icon.onclick = function(){
    if(mysong.paused){
      mysong.play();
      icon src="";
    }
    else{
        mysong.pause();
      icon src="";
    }
    i
 }
 */