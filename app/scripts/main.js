console.log('\'Allo \'Allo!');

$('.project-gallery-item').on('click', function() {

  $('.loader-overlay').css({

  });

  $('.loader-overlay').addClass('visible');
  setTimeout(function() {
    $('.loader-overlay').removeClass('visible');
  }, 3000);
});
