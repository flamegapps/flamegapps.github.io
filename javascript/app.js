$(document).ready(function() {
  let width = $(window).width();
  if (width <= 480) {
    $('.sidenav').sidenav();
    $('#nav-hide').hide();
  } else {
    $('#nav-btn').hide();
  }
});