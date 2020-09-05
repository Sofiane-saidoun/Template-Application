$(document).ready(function () {
  /* navigation bar color change */
  var changeColor = function () {
    /*console.log("scroll");*/
    var scroll_start = 0;
    var startchange = $("#start");
    var offset = startchange.offset();
    if (startchange.length) {
      $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
          $(".navbar").addClass("navbar-light");
          $(".navbar").removeClass("navbar-dark");
          $(".navbar").addClass("bg-light");
        } else {
          $(".navbar").removeClass("navbar-light");
          $(".navbar").removeClass("bg-light");
          $(".navbar").addClass("navbar-dark");

          /*console.log("portfolio out");*/
        }
      });
    }
  };
  var scroll = function () {
    $("#menu a").click(function (event) {
      event.preventDefault();
      var $anchor = $(this);

      $("html, body").animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1000
      );
    });
  };
  scroll();
  changeColor();
});
