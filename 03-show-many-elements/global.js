window.onload = function() {
    var clickIt = document.getElementById("button");
    clickIt.addEventListener("click", function(){
      var textToShow = document.getElementsByClassName("show_me");
      for (var i = 0; i < textToShow.length; i++) {
          textToShow[i].style.display = "block";
      }
    });
    };