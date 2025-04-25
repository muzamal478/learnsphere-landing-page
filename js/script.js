$(document).ready(function () {
    // Smooth Scroll
    $('a.nav-link, .hero .btn').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Course Slider (Simple Manual Toggle)
    const cards = $('#course-slider .col-md-4');
    let current = 0;
    function showSlide(index) {
        cards.hide();
        cards.eq(index).fadeIn();
        if (index + 1 < cards.length) {
            cards.eq(index + 1).fadeIn();
        }
        if (index + 2 < cards.length) {
            cards.eq(index + 2).fadeIn();
        }
    }
    showSlide(current);
    setInterval(() => {
        current = (current + 3) % cards.length;
        showSlide(current);
    }, 5000);

    // Form Validation
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();
        if (name && email && message) {
            alert('Message sent successfully!');
            this.reset();
        } else {
            alert('Please fill all fields.');
        }
    });
});