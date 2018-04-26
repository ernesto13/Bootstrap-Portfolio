$(document).ready(function() {
    $(".work img").on("mouseenter", function() {
        $(this).animate({
            height: '250px',
            width: '375px',
        })
    });
});