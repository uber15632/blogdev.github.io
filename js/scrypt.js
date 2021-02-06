function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  };
    

//Tabs

$(document).ready(function(){
$(function() {
  
    $('ul.articles__nav-list').on('click', 'li:not(.articles__nav-item-active)', function() {
      $(this)
        .addClass('articles__nav-item-active').siblings().removeClass('articles__nav-item-active')
        .closest('div.container').find('div.articles').removeClass('active').eq($(this).index()).addClass('active');
        var timeOut;
        $('html, body').animate({scrollTop: 0},500);

    });
});

$(function() {
  
    $('ul.works__nav-list').on('click', 'li:not(.works__nav-item-active)', function() {
      $(this)
        .addClass('works__nav-item-active').siblings().removeClass('works__nav-item-active')
        .closest('div.container').find('div.works__wrapper').removeClass('active').eq($(this).index()).addClass('active');
        $('html, body').animate({scrollTop: 0},500);
    });
});

//Moodal

// $('#latter').on('click', function(){
//   $('.overlay, #modal-message').fadeIn('slow');
//   $('body').addClass('no-scroll');
//   if($('body').has('sidebar-show')){
//     $('body').removeClass('sidebar-show');
//   }
  
// });
// $('.modal__close').on('click', function(){
//   $('.overlay, #modal-message').fadeOut('slow');
//   $('body').removeClass('no-scroll');
// });
// $(document).mouseup(function (e){
//   let modalctr = $(".overlay");
//   let modal = $("#modal-message");
//   if (!modal.is(e.target) && modal.has(e.target).length === 0){
//   modalctr.fadeOut('slow');
//   $('body').removeClass('no-scroll');
//   }
//   });


$('#latter').on('click', function(){
  $('.modal').fadeIn('slow');
  $('.overlay').addClass('active');
  
  $('body').addClass('no-scroll');
  if($('body').has('sidebar-show')){
    $('body').removeClass('sidebar-show');
  }
  
});
$('.modal__close').on('click', function(){
  $('.modal').fadeOut('slow');
  $('.overlay').removeClass('active');
  $('body').removeClass('no-scroll');
});

$('.overlay').click(function(e){
  $('.modal').fadeOut('slow');
  $('body').removeClass('no-scroll sidebar-show ');
  $('.overlay').removeClass('active');
  e.stopPropagation();
  });


//UP

 $(window).scroll(function(){
  if($(this).scrollTop() > 500) {
    $('.page_up').fadeIn('slow');
  }else {
   $('.page_up').fadeOut('slow');
  }
 });
 let $page = $('html, body');
 $('a[href="#up"]').click(function() {
   $page.animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   }, 700);
   return false;
});

//Validate Form

function valideForms(params){
  $(params).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required:'',
          minlength: jQuery.validator.format("Имя должно состоять с {2} букв и больше")
        },
        email: {
          required:'',
          email: "Проверте правильность написания своего Email "
        }
      }
    });
}
valideForms('#form');


//RESIZE TEXTAREA aUTO

$('textarea').on('input', function() {
  $(this).outerHeight(0); // reset height to reinitialize scrollHeight
  var scrollHeight = parseInt($(this).prop('scrollHeight'));
  $(this).height(scrollHeight);
  $(this).prev('.Content').outerHeight(300 - $(this).outerHeight());
});


//Burger
$('.burger').on('click', function(){
  $('body').toggleClass('sidebar-show  no-scroll');
  $('.overlay').toggleClass('active');
  
});



});

