function fungsi() {
    document.getElementById("fungsi").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.button')) {
      var dropdowns = document.getElementsByClassName("isidrop");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

var btn = document.getElementsByClassName("btn");
var slide = document.getElementsByClassName("proses")

btn[0].onclick = function() {
  slide.style.transform = "translateX(0px)";
}

btn[1].onclick = function() {
  slide.style.transform = "translateX(-800px)";
}

btn[2].onclick = function() {
  slide.style.transform = "translateX(-1600px)";
}

btn[3].onclick = function() {
  slide.style.transform = "translateX(-2400px)";
}

btn[4].onclick = function() {
  slide.style.transform = "translateX(-3200px)";
}

btn[5].onclick = function() {
  slide.style.transform = "translateX(-4000px)";
}

btn[6].onclick = function() {
  slide.style.transform = "translateX(-4800px)";
}

btn[7].onclick = function() {
  slide.style.transform = "translateX(-5600px)";
}