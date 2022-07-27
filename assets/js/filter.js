$(document).ready(function () {
    $(".filter-nav-button").click(function () {
        $(".filter-nav-button").removeClass('active-button');
        $(this).addClass('active-button');

        var selector = $(this).attr("title");

        $('.filter-item[title!=' + selector + ']').hide(200);
        $('.filter-item[title=' + selector + ']').show(200);
     
    });

    $(".filter-nav-button[title=Все]").click(function () {
        $(".filter-item").show(500);
    });

});