window.onload = function() {
    var clickIt = document.getElementById("button");
    clickIt.addEventListener("click", function(){
      var textToHide = document.getElementsByClassName("hide_me");
      for (var i = 0; i < textToHide.length; i++) {
          textToHide[i].style.display = "none";
      }
    });
    }; 