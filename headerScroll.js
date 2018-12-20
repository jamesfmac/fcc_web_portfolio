
$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
    $(".navbar").addClass("nav-shadow");
  } else {
    $(".navbar").removeClass("nav-shadow");
  }
});