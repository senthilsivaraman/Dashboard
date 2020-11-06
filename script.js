
//Card Slider//

"use strict";
var underlineMenuItems = document.querySelectorAll("ul.check li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
        item.classList.add("active");
    });
});


var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mysidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "1px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mysidebar").style.width = "50px";
    document.getElementById("main").style.marginLeft = "50px";
    this.mini = true;
  }
}
