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