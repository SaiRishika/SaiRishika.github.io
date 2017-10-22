$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 1000);
    $("#carousel-example-generic").carousel({
        interval : 3000
    });
});