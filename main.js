var elSiteHeader = document.querySelector(".site-header");
var elMenuBtn = document.querySelector(".js-menu-btn");
var elMenuCloseBtn = document.querySelector(".js-menu-close-btn");

elMenuBtn.addEventListener("click", function(){
  
  elSiteHeader.classList.add("open-menu");
  document.body.classList.add("unscrollbody")
  
  
});

elMenuCloseBtn.addEventListener("click", function(){
  
  elSiteHeader.classList.remove("open-menu");
});

function handleResponsiveMenu() {
  var screenWidth = window.innerWidth;
  
  if (screenWidth > 600) {
    elSiteHeader.classList.remove("open-menu");
  }
  
  
}

window.addEventListener("resize", handleResponsiveMenu);

handleResponsiveMenu();
