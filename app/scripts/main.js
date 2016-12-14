console.log('\'Allo \'Allo!');

$('.project-gallery-item').on('click', function() {


    $(this).addClass('scaled-up');

    $('.loader-overlay').addClass('visible');

    setTimeout(function() {

        $('.scaled-up').removeClass('scaled-up');
        $('.loader-overlay').removeClass('visible');

    }, 3000);
    


});
