$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
            $('#navbar-mobile').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
            $('#navbar-mobile').removeClass('scrolled');
        }
    });

    $('#menuicon').click(function() {
        $('#menuicon').hide();
        $('#crossicon').show();
        $('#navbar-mobile').show();
    })

    $('#crossicon').click(function() {
        $('#menuicon').show();
        $('#crossicon').hide();
        $('#navbar-mobile').hide();
    })

    $('#solution-submenu').click(function() {
        $('.solu-visible').toggle();
        $('.reso-visible').hide();
        $('.comp-visible').hide();
    })

    $('#resources-submenu').click(function() {
        $('.reso-visible').toggle();
        $('.solu-visible').hide();
        $('.comp-visible').hide();
    })

    $('#company-submenu').click(function() {
        $('.comp-visible').toggle();
        $('.reso-visible').hide();
        $('.solu-visible').hide();
    })
});


