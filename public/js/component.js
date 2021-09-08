
$(window).load(function() {
  $("#loader").delay(1000).fadeOut("slow");
})
      

function openNav() {
  // alert("open")
  document.querySelector(".new-nav").style.cssText = "left :360px;transition: 0.5s";
  document.querySelector(".bg-light").style.cssText = "left :360px;transition: 0.5s";
  document.querySelector("main").style.cssText = "transform :translateX(360px);transition: 0.5s";
  document.getElementById("mySidenav").style.cssText = "width: 360px; transition: 0.5s";
  
  
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.cssText = "width:0 ; transition: 0.5s";
  document.querySelector("main").style.cssText = "transform :translateX(0px);transition: 0.5s";
  document.querySelector(".copy-span").style.visibility = "hidden";
  document.querySelector(".new-nav").style.cssText = "left :0px;transition: 0.5s";
  document.querySelector(".bg-light").style.cssText = "left :0px;transition: 0.5s";
}


