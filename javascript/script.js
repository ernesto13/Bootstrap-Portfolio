$(document).ready(function() {
    $(".work img").on("mouseenter", function() {
        $(this).animate({
            opacity: '0.9',
            height: '290px',
            width: '300px',
        })
    });
});