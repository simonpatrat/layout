console.log('\'Allo \'Allo!');

$('.project-gallery-item').on('click', function() {

  var x = $(this).offset().left;
  var y = $(this).offset().top;
  var width = $(this).width();
  var height = $(this).height();

  transformOverlay( function() {

     console.log('callback function !');
    $('.loader-overlay').addClass('visible');
    setTimeout(function() {
      $('.loader-overlay').removeClass('visible');
    }, 3000);
  });

  function transformOverlay(callBack) {

    var overlayWidth = width;
    var overlayHeight = height;
    $('.loader-overlay').css({
      'top' : y + 'px',
      'left' : x + 'px',
      'right' : 'auto',
      'bottom': 'auto',
      'width' : width + 'px',
      'height' : height + 'px'
    });

    return callBack();
  }



});
