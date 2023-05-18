$(document).ready(function() {
  var scrollLink = $('.scroll');
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
});

*/
document
  .querySelectorAll("a")
  .forEach((el) => el.addEventListener("click", (ev) => ev.preventDefault()));