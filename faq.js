document.addEventListener("DOMContentLoaded", function() {
    var botones = document.querySelectorAll('.accordion-button');
    botones.forEach(function(boton, index) {
      boton.addEventListener("click", function(){
        document.querySelector(`#answer${index}`).style.display = "list-item";
      });
    });
  });