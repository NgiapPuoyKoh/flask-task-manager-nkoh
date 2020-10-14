// initialize side navbar

// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".sidenav");
//   var instances = M.Sidenav.init(elems, options);
// });

//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.collapsible');
//     var instances = M.Collapsible.init(elems, options);
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.tooltipped');
//     var instances = M.Tooltip.init(elems, options);
//   });

$(document).ready(function () {
  $(".sidenav").sidenav({ edge: "right" });
  $(".collapsible").collapsible();
  $(".tooltipped").tooltip();
});
