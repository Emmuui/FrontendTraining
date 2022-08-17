$(document).ready(function() {
    $('#header__input').click(function(event) {
        $('.nav__ul').toggleClass('active');
        $('body').toggleClass('lock');
    });
});