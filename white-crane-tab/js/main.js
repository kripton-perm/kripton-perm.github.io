  var m = document.querySelectorAll(".menu-link");
  var c = document.querySelector(".menu-close-input");
  var s = document.querySelectorAll(".section-input");
  var i = 0;
  for (var i = 0; i < m.length; i++) {
    m[i].addEventListener("click", function(event) {
    event.preventDefault();
    c.checked = true;
    s[i].checked = true;
    }
  )
}
        
      