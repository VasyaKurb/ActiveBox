$(function(){
  $('#descBtn').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('.skills').offset().top }, 1000);
    e.preventDefault();
  });

  $('.burger').click(function(){
    $('.menu').toggleClass('show-menu');
  });

  $('.download-btn').click(function() {
    $('.wrapper-modal').addClass('active');
  });

  $('#btn-close').click(function() {
    $('.wrapper-modal').removeClass('active');
  });

  $('.dot').click(function() {
    $(this).toggleClass('active');
  });
});