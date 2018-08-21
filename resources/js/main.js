
$(document).ready(function(){
  $('.carousel').slick({
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      draggable: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false
  });

   var previousScroll = 0;

  $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();
      if (currentScroll - previousScroll > 50) {
          var NavBarHeight = $('.navbar').css('height');
          $('.navbar').animate({top: '-' + NavBarHeight}, 150);
          previousScroll = currentScroll;
      }

      if (previousScroll - currentScroll > 50) {
        $('.navbar').animate({top: 0}, 150);
        previousScroll = currentScroll;
}
});
})