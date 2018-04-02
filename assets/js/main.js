$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

$(document).ready(function () {
 $(document).click(function (event) {
   const clickover = $(event.target);
   const _opened = $(".navbar-collapse").hasClass("show");

   if (_opened === true && !clickover.hasClass("navbar-toggler")) {
     $(".navbar-toggler").click();
   }
 });
});

$(".scroll").click(function(event){
  event.preventDefault();

  //calculate destination place
  const top = $(this.hash).offset().top;
  const height = $(document).height() - $(window).height();
  const destination = (top > height) ? height : top;

  //go to destination
  $('html,body').animate({scrollTop: destination}, 1000,'swing');
});