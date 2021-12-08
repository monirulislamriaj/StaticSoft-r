$(document).ready(function () {
  "use strict";
  // Sticky Nav
  $(window).on("scroll", function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $("#mainnavigationBar").addClass("sticky-nav");
    } else {
      $("#mainnavigationBar").removeClass("sticky-nav");
    }
  });
  
  $('.navbar-toggler').on( 'click', function() {
    var navbar = $('#mainnavigationBar');
    navbar.toggleClass('bg-nav');
  });

  //Copyright Year
  var copyrightYear = document.getElementById('copyrightYear');
  copyrightYear.innerHTML = new Date().getFullYear();
  
  // Video Replace from data attribute
  $(".video-button").on("click", function () {
    var video =
      '<iframe allowfullscreen src="' +
      $(this).attr("data-video") +
      '"></iframe>';
    $(this).replaceWith(video);
  });

  //  AOS Initialize
  AOS.init();

  // Background Shape Switches
  TweenMax.fromTo(
    ".switch",
    2,
    { opacity: 1 },
    { opacity: 0.3, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-two",
    2,
    { y: 0 },
    { y: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-three",
    2,
    { x: 0 },
    { x: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );

  $(".about-item").matchHeight({
    byRow: 0,
  });

  $(".feature-two-items").matchHeight({
    byRow: 0,
  });
  
  // Magnific Popup
  $(".popup-vimeo").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // counter-up
  $(".counter").counterUp({});
  //masnary load more option
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.review-item',
    percentPosition: true
  });
  
  $('.load-more').on( 'click', function() {
    // create new item elements
      var $items = $( ".hidden" ).removeClass( "hidden");
      //append items to grid
      $grid.append( $items )
        // add and lay out newly appended items
        .masonry( 'appended', $items );
      //hide button on expanded mood
    $(this).hide()
  });

  //Show password
  $( ".viewPassword" ).click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
});

