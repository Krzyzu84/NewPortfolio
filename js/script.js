$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Frontend Developer.", "Web Developer.", "Software Engineer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  items: 4,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

var body = $("body");

var skillsTopOffset = $(".skillsSection").offset().top;
$(window).scroll(function () {
  if (window.pageYOffset > skillsTopOffset - $(window).height() + 1200) {
    $(".chart").easyPieChart({
      easing: "easeInOut",
      barColor: "#fff",
      trackColor: false,
      scaleColor: false,
      lineWidth: 4,
      size: 152,
      onStep: function (from, to, percent) {
        $(this.el).find(".percent").text(Math.round(percent));
      },
    });
    body.addClass("fixedNav");
  } else {
    body.removeClass("fixedNav");
  }
});

$("#navigation li a").click(function (e) {
  e.preventDefault();
  var targetElement = $(this).attr("href");
  var targetPosition = $(targetElement).offset().top;
  $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
});
