$(document).ready(function() {

    // Set class for active link
    $('.ridematch .navbar-default a').click(function() {
        $('.ridematch .navbar-default a').removeClass('active');
        $(this).addClass('active');
    });

    // Toggle class for days of week
    $('.ridematch .days li').click(function() {
        $(this).toggleClass('active');
    });

    // Ridematch message sent confirmation
    $('.ridematch #sendMessage').click(function() {
        $('.modal-body h2, .modal-body .form-group, .modal-footer').hide();
        $('.modal-body p').show();
        return;
    });

});
