$(document).ready(function() {
    $(".work img").on("mouseenter", function() {
        $(this).animate({
            height: '250px',
            width: '375px',
        })
    });

    let name = document.getElementById("first_name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");


    $("#contact-form").submit("click", function(event) {

        if (name.value === "" || email.value === "" || message.value === "") {

            alertify.error('Fill out proper fields!');
            event.preventDefault();

        } else {
            $.ajax({
                url: "https://formspree.io/esamaniego53@gmail.com",
                method: "POST",
                data: $('#contact-form').serialize(),
                dataType: "json"
            });

            $(this).get(0).reset()
            alertify.success('Thank You for your time!');
            // event.preventDefault();

        }
    });
});