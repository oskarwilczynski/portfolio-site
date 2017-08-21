$(document).ready(function(){

    const typed = new Typed('#hello-header', {
        strings: ["Hello...^1000\n\nAnd welcome to my world of web development."],
        typeSpeed: 25,
        cursorChar: '_'
    });

    let sections = $('a'),
          nav = $('#navbar-custom'),
          nav_height = nav.outerHeight();
     
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
     
        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
     
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
     
                $(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });

    $('a[href*=\\#]').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 750);
        return false;
    });

});