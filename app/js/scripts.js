
$(document).ready(function(){

 		//Функция для изменение элементов 

        $(window).on('resize', function(){
        var win = $(this);
       if (win.width() > 1199 ) { 
        $('#mobile-only').addClass('justify-content-center');
        } else {
         $('#mobile-only').removeClass('justify-content-center');
          }
       });
     }); 




