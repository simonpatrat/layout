console.log('\'Allo \'Allo!');

$('.project-gallery-item').on('click', function() {


    $('.projects-gallery-section').addClass('scaled-down');

    $('.loader-overlay').addClass('visible');

    setTimeout(function() {

        $('.projects-gallery-section').removeClass('scaled-down');
        $('.loader-overlay').removeClass('visible');

    }, 3000);
    


});
