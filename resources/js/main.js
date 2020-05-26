var header = document.getElementById("nav-menu");
var btn = header.getElementsByClassName("nav-item");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


$(document).ready(function () {
    $("main").scroll(function () {
        $("#navmenu").addClass("navbar2");
    });
});

