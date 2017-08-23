$(document).ready(function(){

    const typed = new Typed("#hello-header", {
        strings: ["Hello...^1000\n\nAnd welcome to my world of web development."],
        typeSpeed: 25,
        cursorChar: "_"
    });

    $("a[href*=\\#]").click(function(){
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top
        }, 750);
        return false;
    });
});