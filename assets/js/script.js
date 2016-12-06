$(document).ready(function(){
    
    $('.sub-navbar a').click(function(){
        $('.sub-navbar a').parent().removeClass('active');
        $(this).parent().addClass('active');

        var display_id = $(this).attr('href');
        $('.sub-menu-tab').hide();
        $(display_id).fadeIn(500);
    });

})
