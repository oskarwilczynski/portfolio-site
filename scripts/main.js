var typed = new Typed('#hello-header', {
    strings: ["Hello...^1000\n\nAnd welcome to my world of web development."],
    typeSpeed: 25,
    cursorChar: '_'
});

$(".skill-icon").mouseenter(function() {
    $(this).css("text-decoration", "underline").css("text-decoration-color", "#18CAE6");
}).mouseleave(function() {
     $(this).css("text-decoration", "none");
});