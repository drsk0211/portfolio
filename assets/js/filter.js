$(document).ready(function(){
    $(".filter-nav-button").click(function(){
        $(".filter-nav-button").removeClass('active-button');
        $(this).addClass('active-button');

        var selector = $(this).attr("title");

        $('.portfolio-items[title!='+selector+']').hide(500);
        $('.portfolio-items[title='+selector+']').show(500);
    });

    $(".filter-nav-button[title=Все]").click(function(){
        $(".portfolio-items").show(500);
    });

  });