$(document).ready(function(){

   // jQuery OwlCarousel2-2.3.4
   var one = $("#owl-one");
   var two = $("#owl-two");
   one.owlCarousel({
      loop:true,
      margin:20,
      dotsEach:2,
      smartSpeed:700,
      responsive:{
          0:{ items:1},
          768:{ items:3,
            margin:50},
          1000:{ items:4 } 
           }
      });
      
     
        var owl = $('.owl-carousel');
        owl.owlCarousel();
        // Go to the next item
        $('#owl-prev').click(function() {
            owl.trigger('next.owl.carousel',[1000]);
    });
       var navToggleButton = $("#owl-prev a");
     $("#owl-prev a").click(function() {
        $("#owl-prev a").removeClass('active');
        $(this).addClass('active');
      });
    

       
     // Функция для анимация иконки 
      function navButtonToggle(){
        if (navToggleButton.hasClass("active")) {
          navToggleButton.removeClass("active");
        } else {
          navToggleButton.addClass("active");
        }
      }
   //slide2id - плавная прокрутка по ссылкам внутри страницы
      $("li a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
          highlightSelector:"nav a"
      });

	 });
