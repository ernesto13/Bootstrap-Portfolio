$(document).ready(function() {
    $(".work img").on("mouseenter", function() {
        $(this).animate({
            opacity: '0.7',
            height: '230px',
            width: '300px',
        })
    });
});