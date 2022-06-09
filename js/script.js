$(document).ready(function(){

  let slideAtual = 1;
  let listaSlides = ["banner-02", "banner-03","banner-09"]

  setInterval(mudarSlide, 1000)

  function mudarSlide(){

    if (slideAtual > 0){
      $("#carrossel").removeClass(listaSlides[slideAtual - 1])
    } else if(slideAtual == 0){
      $("#carrossel").removeClass(listaSlides[(listaSlides.length) -1])
    }

    $("#carrossel").addClass(listaSlides[slideAtual]);

    slideAtual++

    if(slideAtual > (listaSlides.length) -1){
      slideAtual = 0;
    }

  }

})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }