
var backToTopBtn = document.getElementById("back-to-top-btn");


window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};


backToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
});


function redirectAbout(){
  window.location.href = "/about.html";
}

function redirectServices(){
  window.location.href = "/services.html";
}
